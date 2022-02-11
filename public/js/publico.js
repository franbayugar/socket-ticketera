//refs

let lblTicket1 = document.querySelector('#lblTicket1');
let lblEscritorio1 = document.querySelector('#lblEscritorio1');
let lblTicket2 = document.querySelector('#lblTicket2');
let lblEscritorio2 = document.querySelector('#lblEscritorio2');
let lblTicket3 = document.querySelector('#lblTicket3');
let lblEscritorio3 = document.querySelector('#lblEscritorio3');
let lblTicket4 = document.querySelector('#lblTicket4');
let lblEscritorio4 = document.querySelector('#lblEscritorio4');
let numberTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
let numberBox = [lblEscritorio1,lblEscritorio2,lblEscritorio3,lblEscritorio4];
const socket = io();

socket.on('estado-actual', (payload, last4)=>{
    
    last4.forEach((element, i) => {
        numberTickets[i].innerText = 'Número ' + element.numero;
        numberBox[i].innerText = 'Box ' + element.box;
      

    });

    const audio = new Audio('./audio/doorbell-audio.ogg');
    audio.play();
    lblTicket1.style.fontSize = '80px';
    setTimeout(back, 1000)
});

function back() {
    lblTicket1.style.fontSize = '50px';
   }


// socket.on('estado-actual', (payload)=>{
//     const audio = new Audio('./audio/new-ticket.mp3');

//     audio.play();
//     const [ticket1, ticket2, ticket3, ticket4] = payload;
    
//     if(ticket1){
//         lblTicket1.innerText = 'Ticket ' + ticket1.numero;
//         lblEscritorio1.innerText = 'Box ' + ticket1.escritorio;
//     }
//     if(ticket2){
//         lblTicket2.innerText = 'Ticket ' + ticket2.numero;
//         lblEscritorio2.innerText = 'Box ' + ticket2.escritorio;
//     }
//     if(ticket3){
//         lblTicket3.innerText = 'Ticket ' + ticket3.numero;
//         lblEscritorio3.innerText = 'Box ' + ticket3.escritorio;
//     }
//     if(ticket4){
//         lblTicket4.innerText = 'Ticket ' + ticket4.numero;
//         lblEscritorio4.innerText = 'Box ' + ticket4.escritorio;
//     }

// });