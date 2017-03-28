import Hapi from 'hapi';
import Debug from 'debug';

const debugServer = Debug('scaleChange:server');
// import Models from '../models/index';
// const Models = require('./models/index.js');

const server = new Hapi.Server();
server.connection({
  port: 3000,
  host: 'localhost',
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Hello, world!');
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }
  debugServer('server started on localhost 3000');
});
