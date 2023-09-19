//Variables

const card = document.querySelectorAll('.card');
const start = document.querySelectorAll('.start');

//Eventos 
document.addEventListener('DOMContesntLoades', ()=>{
    inicar();
})

start.addEventListener('click', () =>{

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
    desbloquearCards()
    let time = 60;
    start.classList.add('disable');
    setInterval(()=> {
        
    },1000)

}
