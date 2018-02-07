const dotenv = require('dotenv').config({ path: '.env' });
const restify = require('restify');
const msgserver = require('./messages/server');

const server = restify.createServer();

server.pre((req, res, next) => {
  req.headers.accept = 'application/json';
  return next();
});

server.get('/api/status', (req, res) => {
  res.send('Servidor corriendo');
});

server.listen(process.env.PORT, () => {
  console.log(msgserver.SERVER.SERVER_LOCALHOST +`${process.env.PORT}`);
});

module.exports = server;
