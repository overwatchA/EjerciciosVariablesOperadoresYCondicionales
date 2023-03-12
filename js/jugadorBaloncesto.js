var edad = parseInt(prompt("Ingrese su edad"));
var estatura = parseInt(prompt("Ingrese su estatura"));
var velocidad = parseInt(prompt("Ingrese su velocidad en metro por minuto"));


if (edad >= 18){
    if(estatura >= 185 && velocidad >= 80){
        console.log("Ha sido admitido en el equipo profesional de baloncesto.")
    }
    else{
        console.log("no cumple con los requisitos de admisión.")
    }
}
else {
    if(estatura >= 165 && velocidad >= 50){
        console.log("Ha sido admitido en la división de menores de baloncesto.")
    }
    else {
        console.log("No cumple con los requisitos de admisión.")
    }
}

/*/no cumple con los requisitos de admisión.
ha sido admitido en la división de menores de baloncesto.
ha sido admitido en el equipo profesional de baloncesto./*/