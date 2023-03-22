let productos = [
  {
    producto: "Azucar",
    id: 1,
    stock: 10,
  },
  {
    producto: "Huevos",
    id: 2,
    stock: 100,
  },
  {
    producto: "Aceite de oliva",
    id: 3,
    stock: 15,
  },
  {
    producto: "Surtido de galletas",
    id: 4,
    stock: 20,
  },
  {
    producto: "Tomate triturado",
    id: 5,
    stock: 2,
  },
];

let menu = [
  `
    1.Lista de productos.
    2.Agregar.
    3.Borrar.
    4.Buscar productos disponibles.
    5.Obtener cantidad de stock disponible.
    6.Ordenar productos.
    7.Terminar.
    `,
];

let opcionSeleccionada = 0;
let listado = "";
menu.forEach((opcion) => {
  listado += opcion;
});

do {
  opcionSeleccionada = parseInt(prompt("Seleccione una opcion" + listado));

  switch (opcionSeleccionada) {
    case 1: {
      listarProductos();
      break;
    }
    case 2: {
      agregarProductos();
      break;
    }
    case 3: {
      borrarProductos();
      break;
    }
    case 4: {
      buscarProducto();
      break;
    }
    case 5: {
      cantidadProductos();
      break;
    }
    case 6: {
      ordenarProductos();
      break;
    }
  }
} while (opcionSeleccionada !== 7);

function listarProductos() {
  productos.forEach((producto) => console.log(producto));
}

function agregarProductos() {
  const idNuevo = parseInt(prompt("Ingrese un id  para el producto nuevo:"));
  const productoNuevo = prompt("Ingrese el nombre del producto:");
  const stockNuevo = parseInt(prompt("Ingrese un stock del producto nuevo:"));

  const productoAgregado = {
    producto: productoNuevo,
    id: idNuevo,
    stock: stockNuevo,
  };
  productos.push(productoAgregado);
}

function borrarProductos() {
  const id = parseInt(prompt("Ingrese el id de producto a borrar:"));

  const existe = productos.some((producto) => producto.id === id);

  if (existe) {
    const index = productos.indexOf((producto) => producto.id == id);
    productos.splice(index, 1);
  } else {
    alert("No existe el producto");
  }
}

function buscarProducto() {
  const filtro = prompt("Ingrese el metodo de busqueda");

  const productoEncontrado = productos.filter((producto) => {
    return producto.producto === filtro;
  });

  if (productoEncontrado) {
    console.log(productoEncontrado);
  } else {
    alert("Producto no disponible");
  }
}

function cantidadProductos() {
  const cantidadTranformada = productos.map((producto) => {
    return {
      Producto: producto.producto,
      Stock: producto.stock,
    };
  });
  console.log(cantidadTranformada);
}

function ordenarProductos() {
  const productosOrdenados = productos.sort((a, b) => a.producto > b.producto);
  console.log(productosOrdenados);
}
