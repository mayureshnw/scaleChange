import Hapi from 'hapi';
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
  console.log('server started on localhist 3000');
});
