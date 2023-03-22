class Pelicula {
  constructor(nombre, duracion, genero) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.genero = genero;
  }
}

// Definicion de variables
// Array que contendra el listado de peliculas
// let listadoPeliculas;

// Validacion para cargar un array tomando los datos almacenados en el LS
// Si no hay nada, devuelve un array vacio
// Esto lo pueden adaptar a su carrito de compras
// En donde esta funcion se llamaria, por ej, "cargarCarrito"

function cargarListado() {
  let listadoPeliculas = JSON.parse(localStorage.getItem("listadoPeliculas"));
  if (listadoPeliculas == null) {
    return [];
  }
  return listadoPeliculas;
}

// funcion para guardar pelicula
// Obtiene los datos ingresados en el form accediendo al value de los inputs
function guardarPelicula(e) {
  e.preventDefault();

  let nombre = document.querySelector("#nombre").value;
  let duracion = document.querySelector("#duracion").value;
  let genero = document.querySelector("#genero").value;

  // Esta funcion recupera el array guardado en el LS
  // Validando que en caso de no contener nada, devuelva un array vacio

  let listadoPeliculas = cargarListado();

  // Se agrega la pelicula nueva al array
  listadoPeliculas.push(new Pelicula(nombre, duracion, genero));

  // Actualizamos el LS y mostramos el listado de pelis
  localStorage.setItem("listadoPeliculas", JSON.stringify(listadoPeliculas));
  mostrarListado(listadoPeliculas);

  // Limpia el texto ingresado en el form ( metodo reset())
  document.getElementById("formularioPeliculas").reset();
}

function mostrarEnFavoritos(pelicula) {
  // Simulacion
  console.log(`Se agrego ${pelicula.nombre} al listado de Favoritos`);
}

function mostrarListado(listadoPeliculas) {
  // Obtenemos el id del contenedorw del listado de pelis
  let listado = document.getElementById("listado");

  listado.textContent = "";
  // Nos aseguramos de que el contenido del listado este vacio
  // para evitar duplicacion de elementos
  // pueden probar comentando esta linea() y ver que pasa
  // cada vez que agregen pelis nuevas

  // Recordemos todo el array agregando cada tarjeta generada
  // en el contenedor del listado

  for (const Pelicula of listadoPeliculas) {
    listado.innerHTML = ` 
        <div class="tarjeta">
            <h3>${Pelicula.nombre}</h3>
            <p>${Pelicula.duracion}<p>
            <p>${Pelicula.genero}<p>
            <button id="${Pelicula.nombre}" type="button">Guardar en Favoritos</button> 
        </div>
        `;
    let boton = document.getElementById(`${Pelicula.nombre}`);
    boton.onclick = () => mostrarEnFavoritos(Pelicula);
  }
}

// Funcion asosiada a evento para cambiar tema a darkMode
// (chequear "darkMode" en el css)
function cambiarTema() {
  document.body.classList.toggle("darkMode");
}

// Funcion asosiada a evento para mostrar menu peliculas
// (chequear clase "oculto" en el css)
function mostrarFormulario() {}

// Evento para dark mode
// Obtiene el id del boton desde el html y le asigna el evento click
let botonDarkMode = document.getElementById("darkMode");
botonDarkMode.addEventListener("click", cambiarTema);

// Evento para mostrar menu peliculas
// let mostrarMenu = document.getElementById("mostrarMenu");
// mostrarMenu.addEventListener("click", mostrarFormulario);

// evento para guardar formulario pelicula
let formulario = document.getElementById("formularioPeliculas");
formulario.addEventListener("submit", guardarPelicula);

// Ejecucion del codigo
let listadoPeliculas = cargarListado();
mostrarListado(listadoPeliculas);
