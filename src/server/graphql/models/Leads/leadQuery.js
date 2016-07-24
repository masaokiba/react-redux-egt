import r from '../../../database/rethinkdriver';
import {GraphQLNonNull, GraphQLID} from 'graphql';
import {GraphQLEmailType} from '../types';
import {Lead} from './leadSchema';
import {errorObj} from '../utils';
import {isLoggedIn} from '../authorization';
import {getLeadByEmail} from './helpers';
import winston from 'winston';

export default {
  getLeadById: {
    type: Lead,
    args: {
      id: {type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve(source, {id}, {rootValue}) {
      winston.log('info', 'Get Lead for id', {id});
      const lead = await r.table('leads').get(id);
      if (!lead) {
        throw errorObj({_error: `Lead not found for id ${id}`});
      }

      return lead;
    }
  },
  getLeadByEmail: {
    type: Lead,
    args: {
      email: {type: new GraphQLNonNull(GraphQLEmailType)}
    },
    async resolve(source, {email}, {rootValue}) {
      winston.log('info', 'Get Lead for email', {email});
      const lead = await getLeadByEmail(email);
      if (!lead) {
        throw errorObj({_error: `Lead not found for email ${email}`});
      }

      return lead;
    }
  }
};

