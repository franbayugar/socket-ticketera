const mysql = require('mysql');


const leerDB = async(connection, query) =>{
    return new Promise((resolve,reject)=>{
    connection.query(query, function(error, result){
        if(error) return reject(error)
        return resolve(result);
    });
    });
}


const insertarDB = async(connection, {numero, escritorio, estado}, query) =>{
    return new Promise((resolve,reject)=>{
        let finalQuery = mysql.format(query, [escritorio,numero, estado])
        connection.query(finalQuery, function(error, result){
            if(error) return reject(error)
            return resolve(result);
        });
    });
}



module.exports = {leerDB, insertarDB};