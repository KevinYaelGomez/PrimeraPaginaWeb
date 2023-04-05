let ataqueJugador 
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click", selecionarMascotaJugador)
       
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById("boton-planta")
    botonTierra.addEventListener('click', ataqueTierra)

}

//Selecion del usuario
function selecionarMascotaJugador() {
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

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego"
    }   else if(ataqueAleatorio == 2){
            ataqueEnemigo = "Agua"
    }   else {
            ataqueEnemigo = "Planta"
    }
    
    crearMensaje()
}

function crearMensaje(){
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu Moképon ataco con ' + ataqueJugador + ', el Moképon del enemigo uso ' + ataqueEnemigo +  '- Ganaste 🎉'
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener("load", iniciarJuego)