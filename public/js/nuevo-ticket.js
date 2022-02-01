//refs
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('#generateTicket');

const socket = io();



socket.on('connect', () => {

    // socket.on('ultimo-ticket', (ultimo) => {
    //     lblNuevoTicket.innerText = 'Ticket ' + ultimo;

    // })

    // btnCrear.disabled = false;

});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');

    btnCrear.disabled = true;
});






// btnCrear.addEventListener( 'click', () => {

//     socket.emit( 'siguiente-ticket', null, ( ticket ) => {
//         lblNuevoTicket.innerText = ticket;
//     });

// });