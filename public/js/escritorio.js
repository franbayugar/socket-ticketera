//refs

let lblEscritorio = document.querySelector('h1');
let btnAtender = document.querySelector('button');
let lblPendientes = document.querySelector('#lblPendientes')
const lblTicket = document.querySelector('small');


const searchParams = new URLSearchParams(window.location.search);

 if(!searchParams.has('escritorio')){
     window.location = 'index.html';
    throw new Error ('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
lblEscritorio = escritorio;

const socket = io();


socket.on('connect', () => {
    console.log('Conectado al servidor');
    btnAtender.disabled = false;
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');

    btnAtender.disabled = true;
});



socket.on('estado-actual', (payload, last4)=>{
    lblPendientes.innerText = `Ultimo ticket: ${last4[0].numero}\n En Box ${last4[0].box} `;

});

btnAtender.addEventListener( 'click', () => {
    socket.emit('atender-ticket', {escritorio}, (payload) =>{
        lblTicket.innerText = (payload.numero);
    }) 


});
