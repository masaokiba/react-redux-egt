import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';
import {GraphQLEmailType} from '../types';
import {makeRequired} from '../utils';

// export const fields = [
//   'bodyType',
//   'verticalReach',
//   'jumpFromFeet',
//   'jumpFromPosition',
//   'age',
//   'email'
// ];

export const Lead = new GraphQLObjectType({
  name: 'Lead',
  description: 'A lead acquired through elite website',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID), description: 'The leadId'},
    email: {type: new GraphQLNonNull(GraphQLEmailType), description: 'The email address of the lead'},
    age: {type: GraphQLString, description: 'The age range of the player.'},
    jumpFromPosition: {type: GraphQLString, description: 'The preferred jump postition of the player.'},
    jumpFromFeet: {type: GraphQLString, description: 'The preferred feet for jumping of the player.'},
    verticalReach: {type: GraphQLString, description: 'The vertical reach of the player.'},
    bodyType: {type: GraphQLString, description: 'The body type of the player.'},
    score: {type: GraphQLInt, description: 'The player type.'},
    jumpType: {type: GraphQLString, description: 'The score the player received from the send workout questions.'},
    split: {type: GraphQLInt, description: 'Split Number'},
    source: {type: GraphQLString, description: 'The source of lead'},
    keyword: {type: GraphQLString, description: 'Keyword from search'},
    listId: {type: GraphQLString, description: 'The maropost list id.'},
    createdAt: {type: GraphQLString, description: 'The datetime the lead was created'},
    updatedAt: {type: GraphQLString, description: 'The datetime the lead was last updated'},
    createdAsAbandon: {type: GraphQLBoolean, description: 'The datetime the lead was last updated'},
  })
});

export const AbandonLead = new GraphQLObjectType({
  name: 'AbandonLead',
  description: 'A abandonLead acquired through abandoning the page',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID), description: 'The abandonLeadId'},
    abandonListId: {type: new GraphQLNonNull(GraphQLString), description: 'The abandon list id.'},
    email: {type: new GraphQLNonNull(GraphQLEmailType), description: 'The email address of the abandon abandonLead'},
    createdAt: {type: GraphQLString, description: 'The datetime the abandonLead was created'},
    updatedAt: {type: GraphQLString, description: 'The datetime the abandonLead was last updated'},
    createdAsAbandon: {type: GraphQLBoolean, description: 'The datetime the lead was last updated'}
  })
});

const inputFields = {
  id: {type: GraphQLID, description: 'The leadId'},
  age: {type: GraphQLString, description: 'The age range of the player.'},
  jumpFromPosition: {type: GraphQLString, description: 'The preferred jump postition of the player.'},
  jumpFromFeet: {type: GraphQLString, description: 'The preferred feet for jumping of the player.'},
  verticalReach: {type: GraphQLString, description: 'The vertical reach of the player.'},
  bodyType: {type: GraphQLString, description: 'The body type of the player.'},
  email: {type: GraphQLEmailType, description: 'The email address of the lead.'},
  source: {type: GraphQLString, description: 'The source of lead'},
  keyword: {type: GraphQLString, description: 'Keyword from search'},
  listId: {type: GraphQLID, description: 'The Maropost list id.'},
  abandonListId: {type: GraphQLID, description: 'The Maropost abandon list id.'},
};

export const UpdatedLead = new GraphQLInputObjectType({
  name: 'UpdatedLead',
  description: 'Args to update a lead',
  fields: () => makeRequired(inputFields, ['id'])
});

export const NewLead = new GraphQLInputObjectType({
  name: 'NewLead',
  description: 'Args to add a lead',
  fields: () => makeRequired(inputFields, ['email', 'age', 'jumpFromPosition', 'jumpFromFeet', 'verticalReach', 'bodyType', 'listId'])
});

export const UpdatedAbandonLead = new GraphQLInputObjectType({
  name: 'UpdatedAbandonLead',
  description: 'Args to update a abandonLead',
  fields: () => makeRequired(inputFields, ['id'])
});

export const NewAbandonLead = new GraphQLInputObjectType({
  name: 'NewAbandonLead',
  description: 'Args to add a abandonLead',
  fields: () => makeRequired(inputFields, ['abandonListId', 'email'])
});
