
// --- Variables ---

const carrito = document.querySelector(`#carrito`);
const contenedorCarrito = document.querySelector(`#listaCarrito tbody`);
const vaciarCarritoBtn = document.querySelector (`#vaciarCarrito`);
const listaProductos = document.querySelector (`#listaProductos`);
let articulosCarrito = [];

//  --- Funciones ---

cargarEventListeners();

function cargarEventListeners(){
    // Cuando agregar un producto presionando "Agregar al Carrito"
    listaProductos.addEventListener(`click`, agregarProducto);

    // Elimina productos del carrito
    carrito.addEventListener(`click`, eliminarProducto);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener(`click`, () => {
        articulosCarrito= []; // Reset del array
        limpiarHTML(); // eliminamos al HTML
        Swal.fire({
            position: 'top-end',
            title: 'Su carrito ha sido vaciado con exito',
            showConfirmButton: false,
            timer: 1500
        })
    })
}


function agregarProducto(e){
    // Previene que al tocar el boton no se deslize la pantalla hacia arriba
    e.preventDefault();
    
    if (e.target.classList.contains(`agregarCarrito`) ) {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su producto ha sido agregado con exito',
        showConfirmButton: false,
        timer: 1500
        })
        const productoSeleccionado = e.target.parentElement.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
    
}

// Elimina un Producto del carrito
function eliminarProducto(e){
    if (e.target.classList.contains(`borrarProducto`)){
        const productoId = e.target.getAttribute(`data-id`);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su producto ha sido eliminado con exito',
            showConfirmButton: false,
            timer: 1500
        })
        // Elimina del array de articulosCarrito por el data-id
        articulosCarrito= articulosCarrito.filter(producto => producto.id !== productoId)
        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}


// Lee el contenido HTML al que le dimos click y extrae la informacion del producto
function leerDatosProducto(producto){
    // Crear un objeto con el contenido del Producto actual
    const infoProducto = {
        imagen: producto.querySelector(`img`).src,
        titulo: producto.querySelector(`h5`).textContent,
        precio: producto.querySelector(`.precio span`).textContent,
        id: producto.querySelector(`a`).getAttribute(`data-id`),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
    if(existe){
        // Actualizamos la cantidad

        const productos = articulosCarrito.map(producto =>{
            if(producto.id === infoProducto.id){
                producto.cantidad++;
                return producto; // retorna el objeto actualizado
            } else {
                return producto; // retorna los objetos que no son los duplicados
            }
        }) 
        articulosCarrito = [...productos];
    } else {
        // Agrega elementos al array de carrito
        articulosCarrito = [...articulosCarrito,infoProducto];
    }
    // console.log(articulosCarrito);
    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML(){

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach((producto)=>{
        const {imagen,titulo, precio, cantidad, id } = producto
        const row = document.createElement(`tr`);
        row.innerHTML = `
            <td>
            <img src="${imagen}" style="width:100px; height:75px"> 
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrarProducto" data-id="${id}"><button type="button" class="btn btn-danger borrarProducto" data-id=${id}>X</button></a>
            </td>
            
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}


// Elimina los productos del tbody
function limpiarHTML(){

    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

function mostrarDataProductos(){

    const dataProductos = new XMLHttpRequest();

    dataProductos.open('GET','./js/productos.json', true);

    dataProductos.send();

    dataProductos.onreadystatechange = function (){
        if(this.readyState ==  4 && this.status == 200){
            let data = JSON.parse(this.responseText);

            const tarjetaProductos = document.querySelector(`#tarjetasProductos`);

            tarjetaProductos.innerHTML = "";

            data.forEach(element=>{

            const divCard = document.createElement("div");
            divCard.classList.add("col");
            divCard.classList.add("mb-5");

            const divCard2 = document.createElement("div")
            divCard2.classList.add("card");
            divCard2.classList.add("h-100");

            const divAgregarCarrito = document.createElement("div")
            divAgregarCarrito.classList.add("card-footer");
            divAgregarCarrito.classList.add("p-4");
            divAgregarCarrito.classList.add("pt-0");
            divAgregarCarrito.classList.add("border-top-0");
            divAgregarCarrito.classList.add("bg-transparent");

            const btnAgregarCarrito = document.createElement("div")
            btnAgregarCarrito.classList.add("text-center");

            const cardBody = document.createElement("div")
            cardBody.classList.add("card-body");
            cardBody.classList.add("p-4");

            cardBody.innerHTML= `
                                    <div class="text-center">
                                        <img src="${element.imagen}" class="card-img-top img-fluid" style="width:150px; height:150px; border-radius:5px">
                                        <h5 class="fw-bolder">${element.titulo}</h5>
                                        <p class="precio"><span>$${element.precio}</span></p>
                                    </div>
            `

            btnAgregarCarrito.innerHTML= `
            <a class="btn btn-outline-dark mt-auto agregarCarrito" data-id="${element.id}" href="#">Agregar al carrito</a>
            `;

            divAgregarCarrito.appendChild(btnAgregarCarrito)
            divCard2.appendChild(cardBody);
            divCard.appendChild(divCard2);
            divCard2.appendChild(divAgregarCarrito);
            tarjetaProductos.appendChild(divCard)
            });
            localStorage.setItem("Productos", JSON.stringify(data));
        }
    }
}

fetch(`./js/productos.json`)
.then(resp => resp.json())
.then( data => {
    mostrarDataProductos(data)
})