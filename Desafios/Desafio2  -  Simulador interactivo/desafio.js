/*
Intrucciones para carrito 

1. Ingrese un producto : (5 produ.)
2. al ingresar un producto:

    2.1. Agregar producto al carrito 

3. Preguntar si hay que agregar otro producto o ir a la caja

    3.1. Si quiere agregar otro producto
        3.1.1. Ingrese otro producto

4. En caja, mostrar todos los productos que lleva en total
5. Mostrar monto de los productos

6.mostrar resultado del total de los produtos
*/
const precioBebida = 30;
const precioComida = 50;
const precioLimpieza = 40;
const precioHigiene = 20;
const precioJardin = 30;

let contadorProductos = 0;
let precioProductos = 0;

const contador = 1;

function agregarBebida() {
  console.log("Se agrego un Producto de Bebida con un valor de $30");
  contadorProductos = contadorProductos + contador;
  precioProductos = precioProductos + precioBebida;
}
function agregarComida() {
  console.log("Se agrego un Producto de Comida con un valor de $50");
  contadorProductos = contadorProductos + contador;
  precioProductos = precioProductos + precioComida;
}
function agregarLimpieza() {
  console.log("Se agrego un producto de Limpieza con un valor de $40");
  contadorProductos = contadorProductos + contador;
  precioProductos = precioProductos + precioLimpieza;
}
function agregarHigiene() {
  console.log("Se agrego un producto de Higiene con un valor de $20");
  contadorProductos = contadorProductos + contador;
  precioProductos = precioProductos + precioHigiene;
}
function agregarJardin() {
  console.log("Se agrego Un producto de Jardin con un valor de $30");
  contadorProductos = contadorProductos + contador;
  precioProductos = precioProductos + precioJardin;
}
function pedirOtroProducto() {
  Comprar();
}
function precioTotal() {
  console.log(`La cantidad de tus productos es: ${contadorProductos}`);
  console.log(`El Precio de tus productos es ${precioProductos}`);
  alert("Gracias por comprar");
}

function Comprar() {
  let Productos = prompt(
    "Bienvenido al carrito! \n Seleccione una opcion: \n Bebida \n Comida \n Limpieza \n Higiene \n Jardin \n Ir a la caja \n Volver al menu"
  );

  if (
    Productos === "Bebida" ||
    "Comida" ||
    "Limpieza" ||
    "Higiene" ||
    "Jardin" ||
    "Ir a la Caja" ||
    "Volver al menu"
  ) {
    if (Productos === "Bebida") {
      agregarBebida();
      pedirOtroProducto();
    } else if (Productos === "Comida") {
      agregarComida();
      pedirOtroProducto();
    } else if (Productos === "Limpieza") {
      agregarLimpieza();
      pedirOtroProducto();
    } else if (Productos === "Higiene") {
      agregarHigiene();
      pedirOtroProducto();
    } else if (Productos === "Jardin") {
      agregarJardin();
      pedirOtroProducto();
    } else if (Productos === "Ir a la caja") {
      precioTotal();
    } else if (Productos === "Volver al menu") {
      menu();
    } else {
      console.log("Operacion invalida.");
      Comprar();
    }
  }
}

function verCarrito() {
  let totalProductos = contadorProductos;
  let precioTotalProductos = precioProductos;
  console.log(
    `Su Cantidad de productos en este momento es de: ${totalProductos}`
  );
  console.log(
    `El precio de todos los productos en este momento es de: ${precioTotalProductos}`
  );
  menu();
}

function menu() {
  let menunav = prompt(
    "Bienvenido al menu \n Por favor seleccione una opcion: \n Comprar \n Ver carrito \n Ir a la caja"
  );
  if (menunav === "Comprar") {
    Comprar();
  } else if (menunav === "Ver carrito") {
    verCarrito();
  } else if (menunav === "Ir a la caja") {
    precioTotal();
  } else {
    console.log("Operacion invalida");
    menu();
  }
}

menu();
