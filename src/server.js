const express = require('express');
const socketIo = require('socket.io');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');


const app = express();
const server = http.createServer(http);
const io = socketIo(server);


app.set('port', process.env.PORT || 3020);



io.on('connection', (socket) => {
 console.log('hemos entrado aqui')	
});

module.exports = {
  app,
  server,
}
