const numero = parseInt(prompt("Ingrese un numero"));
if (!isNaN(numero)) {
  if (numero > 0) {
    for (let contador = 0; contador <= numero; contador++) {
      console.log(contador);
    }
  } else {
    for (let contador = numero; contador <= 0; contador++) {
      console.log(contador);
    }
  }
} else {
  console.log("Esto no es un numero");
}
