const btn = document.getElementById("guardarTareaBtn");

const tablas = document.getElementById("listaTareas");

const botones =
  document.getElementsByClassName(
    "btn"
  ); /* va a tomar todos los que tengan class btn*/

// btn.setAttribute("style", "display:none"); /* desaparezco el boton*/

// const divs =
//   document.getElementsByTagName(
// "div"
//   ); /* va a tomar todos las etiquetas div en el objeto*/
// console.log(divs);

// for (const div of divs) {
//   console.log("div");
//   div.innerText = "Cambio en divs"; /* innertext cambia textos */
// } /* recorro los divs existentes */

// for (const boton of botones) {
//   boton.setAttribute("style", " color:yellow");
// } /* cambia estilos de los botones en conjunto */

// for (const boton of botones) {
//   botones.innerHTML = "HOLA";
// } /* innerHTML cambia textos, y ademas puedo agregar etiquetas propias del HTML */

function init() {
  const divs = document.getElementsByTagName("div");
  //   divs[2].innerHTML = "<div><b>HOLA</b></div>";
  cargarTareas();
}
function cargarTareas() {
  const nodoTareas = document.getElementById("divListaTareas");

  const table = document.createElement("table");

  table.setAttribute("id", "listaTareas");

  table.setAttribute("class", "table table-hover table-bordered");

  table.innerHTML = `<thead>
    <tr>
        <th>No.</th>
        <th>Todo Item</th>
        <th>Status</th>
        <th>Actions</th>
    </tr>
    </thead>`;

  const tbody = document.createElement("tbody");

  data.forEach((tarea) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${tarea.id}</td>
        <td>${tarea.descripcion}</td>
        <td>${tarea.fechaLimite}</td>
        <td>
            <button class="btn btn-danger">
                Borrar
            </button>
            <button class="btn btn-success">
                Marcar como terminada
            </button>
        </td>`;
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  nodoTareas.appendChild(table);
}
