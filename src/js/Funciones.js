// JS 
// Declarar variables globales
let iconos = [];
let selecciones = [];
let aciertos = 0;
let movimientos = 0;
let tiempoInicio;
let tiempoInterval;


    function cargarIconos() {
        iconos = [
            '<img src="https://i.ibb.co/pK31kwZ/00.png" width="70%">',
            '<img src="https://i.ibb.co/4SG5shk/580b57fbd9996e24bc43c02c.png" width="100%">',
            '<img src="https://i.ibb.co/GVLFSxH/00.png" width="70%">',
            '<img src="https://i.ibb.co/SmVF5vB/00.png" width="70%">',
            '<img src="https://i.ibb.co/y6z683V/00.png" width="70%">',
            '<img src="https://i.ibb.co/85r8z0f/9978a389246e31ed58bf4ebfc0cbe7ec.png" width="100%">',
            '<img src="https://i.ibb.co/mC2pqc5/00.jpg" width="70%">',
            '<img src="https://i.ibb.co/JQBmBXN/00.png" width="70%">',
            '<img src="https://i.ibb.co/z5ZgQwN/00.png" width="70%">',
            '<img src="https://i.ibb.co/dJZgXW2/image-snorlaxpng-pokemon-shuffle-wiki-fandom-powered-by-wikia-snorlax-png-256-256.png" width="100%">',
            '<img src="https://i.ibb.co/LJTbjXd/00.gif" width="70%">',
            '<img src="https://i.ibb.co/JHLQTz8/00.gif" width="70%">',
        ]
    }

    function generarTablero() {
        cargarIconos();
        let len = iconos.length;
        selecciones = [];
        aciertos = 0; // Reiniciar aciertos
        movimientos = 0; // Reiniciar movimientos
        actualizarEstadisticas(); // Actualizar las estadísticas en el HTML
        iniciarCronometro(() => {
            // Función de devolución de llamada: se ejecutará cuando el cronómetro llegue a cero
            // Coloca aquí cualquier acción que deseas realizar al finalizar el cronómetro
            alert("¡Se acabó el tiempo!");
        });
        let tablero = document.getElementById("tablero");
        let tarjetas = [];
        
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
            aumentarmovimientos(); // Actualizar las estadísticas en el HTML
            actualizarEstadisticas();    
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
            } else {
                trasera1.style.background = "plum"
                trasera2.style.background = "plum"
                aumentarAciertos(); // Incrementar aciertos
                actualizarEstadisticas();    
                // Comprobar si se han encontrado todos los pares
                if (aciertos == iconos.length / 2) {
                    // Detener el cronómetro
                    clearInterval(tiempoInterval);
    
                    // Mostrar un mensaje de victoria usando SweetAlert2
                    Swal.fire({
                        title: "¡Felicidades!",
                        text: `Has completado el juego en ${movimientos} movimientos y ${document.getElementById("Cronometro").textContent} segundos.`,
                        icon: "success",
                        confirmButtonText: "Reiniciar",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            location.reload(); // Reiniciar el juego
                        }
                    });
                }
            }
        }, 1000);
    }

    function actualizarEstadisticas() {
        document.getElementById("C_aciertos").textContent = aciertos;
        document.getElementById("C_movimientos").textContent = movimientos;
    }
    
    function iniciarCronometro() {
        tiempoInicio = new Date().getTime();
        tiempoInterval = setInterval(actualizarTiempo, 1000);
    }
    
    function actualizarTiempo() {
        const tiempoActual = new Date().getTime();
        const tiempoTranscurrido = (tiempoActual - tiempoInicio) / 1000;
        document.getElementById("Cronometro").textContent = tiempoTranscurrido.toFixed(0);
    }
    
    function aumentarAciertos() {
        aciertos++;
    }
    function aumentarmovimientos() {
        movimientos++;
    }