// //Variables

// const card = document.querySelectorAll('.card');
// const start = document.querySelectorAll('.start');
// const Cronometro = document.getElementById('Cronometro');

// //Eventos 
// document.addEventListener('DOMContesntLoades', ()=>{
//     inicar();
// })

// start.forEach(start => {
//     start.addEventListener('click', () => {
//         cronometro();
//     });
// });
// //fin de los eventos


// //Funcion 
// function iniciar(){
//     for (let i = 0; i < card.length; i++){
//         card[i].disabled = true;
//     }
// }

// function desbloquearCards(){
//     for (let i = 0; i < card.length; i++){
//         card[i].disabled = false;
//     }
// }

// function cronometro(){
//     desbloquearCards();
//     let time = 60;
//     start.forEach(start => {
//         start.classList.add('disable');
//     });
//     const contador = setInterval(()=> {
//         time--
//         Cronometro.innerHTML = time;
//         if (time == 0){
//             clearInterval(contador);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: '¡Se te acabó el tiempo!',
//             })
//             .then((result) =>{
//                 if(result.isConfirmed){ // Corregido "isConfirmed"
//                     location.reload();
//                 }
//             })
//         }
//     }, 1000);
// }

//variables de cartas
// let tarjetaDestapadas = 0;
// let tarjetas1 = null;
// let tarjetas2 = null;
// let primerResultado = null;
// let segundoResultado = null;


let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random() -0.5});
console.log(numeros);


function destapar(id){
    // tarjetaDestapadas++;
    // console.log(tarjetaDestapadas);

    // if(tarjetaDestapadas == 1){
    //     tarjetas1 = document.getElementById(id);
    //     primerResultado = numeros[id]
    //     tarjetas1.innerHTML = primerResultado;

    //     //deshabilita primer boton
    //     tarjetas1.disabled = true;
// }
}
