var matematicas= parseInt(prompt("Ingrese nota de Matemáticas"));
var español = parseInt(prompt("Ingrese nota de Español"));
var sociales = parseInt(prompt("Ingrese nota de Sociales"));

var promedio = 0
promedio = ((matematicas+español+sociales)/3)

if (promedio == 10 ){
    console.log("Excelente");
}else if (promedio >= 7){
    console.log("Bueno");
}else {
    console.log("Insuficiente");
}