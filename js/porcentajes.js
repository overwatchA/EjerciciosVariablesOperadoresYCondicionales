var escritorio= parseInt(prompt("Ingresar la cantidad de escritorios que desea comprar"));
var PrecioEscritorio= 100000
precioTotal = (escritorio * PrecioEscritorio)

if(escritorio >= 10){
    console.log("Total a pagar $" + precioTotal)
    precioTotal = (precioTotal*0.6)
    console.log("Total a pagar con descuento $" + precioTotal)
} else if(escritorio >= 5){
    console.log("Total a pagar $" + precioTotal)
    precioTotal = (precioTotal*0.8)
    console.log("Total a pagar con descuento $" + precioTotal)
} else{
    console.log("Total a pagar $" + precioTotal)
    precioTotal = (precioTotal*0.9)
    console.log("Total a pagar con descuento $" + precioTotal)
}
