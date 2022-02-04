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
    const queryString = 'SELECT * FROM `turnos` ORDER BY ID DESC LIMIT 4';
    let resp = await leerDB(connection, queryString);
    const result = Object.values(JSON.parse(JSON.stringify(resp)));
    return result;

}

const ultimo = async()=>{
    const queryString = 'SELECT MAX(id) as siguiente FROM turnos';
    let resp = await leerDB(connection, queryString);
    resp = Object.values(JSON.parse(JSON.stringify(resp)));
    return(resp[0].siguiente);
}

const boxInsert = async (escritorio) => {
    const queryString = 'INSERT INTO turnos (box, numero, estado) VALUES (?,?,?)';
    let respult = await ultimo();
    numero = (respult%100)+1
    const data = {
        escritorio,
        numero,
        estado : 'c'
    }
    await insertarDB(connection, data, queryString);
    return numero;
}


module.exports = {boxGet, boxInsert};

