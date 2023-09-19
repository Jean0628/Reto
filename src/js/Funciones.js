//Variables

const card = document.querySelectorAll('.card');
const start = document.querySelectorAll('.start');

//Eventos 
document.addEventListener('DOMContesntLoades', ()=>{
    inicar();
})

start.addEventListener('click', () =>{
    cronometro();
})
//fin de los eventos


//Funcion 
function iniciar(){
    for (let i = 0; i < card.length; i++){
        card[i].disabled = true;
    }
}

function desbloquearCards(){
    for (let i = 0; i < card.length; i++){
        card[i].disabled = false;
    }
}

function cronometro(){
    desbloquearCards();
    let time = 5;
    start.classList.add('disable');
    const contador = setInterval(()=> {
        time--
        Cronometro.innerHTML = time;
        if (time == 0){
            clearInterval(contador);
            console.log('se te acabo el tiempo')
        }
    },1000)

}
