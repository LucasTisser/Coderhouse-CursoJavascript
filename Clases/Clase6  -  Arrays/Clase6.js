let numeros1 = [
  "Hola",
  "Esto",
  2,
  3,
  4,
  5,
  true,
  { nombre: "Brian", apellido: "Garay" },
];

class Calculadora {
  constructor() {
    this.numeros = [0, 1, 2, 3, 4, 5, 6];
  }
}
const myCalc = new Calculadora();
console.log(myCalc.numeros);

console.log(numeros1);

console.log(myCalc.numeros[1]);

for (let i = 0; i < myCalc.numeros.length; i++) {
  console.log("Indice de mi Array", myCalc.numeros[i]);
}

const nombres = [];

const nombreUsuario = parseInt(prompt("Ingresa un nombre"));

for (let i = 0; i <= nombreUsuario.length; i++) {
  nombres.push(i); // agrega al final
  nombres.unshift(i); // agrega al principio
}

console.log("Todo el Array", nombres);

nombres.pop(); //quita el ultimo elemento, no recibe parametros.
nombres.shift(); //quita el primer elemento, no recibe parametros

console.log("Array sin el Ultimo", nombres);
