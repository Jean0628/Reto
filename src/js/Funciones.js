//Variables

const card = document.querySelectorAll('.card');
const start = document.querySelectorAll('.start');
const Cronometro = document.getElementById('Cronometro');

//Eventos 
document.addEventListener('DOMContesntLoades', ()=>{
    inicar();
})

start.forEach(start => {
    start.addEventListener('click', () => {
        cronometro();
    });
});
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
    start.forEach(start => {
        start.classList.add('disable');
    });
    const contador = setInterval(()=> {
        time--
        Cronometro.innerHTML = time;
        if (time == 0){
            clearInterval(contador);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Se te acabo el tiempo!',
              })
        }
    },1000)

}

function mostrarImagen(button) {
    // Obtener el atributo "data-image" del botón
    const imageUrl = button.getAttribute('data-image');

    // Mostrar la imagen en un cuadro de diálogo o donde desees
    Swal.fire({
        imageUrl: imageUrl,
        imageAlt: 'src/assets/IMG/computador.jpg',
        showConfirmButton: false
    });
}