/*
1. Mientras que el usuario no ingrese un numero valido:

2. Validar  que el dato ingresado sea un numero
3. Mientras que el contador sea menor o igual al numero ingresado :
    3.1. Imprimir el numero
*/

let numero = 0;

do {
  numero = parseInt(prompt("ingresa un numero"));
  if (!isNaN(numero)) {
    if (numero >= 0) {
      for (let contador = 0; contador <= numero; contador++) {
        if (contador % 2 == 0) {
          continue;
        }
        console.log(contador);
      }
    } else {
      for (let contador = numero; contador <= 0; contador++) {
        console.log(contador);
      }
    }
  } else {
    console.log("Numero invalido");
  }
} while (isNaN(numero));
