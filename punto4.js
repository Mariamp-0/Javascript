let marca = prompt("Ingrese la marca de la moto");
let precio = prompt("Ingrese el precio de la moto")
let descuento = 0

if (marca == "Honda" || marca == "honda" || marca == "HONDA") {
    descuento = 0.05; // 5%
} else if (marca == "Yamaha") {
    descuento = 0.08;
} else if (marca == "Susuki"){
    descuento = 0.1;
} else {
    descuento = 0.02;
}

let descuentoAplicado = precio * descuento
let precioFinal = precio - descuentoAplicado

console.log("Marca: " + marca)
console.log("Precio: $" + precio)
console.log("Descuento aplicado: " + descuento * 100 + "%")
console.log("Precio final: $ " + precioFinal)