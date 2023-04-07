let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    //Oculta temporalmente secciones de la pagina
    let seccionSelecionarAtaque = document.getElementById("ataque")
    seccionSelecionarAtaque.style.display = 'none'
    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click", selecionarMascotaJugador)
       
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', ataqueAgua)
    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.addEventListener('click', ataquePlanta)

    let botonReiniciar = document.getElementById("reiniciar")
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

//Selecion del usuario
function selecionarMascotaJugador() {
    //muestra la seccion de combate
    let seccionSelecionarAtaque = document.getElementById("ataque")
    seccionSelecionarAtaque.style.display = 'block'
    //oculta los botones de mascotas
    let seccionSelecionarMascota = document.getElementById("mascotas")
    seccionSelecionarMascota.style.display = 'none'
    
    let inputllamarizard = document.getElementById("llamarizard")
    let inputfloresaur = document.getElementById("floresaur")
    let inputtortoise = document.getElementById("tortoise")
    let spanmokeponJugador = document.getElementById('mokeponJugador')

    if (inputllamarizard.checked){
        alert("Selecionaste a Llamarizard")
            spanmokeponJugador.innerHTML = 'Llamarizar'
    }   else if (inputfloresaur.checked){
            alert("Seleccionaste a Floresaur")
            spanmokeponJugador.innerHTML = 'Floresaur'
    }   else if(inputtortoise.checked){
            alert("Selecionaste a Tortoise")
            spanmokeponJugador.innerHTML = 'Torsoise'
    }   else {
            alert("Seleciona un Moképom")
    }

    selecionarMascotaEnemigo()
}

//Selecion de la maquina
function selecionarMascotaEnemigo(){
    let mokeponAleatorio = aleatorio(1,3)
    let spanmokeponRival = document.getElementById('mokeponRival')
    
    if (mokeponAleatorio == 1){
        spanmokeponRival.innerHTML = 'Llamarizard'
    } else if (mokeponAleatorio == 2){
        spanmokeponRival.innerHTML = 'Floresaur'
    } else if (mokeponAleatorio == 3){
        spanmokeponRival.innerHTML = 'Tortoise'
    }
}

//Se define el ataque del jugador
function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}

function ataquePlanta(){
    ataqueJugador = "Planta"
    ataqueAleatorioEnemigo()
}

//Selecion del ataque maquina
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego"
    }   else if(ataqueAleatorio == 2){
            ataqueEnemigo = "Agua"
    }   else {
            ataqueEnemigo = "Planta"
    }
    
    combate()
}

//logica de combate
function combate(){
    spanvidasJugador = document.getElementById('vidaJugador')
    spanvidasEnemigo = document.getElementById('vidaEnemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")

    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Planta"){
        crearMensaje("Ganaste 🎉")
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo

    } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensaje("Ganaste 🎉")     
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo

    } else if(ataqueJugador == "Planta" && ataqueEnemigo == "Agua"){
        crearMensaje("Ganaste 🎉")
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo

    } else {
        crearMensaje("Perdiste 🤣")
        vidasJugador--
        spanvidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Ganaste el combate")
    }   else if (vidasJugador == 0) {
        crearMensajeFinal("Perdiste el combate")
    }
}


//Historial de las acciones
function crearMensaje(resultado){
    let seccionMensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu Moképon ataco con ' + ataqueJugador + ', el Moképon del enemigo uso ' + ataqueEnemigo + ' - ' + resultado

    seccionMensaje.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let seccionMensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    seccionMensaje.appendChild(parrafo)

    //Deshabilita los botones de combate cuando el usuario/maquina llege a 0
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.disabled = true

    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener("load", iniciarJuego)