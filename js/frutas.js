alert("Ofrecemos las siguientes frutas;  Mango: $2000, Piña: $3000, Sandia: $5000, Manzana: $1500, Aguacate: $4000, Platano: $1700.")

var fruta= parseInt(prompt("Elige: 1 para mango, 2 para piña, 3 para sandia, 4 para manzana, 5 para aguacate, 6 para platano"))
var cantidad = parseInt(prompt("Elige la cantidad de unidades que deseas comprar"))

var mango = 2000
var piña  = 3000
var sandia = 5000
var manzana = 1500
var aguacate = 4000
var platano = 1700
var valorTotal = 0

if (fruta == 1){
    alert("Elegiste Mango")
    alert("Cuesta $"+ mango + " por unidad")
    valorTotal = (mango*cantidad)
    alert("Total a pagar: $" + valorTotal)
} 
else if(fruta == 2){
    alert("Elegiste Piña")
    alert("Cuesta $"+ piña + " por unidad")
    valorTotal = (piña*cantidad)
    alert("Total a pagar: $" + valorTotal)
} 
else if(fruta == 3){
    alert("Elegiste Sandia")
    alert("Cuesta $"+ sandia + " por unidad")
    valorTotal = (sandia*cantidad)
    alert("Total a pagar: $" + valorTotal)
} 
else if(fruta == 4){
    alert("Elegiste Manzana")
    alert("Cuesta $"+ manzana + " por unidad")
    valorTotal = (manzana*cantidad)
    alert("Total a pagar: $" + valorTotal)
} 
else if(fruta == 5){
    alert("Elegiste Aguacate")
    alert("Cuesta $"+ aguacate + " por unidad")
    valorTotal = (aguacate*cantidad)
    alert("Total a pagar: $" + valorTotal)
} 
else if(fruta == 6){
    alert("Elegiste Platano")
    alert("Cuesta $"+ platano + " por unidad")
    valorTotal = (platano*cantidad)
    alert("Total a pagar: $" + valorTotal)
}