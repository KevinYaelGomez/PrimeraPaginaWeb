function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click", selecionarMascotaJugador)
       
}

//Selecion del usuario
function selecionarMascotaJugador() {
    let inputllamarizard = document.getElementById("llamarizard")
    let inputfloresaur = document.getElementById("floresaur")
    let inputtortoise = document.getElementById("tortoise")
    let spanmokeponJugador = document.getElementById('mokeponJugador')


    if (inputllamarizard.checked){
        alert("Selecionasta a Llamarizard")
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
    let ataqueAleatorio = aleatorio(1,3)
    let spanmokeponRival = document.getElementById('mokeponRival')
    
    if (ataqueAleatorio == 1){
        spanmokeponRival.innerHTML = 'Llamarizard'
    } else if (ataqueAleatorio == 2){
        spanmokeponRival.innerHTML = 'Floresaur'
    } else if (ataqueAleatorio == 3){
        spanmokeponRival.innerHTML = 'Tortoise'
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener("load", iniciarJuego)