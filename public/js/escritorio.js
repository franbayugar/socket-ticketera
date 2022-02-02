//refs

let lblEscritorio = document.querySelector('h1');
let btnAtender = document.querySelector('button');
let lblPendientes = document.querySelector('#lblPendientes')
const lblTicket = document.querySelector('small');
const divAlert = document.querySelector('.alert');

const searchParams = new URLSearchParams(window.location.search);

 if(!searchParams.has('escritorio')){
     window.location = 'index.html';
    throw new Error ('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
lblEscritorio = escritorio;

const socket = io();

// divAlert.style.display = 'none';

socket.on('connect', () => {

    // socket.emit('tickets-pendientes', escritorio,( pendientes ) => {
    //     lblPendientes.innerText = pendientes;
    // });
  
    // btnAtender.disabled = false;
});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');

    // btnAtender.disabled = true;
});

// socket.on('tickets-pendientes', (pendientes)=>{
//         if(pendientes === 0){
//             lblPendientes.style.display = 'none';
//             return divAlert.style.display = '';
//         }else{
//             lblPendientes.style.display = '';
//             divAlert.style.display = 'none';
//             lblPendientes.innerText = pendientes;
//         }
// })

socket.on('estado-actual', (payload)=>{
    const ticket = payload;
    console.log(ticket);
});

btnAtender.addEventListener( 'click', () => {
    socket.emit('atender-ticket', {escritorio}, (payload) =>{
        console.log('Atendiendo a ' + payload.ticket.numero);
    }) 

    


    // socket.emit('atender-ticket', {escritorio}, ( payload ) => {
    //     if(!payload.ok){
    //         lblTicket.innerText = 'nadie ';
    //         return divAlert.style.display = '';
    //     }
    //     lblTicket.innerText = 'Ticket ' + payload.ticket.numero;
    // });
});
