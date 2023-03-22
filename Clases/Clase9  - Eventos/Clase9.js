// const btn = document.getElementById("guardarTareaBtn");
// console.log(btn);
// const tablas = document.getElementById("listaTareas");
// console.log(tablas);

// const  botones =
//     document.getElementsByClassName("btn"); /* va a tomar todos los que tengan class btn objeto*/

// btn.setAttribute("style", "display:none"); /* desaparezco el boton*/

// const botones =
// document .getElementsByClassName("btn");

// botones[0].innerHTML="Hola";
// botones[1].innerHTML="Como";
// botones[2].innerHTML="Estas";
// botones[3].innerHTML="Todo bien";

// const divs =
//     document.getElementsByTagName("div"); /* va a tomar todos las etiquetas div en el objeto*/
//     console.log(divs);

// for ( const div of divs){
//     console.log("div")
//     div.innerText="Cambio en divs"; /* innertext cambia textos */
// } /* recorro los divs existentes */

// for ( const boton of botones){
//     botones.setAttribute ( "style", " color:yellow" );
// } /* cambia estilos de los botones en conjunto */

// for (const boton of botones){
// botones.innerHTML="HOLA"
// } /* innerHTML cambia textos, y ademas puedo agregar etiquetas propias del HTML */

function init() {
  // const divs = document.getElementsByTagName("div");
  // divs[2].innerHTML="<div><b>HOLA</b></div>";
  cargarTareas();
  programarInputs();
  programarBotones();
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

function programarBotones() {
  programarBotonGuardarTarea();
}

function validarFecha(fechaLimite) {
  console.log(fechaLimite);

  const hoy = new Date();

  const fecha = new Date(2022, 00, 17);
  console.log(fecha);

  const comparacion = fecha < hoy;
  console.log(comparacion);
}

function programarInputs() {
  programarInputFecha();

  // const input =
  // document.querySelector("#ingresarTareaInput");

  // input.addEventListener("focus", (e)=>{
  //     if(e.target.value === `ingresa Una Tarea`){
  //         input.value = '';
  //     }
  // })
  // input.addEventListener("blur", (e)=>{
  //     if(e.target.value === ''){
  //         input.value = 'ingresa Una Tarea';
  //     }
  // })
  // input.onchange = ()=>{
  //     alert("hola");
  // }

  // tambien esta keydown
  // input.addEventListener("keyup", (e)=>{
  //     alert(e.target.value);
  // })
}

function programarInputFecha() {
  const fecha = document.getElementById("fechaLimite");
  fecha.addEventListener("focus", (e) => {
    if (e.target.value === `Fecha Limite de la tarea`) {
      e.target.value = "";
    }
  });
  fecha.addEventListener("blur", (e) => {
    if (e.target.value === "") {
      e.target.value = "Fecha Limite de la tarea";
    } else {
      validarFecha(e.target.value);
    }
  });
}

function programarBotonGuardarTarea() {
  const guardarBtn = document.querySelector("#guardarTareaBtn");

  // addEventListener funciona igual que onclick pero es una funcion

  guardarBtn.addEventListener("click", function () {
    alert("Hice click en el boton");
  });

  // guardarBtn.addEventListener("mouseover",function(){
  //     alert("Pase por encima del boton")
  // })

  // guardarBtn.addEventListener("mouseout",function(){
  //     alert("el cursor esta fuera del boton")
  // })
}

// onclick es lo mismo que addEventListener, pero se presenta en una propiedad
// guardarBtn.onclick = ()=>{
// alert("Hola, soy un boton programado")
// }
// }

// llegamos hasta 1:29:00 hs
