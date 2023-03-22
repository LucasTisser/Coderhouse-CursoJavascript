// 1. Se ingresa un nombre
// 2. Se usa la funcion saludar() y se envia en nombre como parametro

// function saludar(nombre) {
//   console.log("Hola " + nombre);
//   console.log("Este es un saludo");
//   alert("Bienvenido" + "\n" + nombre);
// }

// const nombreUsuario = prompt("Ingresa tu nombre");
// // const nombreUsuario2 = prompt("Ingresa otro nombre");

// // saludar (nombreUsuario+"\n"+nombreUsuario2);
// saludar(nombreUsuario);

// --------------

// 1.Se ingresan tres ingredientes
// 2.Se usa la funcion prepararEnsalada() y se envia por parametros los ingredientes

// function prepararEnsalada(ing1, ing2, ing3) {
//   let ensalada = `${ing1} ${ing2} ${ing3}`;
//   console.log("Su ensalada es: " + ensalada);
//   alert("Su ensalada es: " + ensalada)
// }
// const ingrediente1 = prompt("Ingrese un ingrediente");
// const ingrediente2 = prompt("Ingrese otro ingrediente");
// const ingrediente3 = prompt("Ingrese un ingrediente mas");

// prepararEnsalada(ingrediente1, ingrediente2, ingrediente3);

// -------------

// 1.Ingresar los numeros a sumar
// 2.Si el numero es un numero, y es mayor a dos
//  2.1. Se itera la cantidad de veces, solicitando la cantidad de numeros que se pidio y los almacena en un array
//  2.2. Se usa la funcion sumar() y se envia el array por parametro
//  2.3. sumar(), suma los numeros que son enviados por parametros y devuelve la suma final
// 3.Sino, Devuelve "Numero invalido"

function sumar(numerosParaSumar) {
  let SumaFinal = 0;

  for (let i = 0; i < numerosParaSumar.length; i++) {
    const numero = numerosParaSumar[i];
    const suma = numero + SumaFinal;
    SumaFinal = suma;
  }
  return SumaFinal;
}

const NumsParaIngresar = parseInt(
  prompt(
    "Ingrese la cantidad de numeros a sumar \nDebe ingresar al menos dos numeros"
  )
);

if (!isNaN(NumsParaIngresar) && NumsParaIngresar >= 2) {
  const numerosParaSumar = [];

  for (let i = 0; i < NumsParaIngresar; i++) {
    const numero = parseInt(prompt(`Ingrese el numero N°: ${i + 1}`));
    numerosParaSumar.push(numero);
  }
  const suma = sumar(numerosParaSumar);
  alert(`La suma de los numero ingresados es igual a ${suma}.`);
} else {
  alert("Numero invalido");
}
