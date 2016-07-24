import r from '../../../database/rethinkdriver';
import {Lead, NewLead, UpdatedLead, AbandonLead} from './leadSchema';
import {errorObj} from '../utils';
import {GraphQLNonNull, GraphQLBoolean, GraphQLID, GraphQLString} from 'graphql';
import {GraphQLEmailType} from '../types';
import {isLoggedIn} from '../authorization';
import {getLeadByEmail} from './helpers';
import {createMaropostContact} from '../../../maropost/maropost';
import {verifyEmail} from '../../../kickbox/kickbox';
import uuid from 'node-uuid';
import {bodyTypes, verticalReaches, jumpFromFeetOptions, jumpFromPositions, ages} from '../../../../universal/types/choices';
import {jumpTypes} from '../../../../universal/types/jumpTypes';
import winston from 'winston';

const leadCreationStates = {
  NEW: "NEW",
  KICKBOX_VERIFIED: "KICKBOX_VERIFIED",
  KICKBOX_INVALID: "KICKBOX_INVALID",
  KICKBOX_NO_RESULT: "KICKBOX_NO_RESULT",
  MAROPOST_SUBSCRIBED: "MAROPOST_SUBSCRIBED",
  MAROPOST_ERROR: "MAROPOST_ERROR"
};

export default {
  createLead: {
    type: Lead,
    args: {
      listId: {type: new GraphQLNonNull(GraphQLString)},
      email: {type: new GraphQLNonNull(GraphQLEmailType)},
      age: {type: new GraphQLNonNull(GraphQLString)},
      jumpFromPosition: {type: new GraphQLNonNull(GraphQLString)},
      jumpFromFeet: {type: new GraphQLNonNull(GraphQLString)},
      verticalReach: {type: new GraphQLNonNull(GraphQLString)},
      bodyType: {type: new GraphQLNonNull(GraphQLString)},
      source: {type: GraphQLString},
      keyword: {type: GraphQLString}
    },
    async resolve(resolveSource, {
                    listId,
                    email,
                    age,
                    jumpFromPosition,
                    jumpFromFeet,
                    verticalReach,
                    bodyType,
                    source,
                    keyword
                  },
                  {rootValue}) {
      let mpContact, emailVerificationResult, updatedLead;

      const score = bodyTypes[bodyType].points +
                    verticalReaches[verticalReach].points +
                    jumpFromFeetOptions[jumpFromFeet].points +
                    jumpFromPositions[jumpFromPosition].points +
                    ages[age].points;

      // SCORE:
      // 5-6 points - speed type
      // 3-4 points - spring type
      // 0-2 points - strength type

      let jumpType = jumpTypes.STRENGTH;

      if (score >= 3) {
        jumpType = jumpTypes.SPRING;
      }

      if (score >= 5) {
        jumpType = jumpTypes.SPEED;
      }


      const existingLead = await getLeadByEmail(email);
      if (existingLead) {
        winston.log('info', 'a lead that already exists was let through:', existingLead);
        return existingLead;
      }

      // Doesn't exist, ok to create

      const generatedId = uuid.v4();
      const max = 3, min = 1;
      const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;

      const leadDoc = {
        id: generatedId,
        email,
        age,
        jumpFromPosition,
        jumpFromFeet,
        verticalReach,
        bodyType,
        score,
        jumpType,
        source,
        keyword,
        listId,
        createdAt: r.now(),
        split: randomnumber
      };

      try {
        emailVerificationResult = await verifyEmail(email);
        if (emailVerificationResult.result === 'undeliverable') {

          let displayError = 'Invalid email address';

          if (emailVerificationResult.did_you_mean) {
            displayError = `Did you mean ${emailVerificationResult.did_you_mean}?`;
          }
          throw new Error(displayError);
        }
      } catch (err) {
        winston.log('warn', 'Invalid email address', {email});
        throw errorObj({_error: 'Invalid email address', email: err.toString()});
      }

      leadDoc.state = leadCreationStates.KICKBOX_VERIFIED;

      winston.log('info', 'Email verified by kickbox', {email});

      // Insert verified lead from kickbox right away
      const newLead = await r.table('leads').insert(leadDoc, {returnChanges: true});
      if (!newLead.inserted) {
        winston.log('info', 'Could not create lead', leadDoc);
        throw errorObj({_error: 'Could not create lead'});
      }

      // attempt to create in maropost
      try {

        mpContact = await createMaropostContact(listId, leadDoc);

        if (!mpContact.subscribed) {
          winston.log('info', 'Could not subscribe lead', {leadDoc, mpContact});
          throw errorObj({_error: 'Subscription attempt was unsuccessful', 'email': 'Unable to subscribe'});
        }

      } catch (err) {
        leadDoc.state = leadCreationStates.MAROPOST_ERROR;
        leadDoc.maropost = mpContact || 'No results returned';

        let {id, ...maropostFailedUpdates} = leadDoc;
        updatedLead = await r.table('leads').get(id).update(maropostFailedUpdates, {returnChanges: true});
        winston.log('info', 'Could not subscribe lead', {updatedLead});
        throw errorObj({_error: 'Could not subscribe email', 'email': 'Unable to subscribe', err});
      }

      leadDoc.state = leadCreationStates.MAROPOST_SUBSCRIBED;
      leadDoc.maropost = mpContact;

      let {id, ...updates} = leadDoc;
      updatedLead = await r.table('leads').get(leadDoc.id).update(updates, {returnChanges: true});
      winston.log('info', 'Subscribed lead', {updatedLead, mpContact});

      return updatedLead.changes[0].new_val;
    }
  },
  // updateLead: {
  //   type: Lead,
  //   args: {
  //     lead: {type: new GraphQLNonNull(UpdatedLead)}
  //   },
  //   async resolve(source, {lead}, {rootValue}) {
  //     isLoggedIn(rootValue);
  //     lead.updatedAt = new Date();
  //     const {id, ...updates} = lead;
  //     const updatedLead = await r.table('leads').get(id).update(updates, {returnChanges: true});
  //     if (updatedLead.errors) {
  //       throw errorObj({_error: 'Could not update lead'});
  //     }
  //     return updatedLead.changes[0].new_val;
  //   }
  // },
  // deleteLead: {
  //   type: GraphQLBoolean,
  //   args: {
  //     id: {type: new GraphQLNonNull(GraphQLID)}
  //   },
  //   async resolve(source, {id}, {rootValue}) {
  //     isLoggedIn(rootValue);
  //     const result = await r.table('leads').get(id).delete();
  //     // return true is delete succeeded, false if doc wasn't found
  //     return !!result.deleted;
  //   }
  // },
  addToAbandonList: {
    type: AbandonLead,
    args: {
      email: {type: new GraphQLNonNull(GraphQLEmailType)},
      abandonListId: {type: new GraphQLNonNull(GraphQLString)}
      // source: {type: GraphQLString},
      // keyword: {type: GraphQLString},
      // jumpType: {type: GraphQLString},
    },
    async resolve(source, {email, abandonListId}, {rootValue}) {

      let mpContact, lead;

      const existingLead = await getLeadByEmail(email);
      if (existingLead) {
        let updates = {
          abandonded: true,
          abandondedAt: r.now(),
          abandonListId
        };
        lead = await r.table('leads').get(existingLead.id).update(updates, {returnChanges: true});
        winston.log('info', 'Lead from landing page added to potential abandon list', {abandonListId, lead});
      } else {

        const generatedId = uuid.v4();
        let newLead = {
          id: generatedId,
          email,
          abandonListId,
          createdAt: r.now(),
          abandonded: true,
          abandondedAt: r.now(),
          createdAsAbandon: true
        };

        lead = await r.table('leads').insert(newLead, {returnChanges: true});
        if (!lead.inserted) {
          winston.log('info', 'Could not add lead to abandon list', {abandonListId, newLead});
        }
      }

      let leadData = lead.changes[0].new_val;

      // attempt to create in maropost
      try {

        mpContact = await createMaropostContact(abandonListId, leadData);

        if (!mpContact.subscribed) {
          winston.log('info', 'Could not subscribe lead', {leadData, mpContact});
          throw errorObj({_error: 'Subscription attempt was unsuccessful', 'email': 'Unable to subscribe'});
        }

        leadData.abandonState = leadCreationStates.MAROPOST_SUBSCRIBED;
        leadData.maropostAbandon = mpContact;

        let {id, ...updates} = leadData;
        lead = await r.table('leads').get(leadData.id).update(updates, {returnChanges: true});
        winston.log('info', 'Lead was added to maropost abandon list:', {abandonListId, lead});

      } catch (err) {
        leadData.abandonState = leadCreationStates.MAROPOST_ERROR;
        leadData.maropostAbandon = mpContact || 'No results returned';

        let {id, ...maropostFailedUpdates} = leadData;
        lead = await r.table('leads').get(id).update(maropostFailedUpdates, {returnChanges: true});
        winston.log('info', 'Could not subscribe lead', {leadData, mpContact});
      }

      return lead.changes[0].new_val;
    }
  }
};
