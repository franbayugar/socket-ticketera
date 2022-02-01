const { response, request } = require('express');
const DB = require('../db/mysql');



const boxGet = async (req = request, res = response) => {
    const database = new DB();
    database.connect();
    database.read('SELECT MAX(id) as siguiente FROM turnos', result =>{
        res.json(result);
    });
    database.end();
}

const boxInsert = async (req = request, res = response) => {
    const database = new DB();
    database.connect();
    const {box, siguiente} = req.body;
    const data = {
        box,
        siguiente : (siguiente%100)+1,
        estado: 'c'
    }

    database.insert('INSERT INTO turnos (box, numero, estado) VALUES (?,?,?)', data, result =>{
        res.json(result);
    });
    database.end();
}


module.exports = {boxGet, boxInsert};