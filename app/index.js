import Hapi from 'hapi';
import Debug from 'debug';
import {
	login,
} from './handlers/login';

import {
	heartbeat,
} from './handlers/heartbeat';

const debugServer = Debug('scaleChange:server');
// import Models from '../models/index';
// const Models = require('./models/index.js');
const server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 3000,
  host: 'localhost',
});

server.route({
  method: 'GET',
  path: '/',
  handler: heartbeat,
});

server.route({
  method: 'GET',
  path: '/login',
  handler: login,
});


server.start((err) => {
  if (err) {
    throw err;
  }
  debugServer(`server started on localhost ${process.env.PORT || 3000}`);
});
