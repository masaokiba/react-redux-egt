import express from 'express';
import webpack from 'webpack';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'express-jwt';

import config from '../../webpack/webpack.config.dev';
import createSSR from './createSSR';

import {jwtSecret} from './secrets';
import {googleAuthUrl, googleAuthCallback} from './graphql/models/User/oauthGoogle';
import {wsGraphQLHandler, wsGraphQLSubHandler} from './graphql/wsGraphQLHandlers';
import httpGraphQLHandler from './graphql/httpGraphQLHandler';
import start from './start';
import URL from 'url';

import {basename} from '../universal/utils/basename';
import winston from 'winston';
import './logging';

const PROD = process.env.NODE_ENV === 'production';

export function run(worker) {
  winston.log('info', 'Worker Started', {id: process.pid, basename: basename});
  const app = express();
  const scServer = worker.scServer;
  const httpServer = worker.httpServer;
  httpServer.on('request', app);

  // HMR
  if (!PROD) {
    const compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
  }

  app.use(function(req, res, next) {
    const url = URL.parse(req.url);
    if(url.pathname.substr(-1) === '/' && url.pathname.length > 1) {
      const pathname = url.pathname.slice(0, -1);
      const redirectURL = `${pathname}${url.search || ''}`;
      winston.log('info', 'Redirect', {redirectURL});
      res.redirect(301, redirectURL);
    } else {
      next();
    }
  });

  // setup middleware
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cors({origin: true, credentials: true}));
  app.use((req, res, next) => {
    if (/\/favicon\.?(jpe?g|png|ico|gif)?$/i.test(req.url)) {
      res.status(404).end();
    } else {
      next();
    }
  });
  if (PROD) {
    app.use(compression());
    app.use('/static', express.static('build'));
    if (basename) {
      app.use(`/${basename}/static`, express.static('build'));
    }
  }

  // Oauth
  app.get('/auth/google', (req, res) => res.redirect(googleAuthUrl));
  app.get('/auth/google/callback', googleAuthCallback);

  // HTTP GraphQL endpoint
  app.post('/graphql', jwt({secret: jwtSecret, credentialsRequired: false}), httpGraphQLHandler);
  if (basename) {
    app.post(`/${basename}/graphql`, jwt({secret: jwtSecret, credentialsRequired: false}), httpGraphQLHandler);
  }

  // server-side rendering
  app.get('*', start);

  // handle sockets
  scServer.on('connection', socket => {
    winston.log('info', 'Client connected to websocket', {socketId: socket.id});
    // hold the client-submitted docs in a queue while they get validated & handled in the DB
    // then, when the DB emits a change, we know if the client caused it or not
    socket.docQueue = new Set();
    socket.on('graphql', wsGraphQLHandler);
    socket.on('subscribe', wsGraphQLSubHandler);
    socket.on('disconnect', () => winston.log('info', 'Client disconnected from websocket', {socketId: socket.id}));
  });
}
// TODO: dont let tokens expire while still connected, depends on PR to SC
