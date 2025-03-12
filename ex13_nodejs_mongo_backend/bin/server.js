'use strict';

const http = require('http');
const debug = require('debug')('nodejsservers:server');
const mongoose = require('mongoose');


const app = require('../src/app');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('API rodando na porta: ' + port);

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)) return val;
    if(port >= 0) return port;
    return false;
}

function onError(error){
    if(error.syscall !== 'listen') throw error;

    const bind = typeof port === 'string' ? 'Pipe ' + port :  'Port ' + port;

    switch(error.code){
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default: 
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

const url = "mongodb+srv://matheusbviana:woltheanyak@cluster0.7uflt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

connection.on('error', console.error.bind(console, 'MongoDB connection error: '))

module.exports = {
    getDb: function () {
        return connection;
      }
}