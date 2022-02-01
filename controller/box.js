const { response, request } = require('express');
const Pool = require('mysql/lib/Pool');
const {leerDB, insertarDB} = require('../db/mysql');
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'muni_turnos'
});



const boxGet = async () => {
    const queryString = 'SELECT MAX(id) as siguiente FROM turnos';
    let resp = await leerDB(connection, queryString);
    
    let result = (resp[0].siguiente);
    return result;

}

const boxInsert = async (escritorio) => {

    const queryString = 'INSERT INTO turnos (box, numero, estado) VALUES (?,?,?)';
    let numero = await boxGet();
    numero = (numero%100)+1
    const data = {
        escritorio,
        numero,
        estado : 'c'
    }
    let resp = await insertarDB(connection, data, queryString);

    return resp;

}


module.exports = {boxGet, boxInsert};

