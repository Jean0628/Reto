        // // Variables
        // const card = document.querySelectorAll('.tarjeta');
        // const startButtons = document.querySelectorAll('.start');
        // const Cronometro = document.getElementById('Cronometro');
        // const aciertosSpan = document.getElementById('C_aciertos');
        // const movimientosSpan = document.getElementById('C_movimientos');

        // let aciertos = 0;
        // let movimientos = 0;

        // // Eventos
        // document.addEventListener('DOMContentLoaded', () => {
        //     iniciar();
        // });

        // startButtons.forEach(startButton => {
        //     startButton.addEventListener('click', () => {
        //         cronometro();
        //     });
        // });

        // // Funciones
        // function iniciar() {
        //     for (let i = 0; i < card.length; i++) {
        //         card[i].disabled = true;
        //     }
        // }

        // function desbloquearCards() {
        //     for (let i = 0; i < card.length; i++) {
        //         card[i].disabled = false;
        //     }
        // }

        // function cronometro() {
        //     desbloquearCards();
        //     let time = 60; // Cambié el tiempo a 60 segundos
        //     startButtons.forEach(startButton => {
        //         startButton.disabled = true; // Deshabilita los botones de inicio una vez que se inicia el juego
        //     });
        //     const contador = setInterval(() => {
        //         time--;
        //         Cronometro.innerHTML = time;
        //         if (time === 0) {
        //             clearInterval(contador);
        //             Swal.fire({
        //                 icon: 'error',
        //                 title: 'Oops...',
        //                 text: '¡Se te acabó el tiempo!',
        //             }).then((result) => {
        //                 if (result.isConfirmed) {
        //                     location.reload();
        //                 }
        //             });
        //         }
        //     }, 1000);
        // }

        // function aumentarAciertos() {
        //     aciertos++;
        //     aciertosSpan.textContent = aciertos;
        // }

        // function aumentarMovimientos() {
        //     movimientos++;
        //     movimientosSpan.textContent = movimientos;
        // }
// JS 
// parte lógica
let aciertos = 0;
let movimientos = 0;
let tiempoInicio;
let tiempoInterval;

    let iconos = []
    let selecciones = []

    generarTablero()

    function cargarIconos() {
        iconos = [
            '<img src="https://i.ibb.co/pK31kwZ/00.png" width="100%">',
            '<img src="https://i.ibb.co/4SG5shk/580b57fbd9996e24bc43c02c.png" width="100%">',
            '<img src="https://i.ibb.co/GVLFSxH/00.png" width="100%">',
            '<img src="https://i.ibb.co/SmVF5vB/00.png" width="100%">',
            '<img src="https://i.ibb.co/y6z683V/00.png" width="100%">',
            '<img src="https://i.ibb.co/85r8z0f/9978a389246e31ed58bf4ebfc0cbe7ec.png" width="100%">',
            '<img src="https://i.ibb.co/mC2pqc5/00.jpg" width="70%">',
            '<img src="https://i.ibb.co/JQBmBXN/00.png" width="70%">',
            '<img src="https://i.ibb.co/z5ZgQwN/00.png" width="100%">',
            '<img src="https://i.ibb.co/dJZgXW2/image-snorlaxpng-pokemon-shuffle-wiki-fandom-powered-by-wikia-snorlax-png-256-256.png" width="100%">',
            '<img src="https://i.ibb.co/LJTbjXd/00.gif" width="100%">',
            '<img src="https://i.ibb.co/JHLQTz8/00.gif" width="100%">',
        ]
    }

    function generarTablero() {
        cargarIconos()
        let len = iconos.length
        selecciones = []
        let tablero = document.getElementById("tablero")
        let tarjetas = []
        
        for (let i = 0; i < len*2; i++) {
            tarjetas.push(`
            <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara trasera" id="trasera${i}">
                        ${iconos[0]}
                    </div>
                    <div class="cara superior">
                        <i class="far fa-question-circle"></i>
                    </div>
                </div>
            </div>        
            `)
            if (i % 2 == 1) {
                iconos.splice(0, 1)
            }
        }
        tarjetas.sort(() => Math.random() - 0.5)
        tablero.innerHTML = tarjetas.join(" ")
    }

    function seleccionarTarjeta(i) {
        let tarjeta = document.getElementById("tarjeta" + i)
        if (tarjeta.style.transform != "rotateY(180deg)") {
            tarjeta.style.transform = "rotateY(180deg)"
            selecciones.push(i)
        }
        if (selecciones.length == 2) {
            deseleccionar(selecciones)
            selecciones = []
        }
    }

    function deseleccionar(selecciones) {
        setTimeout(() => {
            let trasera1 = document.getElementById("trasera" + selecciones[0])
            let trasera2 = document.getElementById("trasera" + selecciones[1])
            if (trasera1.innerHTML != trasera2.innerHTML) {
                let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                tarjeta1.style.transform = "rotateY(0deg)"
                tarjeta2.style.transform = "rotateY(0deg)"
            }else{
                trasera1.style.background = "plum"
                trasera2.style.background = "plum"
            }
        }, 1000);
    }
