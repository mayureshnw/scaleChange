import Hapi from 'hapi';
import Debug from 'debug';

const debugServer = Debug('scaleChange:server');
// import Models from '../models/index';
// const Models = require('./models/index.js');
console.log(process.env.PORT);
const server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 3000,
  host: 'localhost',
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    debugServer(`request on port ${process.env.PORT || 3000}`);
    reply('Hello, world!');
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }
  debugServer(`server started on localhost ${process.env.PORT || 3000}`);
});
