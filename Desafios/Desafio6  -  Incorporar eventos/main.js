function init() {
  precargarDatos();
  btnAgregarProductos();
  programarBotones();
  programarInputs();
}

class Producto {
  constructor(id, producto, precio, cantidad, precioTotal) {
    this.id = id;
    this.producto = producto;
    this.cantidad = cantidad;
    this.precio = precio;
    this.precioTotal = precioTotal;
  }

  agregarCantidad() {
    this.cantidad++;
  }

  quitarCantidad() {
    this.cantidad--;
  }
}

function precargarDatos() {
  if (localStorage.getItem("ProductosEnStorage") !== null) {
    dataEnStorage = JSON.parse(localStorage.getItem("ProductosEnStorage"));
  }
  console.log(dataEnStorage);
}

function MostrarProductos(data) {
  const nodoProductos = document.getElementById("ListaProductos");
  nodoProductos.textContent = "";
}

function programarBotones() {
  // programarBotonesStock();
  programarBotonAgregarProducto();
}

function programarBotonesStock() {
  const eliminarStockBtn = document.querySelector("#eliminarStock");
  const agregarStockBtn = document.querySelector("#agregarStock");
  const cambiarPrecio = document.querySelector("#cambiarPrecio");

  eliminarStockBtn.addEventListener("click", () => {
    alert("Stock eliminado");
  });
  agregarStockBtn.addEventListener("click", () => {
    alert("Stock Agregado");
  });
  cambiarPrecio.addEventListener("click", () => {
    alert("Precio modificado");
  });
}

function programarBotonAgregarProducto() {
  const btnAgregarProducto = document.querySelector("#btnAgregarProducto");

  btnAgregarProducto.addEventListener("click", () => {
    btnAgregarProductos();
  });
}

function btnAgregarProductos() {
  const idProducto = document.querySelectorAll("#ingresarProductoInput").value;

  if (idProducto === "") {
    alert("Ingrese un Producto");
  } else {
    const productoAgregado = new Producto(idProducto);
    data.push(productoAgregado);
  }
  cargarProductos();
  tomarDatos();
}

function programarInputs() {
  const input = document.querySelector("#ingresarProductoInput");

  input.addEventListener("focus", (e) => {
    e.target.value === `Ingresa Un producto`
      ? (input.value = "")
      : "Ingresa Un producto";
  });
  input.addEventListener("blur", (e) => {
    e.target.value === "" ? (input.value = `Ingresa Un producto`) : "";
  });
}

function tomarDatos() {
  localStorage.setItem("ProductosEnStorage", JSON.stringify(data));
}
