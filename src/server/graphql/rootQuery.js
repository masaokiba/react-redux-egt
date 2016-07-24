import {GraphQLObjectType} from 'graphql';
import user from './models/User/userQuery';
import lead from './models/Leads/leadQuery';

const rootFields = Object.assign(user, lead);

export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => rootFields
});
