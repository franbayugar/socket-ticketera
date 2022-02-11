const { boxGet, boxInsert } = require('../controller/box');


class Ticket {
    constructor(numero, escritorio){
        this.numero = numero;
        this.escritorio = escritorio;
    }

}

class TicketControl{

    constructor(){
        this.ultimo = 0;
        this.tickets = [];
        this.ultimos4 = [];

        this.init();
    }
  
    async init(){
        let numeros = await boxGet();
        let numero = numeros[0].id;
        this.ultimo = (numero%100)+1
        this.ultimos4 = numeros;
    }

    guardarDB(){
        const dbPath = path.join(__dirname, '../db/data.json');
        fs.writeFileSync(dbPath, JSON.stringify(this.toJSON));
    }

    async siguiente(box){
        let resp = await boxInsert(box);
        this.ultimo = resp;
        this.ultimos4 = await boxGet();
        return 'ok';
    }

}

module.exports = TicketControl;