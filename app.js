require('dotenv').config();
const mysql = require('mysql');
let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'muni_turnos',
    user: 'root',
    password: ''
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('DB ON');
    }

});

conexion.end();


const Server = require('./models/server');


const server = new Server();



server.listen();


