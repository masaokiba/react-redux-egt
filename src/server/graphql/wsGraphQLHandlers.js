import {graphql} from 'graphql';
import {prepareClientError} from './models/utils';
import Schema from './rootSchema';
import winston from 'winston';

export const wsGraphQLHandler = async function (body, cb) {
  const {query, variables, ...rootVals} = body;

  winston.log('info', 'GraphQL Websocket Request', {query, variables, rootVals});

  const authToken = this.getAuthToken();
  const docId = variables.doc && variables.doc.id || variables.id;
  if (!docId) {
    winston.log('warn', 'No documentId found for the doc submitted via websockets!');
    return cb({_error: 'No documentId found'});
  }
  this.docQueue.add(docId);
  const result = await graphql(Schema, query, {socket: this, authToken, ...rootVals}, variables);
  winston.log('info', 'GraphQL Websocket Result', {result});
  const {error, data} = prepareClientError(result);
  if (error) {
    winston.log('info', 'GraphQL Websocket Error', {error});
    this.docQueue.delete(docId);
  }
  cb(error, data);
};

export const wsGraphQLSubHandler = function (subscription) {
  const {query, variables, ...rootVals} = JSON.parse(subscription);
  const authToken = this.getAuthToken();
  graphql(Schema, query, {socket: this, authToken, ...rootVals}, variables);
};
