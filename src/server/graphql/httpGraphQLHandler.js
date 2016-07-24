import Schema from './rootSchema';
import {graphql} from 'graphql';
import winston from 'winston';

export default async (req, res) => {
  const {query, variables, ...rootVals} = req.body;
  const authToken = req.user || {};

  winston.log('info', 'GraphQL HTTP Request', {query, variables, rootVals});

  const result = await graphql(Schema, query, {authToken, ...rootVals}, variables);
  if (result.errors) {
    winston.log('info', 'GraphQL Error:', result.errors);
  }
  res.send(result);
};
