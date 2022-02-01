const mysql = require('mysql');

class DB {
    connection;
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'muni_turnos'
        });
    }

    connect() {
        this.connection.connect((err) => {
            if (err) throw err;
        });
    }

    end(){
        this.connection.end();
    }

    read(query, callback){
        this.connection.query(query, function(error, result){
            if(error) throw error;
            callback(result);
        });
    }

    insert(query, data, callback){
        let queryReady = mysql.format(query, [data.box, data.siguiente, data.estado]);
        this.connection.query(queryReady, function(error, result){
            if(error) throw error;
            callback(result);
        });
    }
}

module.exports = DB;