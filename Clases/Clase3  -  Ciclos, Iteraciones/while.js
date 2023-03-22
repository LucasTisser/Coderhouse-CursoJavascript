/*
1. Pedir un numero
2. Validar  que el dato ingresado sea un numero
3. Definir el contador
4. Mientras que el contador sea menor o igual al numero ingresado :
    4.1. Imprimir el contador
*/

let numero = parseInt(prompt("Ingresa un numero"));

console.log("Con while");

if (!isNaN(numero)) {
  let contador = 0;
  while (contador <= numero) {
    console.log(contador);
    contador++;
  }
}

let cad = "";

while (cad !== "Esc") {
  cad = prompt("Escriba algo");
  console.log(cad);
}
