const express = require('express');
const socketIo = require('socket.io');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');


const app = express();
const server = http.createServer(http);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});


app.set('port', process.env.PORT || 3020);



app.use(cors());
app.use(morgan('dev'));

io.on('connection', (socket) => {
 console.log('hemos entrado aqui');	
});

module.exports = {
  app,
  server,
}
