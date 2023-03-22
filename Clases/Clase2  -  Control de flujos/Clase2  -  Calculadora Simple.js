/* 
1. Pedirle al usuario que ingrese un numero
2. Si el numero es mayor a 0:
    2.1 Mostrar el mensaje que diga "numero positivo"
3. Si el numero es menor a 0:
    3.1 Mostrar el mensaje que diga "numero negativo"
4. Si el numero es 0:
    4.1 Mostrar el mensaje que diga "numero neutro"
5. Si ingresa letras:
    5.1 Mostrar el mensaje que diga "numero invalido"
*/

// const numero = parseInt(prompt("Por favor, ingresa un numero"));

// if (numero > 0) {
//   console.log("Numero positivo");
// }
// if (numero < 0) {
//   console.log("Numero Negativo");
// }
// if (numero === 0) {
//   console.log("Numero Neutro");
// }
// if (isNaN(numero)) {
//   console.log("Numero invalido");
// }

/*
Calculadora simple

1.Pedirle al usuario que ingrese un numero
2. Pedirle que ingrese una operacion
3. perdirle que ingrese otro numero
4. mostrar el resultado
*/

const numero1 = parseInt(prompt("Ingrese un numero"));
const operacion = prompt("ingrese una operacion: SUMA, RESTA, MUL, DIV");
const numero2 = parseInt(prompt("ingrese otro numero"));

if (!isNaN(numero1) && !isNaN(numero2)) {
  if (
    operacion === "SUMA" ||
    operacion === "RESTA" ||
    operacion === "MUL" ||
    operacion === "DIV"
  ) {
    if (operacion === "SUMA") {
      console.log(numero1 + numero2);
    } else if (operacion === "RESTA") {
      console.log(numero1 - numero2);
    } else if (operacion === "MUL") {
      console.log(numero1 * numero2);
    } else if (operacion === "DIV") {
      console.log(numero1 / numero2);
    }
  } else {
    console.log("OPERACION INVALIDA");
  }
} else {
  console.log("NUMEROS iNVALIDOS");
}
