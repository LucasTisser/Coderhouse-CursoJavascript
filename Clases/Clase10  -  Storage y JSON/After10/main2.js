// Version con uso de Storage

// El orden en el codigo es
// 1. Constructores de clase
// 2. Inicializacion de variables
// 3. Construccion de funciones
// 4. Invocacion de funciones

class Alfajor {
  constructor(alfajor, cantidad) {
    this.id = alfajor.id;
    this.marca = alfajor.marca;
    this.precio = alfajor.precio;
    this.cantidad = cantidad;
    this.precioTotal = alfajor.precio;
  }

  agregarUnidad() {
    this.cantidad++;
  }

  quitarUnidad() {
    this.cantidad--;
  }

  actualizarPrecioTotal() {
    this.precioTotal = this.precio * this.cantidad;
  }
}

// Constantes y variables
const alfajores = [
  {
    id: 0,
    marca: "Aguila",
    descripcion: "Alfajor minitorta clasica",
    precio: 100,
    img: "./img/aguilaclasica.jpg",
  },
  {
    id: 1,
    marca: "Milka",
    descripcion: "Alfajor con Mouse de chocolate",
    precio: 90,
    img: "./img/milka mouse.jpg",
  },
  {
    id: 2,
    marca: "Block",
    descripcion: "Alfajor con chocolate con mani",
    precio: 95,
    img: "./img/coflerblock.jpg",
  },
  {
    id: 3,
    marca: "Bon o Bon",
    descripcion: "Alfajor con pasta de mani",
    precio: 85,
    img: "./img/bonobon.jpg",
  },
  {
    id: 4,
    marca: "Pepitos",
    descripcion: "Alfajor con chips de chocolate",
    precio: 90,
    img: "./img/pepitos.jpg",
  },
  {
    id: 5,
    marca: "Guaymallen",
    descripcion: "Alfajor de chocolate",
    precio: 85,
    img: "./img/guaymallenchocolate.jpg",
  },
];

let carrito;

// ------ Declaracion de funciones ------ //

function chequearCarritoEnStorage() {
  let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));
  console.log("Contenido en chequear Carrito en ls", contenidoEnStorage);

  // Si existe el array del carrito, lo retornara
  if (contenidoEnStorage) {
    let array = [];
    for (let i = 0; i < contenidoEnStorage.length; i++) {
      let alfajor = new Alfajor(
        contenidoEnStorage[i],
        contenidoEnStorage[i].cantidad
      );
      alfajor.actualizarPrecioTotal();
      array.push(alfajor);
    }
    return array;
  }
  // Si no existe ese array en el LS, esta funcion devolvera un array vacio
  return [];
}

// Imprime catalogo de alfajores en el HTML
// Recibimos por parametro el array

function imprimirProductosEnHTML(alfajores) {
  // Obtenemos el div que contendra nuestras cards
  let contenedor = document.getElementById("contenedor");

  // Recorremos el array y por cada item imprimimos una card

  for (const alfajor of alfajores) {
    // Creamos el contenedor individual para cada card
    let card = document.createElement("div");

    // Agregamos el contenido a la card
    // Esto es con clases de bootstrap
    card.innerHTML = `
        <div class= "card text-center" style="width: 18rem;">
            <div class="card-body">
                <img src="${alfajor.img}" id="" class="card-img-top img-fluid" alt="">
                <h2 class="card-title">${alfajor.marca}</h2>
                <h5 class="card-subtitle mb-2 text-muted"${alfajor.descripcion}</h5>
                <p class="card-text">$${alfajor.precio}</p>


                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="agregar${alfajor.id}" type="button" onclick="" class="btn btn-dark"> agregar </button>
                </div>
            </div>
        </div>
        `;

    // una vez que tenemos creada la card, la agregamos
    // que obtuvimos desde el HTML
    contenedor.appendChild(card);

    // Es hora de asignar el evento al boton
    // Observen que al id del boton lo nombramos de manera dinamica, asignandole al nombre
    // la palabra "agregar" seguida del id del alfajor.Esto nos crea un nombre unico
    // por cada boton, haciendo referencia a la card seleccionada

    let boton = document.getElementById(`agregar${alfajor.id}`);

    // Al boton le pasamos dos parametros :
    // el evento click seguido de la funcion que queremos que se ejecute
    // al disparar el evento

    boton.onclick = () => agregarAlCarrito(alfajor.id);
  }
}

// Recibe el contenido del carrito y lo imprime en el HTML
// en una tabla
function dibujarTabla(array) {
  let contenedor = document.getElementById("carrito");
  contenedor.innerHTML = "";

  let precioTotal = obtenerPrecioTotal(array);

  // creamos el div que contendra la tabla
  let tabla = document.createElement("div");

  // A ese div le agregaremos todos los datos de la tabla

  tabla.innerHTML = `
    <table id="tablaCarrito" class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Parcial</th>
                <th scope="col">Accion</th>
            </tr>
        </thead>

        <tbody id="bodyTabla">
            <tr>
                <td>Total: $${precioTotal}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td> <button id="vaciarCarrito" onclick="vaciarCarrito()" class="btn btn-secondary">Vaciar Carrito</button></td>
            </tr>
        </tbody>
    </table>
    `;

  contenedor.appendChild(tabla);

  // una vez que dibujamos la tabla, obtenemos el id del body de la tabla
  // donde imprimiremos los datos del array

  let bodyTabla = document.getElementById("bodyTabla");
  for (let alfajor of array) {
    let datos = document.createElement("div");
    datos.innerHTML = `
        <tr>
            <th scope="row"></th>
            <td>${alfajor.marca}</td>
            <td>${alfajor.cantidad}</td>
            <td>${alfajor.precioTotal}</td>
            <td><button id="eliminar${alfajor.id}" type="button" class="btn btn-outline-danger">Eliminar </button> </td>
        </tr>
        `;
    bodyTabla.appendChild(datos);

    // Asignamos el evento click al boton para eliminar un producto del carrito
    $(`#eliminar${alfajor.id}`).on("click", () => {
      eliminarDelCarrito(alfajor.id);
    });
  }
}

function agregarAlCarrito(idProducto) {
  // Verificamos si ese tipo de alfajor ya se encuentra en el array
  // con el metodo find()
  // Este metodo en caso de dar true, nos devuelve el primer elemento del array
  // que cumple con la condicion de busqueda
  let alfajorEnCarrito = carrito.find((elemento) => {
    if (elemento.id == idProducto) {
      return true;
    }
  });

  if (alfajorEnCarrito) {
    // Si el alfajor se encuentra en el carrito, alfajorEnCarrito devolvera
    // true, por lo cual se ejecutara este bloque de codigo
    // y se le sumara uno a la cantidad de esa marca en el carrito

    // primero debemos hallar el index donde se encuentra
    // el alfajor en el carrito (ya que no va a ser el mismo que el del array alfajores)
    let index = carrito.findIndex((elemento) => {
      if (elemento.id === alfajorEnCarrito.id) {
        return true;
      }
    });

    carrito[index].agregarUnidad();
    carrito[index].actualizarPrecioTotal();
  } else {
    // El alfajor no se encuentra en el carrito, asi que
    // lo pusheamos al array asignandole la clase Alfajor
    // para poder acceder a sus metodos
    carrito.push(new Alfajor(alfajores[idProducto], 1));
  }

  // Una vez que actualizamos el carrito, guardamos el carrito actualizado
  // en el Storage
  // Volvemos a traernos ese array del storage para poder imprimirlo y
  // luego llamamos a la funcion
  // que dibuja la tabla en el html para visualizar los productos

  localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
  dibujarTabla(carrito);
}

function eliminarDelCarrito(id) {
  // Buscamos el item en el carrito
  let alfajor = carrito.find((alfajor) => alfajor.id === id);

  let index = carrito.findIndex((element) => {
    if (element.id == alfajor.id) {
      return true;
    }
  });

  // Primero chequeamos el stock para saber si hay que restarle 1
  // o quitar el elemento del array
  if (alfajor.cantidad > 1) {
    // Obtenemos el indice donde se encuentra el alfajor
    // en el carrito de compras
    carrito[index].quitarUnidad();
    carrito[index].actualizarPrecioTotal();
  } else {
    // Si queda solo una unidad, se elimina del array
    // Para esto utilizamos el metodo splice
    // Este metodo sobreescribe el array original
    // Con alfajor id indicamos el indice del elemento en el array
    // a eliminar. El 1 es la cantidad de elementos a eliminar, es este caso, 1 solo.
    carrito.splice(index, 1);

    if (carrito.length === 0) {
      carrito = [];
    }
  }

  localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
  dibujarTabla(carrito);
}

// Recorremos el array para obetener el precio total de la compra
function obtenerPrecioTotal(array) {
  let precioTotal = 0;

  for (const producto of array) {
    precioTotal += producto.precioTotal;
  }
  return precioTotal;
}

function vaciarCarrito() {
  let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));
  contenidoEnStorage = [];
  localStorage.setItem("carritoEnStorage", JSON.stringify(contenidoEnStorage));
  carrito = chequearCarritoEnStorage();
  dibujarTabla(carrito);
}

//  ---- invocacion de funciones ---- //
imprimirProductosEnHTML(alfajores);

// Consulta al Storage para saber si hay informacion almacenada
// Si hay datos, se imprimen en el HTML al refrescar la pagina
carrito = chequearCarritoEnStorage();
dibujarTabla(carrito);
