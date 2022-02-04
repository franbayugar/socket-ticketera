const TicketControl = require('../models/ticket-control');

const ticketControl = new TicketControl();

const socketController = (socket) => {


    socket.emit('estado-actual', ticketControl.ultimo, ticketControl.ultimos4);

    socket.on('atender-ticket', ({escritorio}, callback) =>{
        if(!escritorio){
            return callback({
                ok:false,
                msg: 'Escritorio no definido'
            });
        }
        enviarRes();
        async function enviarRes(){
        let resp = await ticketControl.siguiente(escritorio, ticketControl.ultimo);
        if(resp === 'ok'){
        console.log(ticketControl.ultimo);
        console.log(ticketControl.ultimos4);
        socket.emit('estado-actual', ticketControl.ultimo, ticketControl.ultimos4);
        socket.broadcast.emit('estado-actual', ticketControl.ultimo, ticketControl.ultimos4);
        }
        callback(ticketControl.ultimos4[0]);
    }
        // socket.emit('tickets-pendientes', ticketControl.tickets.length)
        // socket.broadcast.emit('tickets-pendientes', ticketControl.tickets.length)


        // socket.on('tickets-pendientes', (escritorio, callback) =>{
        //     callback(ticketControl.tickets.length);
        // } );
    

        // if(!ticket){
        //     callback({
        //         ok:false,
        //         msg: 'No hay tickets pendientes'
        //     });
        // }else{
        //     callback({
        //         ok:true,
        //         ticket
        //     });
        // }


    })
  
    // socket.emit('ultimo-ticket', ticketControl.ultimo);
    // socket.broadcast.emit('estado-actual', ticketControl.ultimos4);

    // socket.emit('tickets-pendientes', ticketControl.tickets.length);

    // socket.on('siguiente-ticket', ( payload, callback ) => {
    //     const siguiente = ticketControl.siguiente();
    //     socket.broadcast.emit('tickets-pendientes', ticketControl.tickets.length)
    //     callback(siguiente);

    // });

    // socket.on('atender-ticket', ({escritorio}, callback) =>{
    //     if(!escritorio){
    //         return callback({
    //             ok:false,
    //             msg: 'Escritorio no definido'
    //         });
    //     }
    //     const ticket = ticketControl.atenderTicket(escritorio);

    //     socket.broadcast.emit('estado-actual', ticketControl.ultimos4);
    //     socket.emit('tickets-pendientes', ticketControl.tickets.length)
    //     socket.broadcast.emit('tickets-pendientes', ticketControl.tickets.length)


    //     socket.on('tickets-pendientes', (escritorio, callback) =>{
    //         callback(ticketControl.tickets.length);
    //     } );
    

    //     if(!ticket){
    //         callback({
    //             ok:false,
    //             msg: 'No hay tickets pendientes'
    //         });
    //     }else{
    //         callback({
    //             ok:true,
    //             ticket
    //         });
    //     }


    // })

}



module.exports = {
    socketController
}

