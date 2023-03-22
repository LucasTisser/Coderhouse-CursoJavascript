// let producto = {
//   sku: "20021304",
//   nombre: "Alfajor",
//   precio: "100",
//   descripcion: "Los mejores alfajores del mundo",
//   stock: 200,
//   color: "Blanco",
//   peso: "50g",
// };

// console.log(producto);

// console.log("El stock de alfajor es de:", producto.stock);
// console.log("El color del alfajor es de:", producto.color);

// console.log("Usted tomo un alfajor");

// // producto.stock=producto.stock-1; // esto es igual a la linea de abajo
// producto.stock -= 1; // esto es igual a la linea de arriba

// console.log("El stock de alfajor es de:", producto.stock);

// -------------------------

// La clase producto genera un Producto con sus atributos, como el alfajor y el cafe, luego se hacen ejemplos de comportamiento

class Producto {
  // Caracteristicas
  constructor(sku, nombre, precio) {
    this.identificador = sku;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = 200;
  }
  //Comportamiento
  incrementarStock = function (incremento) {
    this.stock += incremento;
  };
  decrementarStock = function (decremento) {
    this.stock -= decremento;
  };
}

const alfajor = new Producto("8002034", "Alfajor", "100");
const cafe = new Producto("8002035", "Cafe", "150");

// Ejemplo de incremento de alfajor
console.log("Alfajor antes de su incremento: ", alfajor.stock);
alfajor.incrementarStock(100);
console.log("Alfajor despues de su incremento: ", alfajor.stock);

// Ejemplo de decremento de cafe
console.log("Cafe antes de su decremento: ", cafe.stock);
cafe.decrementarStock(2);
console.log("Cafe despues de su descremento: ", cafe.stock);

/*
Calculadora Hecha con class

1.ingrese un numero
2.ingrese otro numero
3. elija una operacion
4. mostrar el resultado
*/

// class Calculadora {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }
//   Sumar(num1, num2) {
//     return num1 + num2;
//   }
//   Restar(num1, num2) {
//     return num1 - num2;
//   }
//   Multiplicar(num1, num2) {
//     return num1 * num2;
//   }
//   Dividir(num1, num2) {
//     return num1 / num2;
//   }
// }

// const calculadora = new Calculadora("Calc1");
// console.log(calculadora.Sumar(10, 6));
// console.log(calculadora.Restar(10, 6));
// console.log(calculadora.Multiplicar(1, 6));
// console.log(calculadora.Dividir(10, 2));
