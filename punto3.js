// c es calificación
//parseInt funciona para convertir texto en numero

let c1 = parseInt(prompt("Ingrese su primera nota"))
let c2 = parseInt(prompt("Ingrese su segunda nota"))
let c3 = parseInt(prompt("Ingrese su tercera nota"))
let c4 = parseInt(prompt("Ingrese su cuarta nota"))
let c5 = parseInt(prompt("Ingrese su quinta nota"))

/*
let c1 = 5;
let c2 = 2;
let c3 = 3;
let c4 = 1;
let c5 = 1;
*/


let promedio = (c1 + c2 + c3 + c4 + c5)/5;

console.log(promedio);

if (promedio >= 3) {
    console.log("El estudiante aprobó")
} else {
    console.log("El estudiante no aprobó")
}