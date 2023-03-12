function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)}
var jugador = parseInt(prompt("Elige 1 para piedra, 2 para papel, 3 para tijera"))
var pc = aleatorio(1,3)

// alert ("Elegiste " + jugador)
if (jugador == 1){
    console.log("Elegiste Piedra")
}
else if (jugador == 2){
    console.log("Elegiste Papel")
}
else if (jugador == 3){
    console.log("Elegiste tijera")
}
else{
    console.log("Intentalo de nuevo")
}


// alert ("pc elige" + pc)
if (pc == 1){
    console.log("PC elige Piedra")
}
else if(pc == 2){
    console.log("PC elige Papel")
}
else if (pc == 3){
    console.log("PC elige tijera")
}

// COMBATE
if (pc == jugador){
    console.log("EMPATE")
}
else if(jugador == 1 && pc == 3){
    console.log("GANASTE")
}
else if(jugador == 2 && pc == 1){
    console.log("GANASTE")
}
else if(jugador == 3 && pc == 2){
    console.log("GANASTE")
}
else{
    console.log("PERDISTE")
}