import {GraphQLObjectType} from 'graphql';
import user from './models/User/userMutation';
import lead from './models/Leads/leadMutation';

const rootFields = Object.assign(user, lead);

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => rootFields
});
