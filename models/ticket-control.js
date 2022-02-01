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
        let numero = await boxGet();
        this.ultimo = (numero%100)+1
    }

    guardarDB(){
        const dbPath = path.join(__dirname, '../db/data.json');
        fs.writeFileSync(dbPath, JSON.stringify(this.toJSON));
    }

    async siguiente(box){
        let insertar = await boxInsert(box);
        this.ultimo = (insertar.insertId%100)+1;
    }
    // siguiente(){
    //     this.ultimo += 1;
    //     const ticket = new Ticket(this.ultimo, null);
    //     this.tickets.push(ticket);
    //     this.guardarDB();
    //     return 'Ticket ' + ticket.numero;
    // }

    // atenderTicket(escritorio){
    //     //si no hay tickets
    //     if(this.tickets.length === 0){
    //         return null;
    //     }

    //     const ticket = this.tickets.shift();

    //     ticket.escritorio = escritorio;

    //     this.ultimos4.unshift(ticket);

    //     if(this.ultimos4.length>4){
    //         this.ultimos4.splice(-1,1);
    //     }

    //     this.guardarDB();

    //     return ticket;
    // }

}

module.exports = TicketControl;