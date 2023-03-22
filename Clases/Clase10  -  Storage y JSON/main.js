function init() {
  precargarDatos();
  cargarTareas();
  crearAccionGuardar();
  finalizarTarea();
  borrarTarea();
  // localStorage.setItem("Coder","Valor de coder")

  // sessionStorage.setItem("Coder Session Storage","Valor de session storage")
}

function cargarTareas() {
  const nodoTareas = document.querySelector("#divListaTareas");

  nodoTareas.innerHTML = "";
  const table = document.createElement("table");
  table.classList.add("table");
  table.classList.add("table-hover");
  table.classList.add("table-bordered");

  const thr = document.createElement("tr");
  thr.innerHTML = `<thead>
                    <tr><th>No.</th><th>Tarea</th>
                    <th>Fecha Límite</th>
                    <th>Actions</th>
                    </tr>
                    </thead>`;

  table.appendChild(thr);

  const tbody = document.createElement("tbody");

  data.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${element.id}</td>
                        <td>${element.descripcion}</td>
                        <td>${element.fechaLimite}</td>
                        <td>
                        <button id="${
                          element.id
                        }" class="btn btn-danger btnBorrarTarea">
                            Borrar
                        </button>
                        ${getRealizadas(element)}`;

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  nodoTareas.appendChild(table);
}

function crearAccionGuardar() {
  const btn = document.querySelector("#guardarTareaBtn");

  btn.addEventListener("click", () => {
    guardarTarea();
  });
}

function guardarTarea() {
  const valorDescripcion = document.querySelector("#ingresarTareaInput").value;

  const valorFecha = document.querySelector("#fechaLimiteInput").value;
  // trim borra los espacios que puede llegar a escribir el usuario
  if (valorDescripcion.trim() === "" || valorFecha.trim() === "") {
    alert("Ingresa los datos completos");
  } else {
    const today = new Date();
    // split parte a travez del "-" los datos, y los convierte en un array,
    // separado por el caracter mencionado
    const fechaFormateada = valorFecha.split("-");

    const fechaLimite = new Date(
      fechaFormateada[0],
      fechaFormateada[1] - 1,
      fechaFormateada[2]
    );

    const todayMils = today.getTime();
    const finalDateMiles = fechaLimite.getTime();

    if (finalDateMiles < today) {
      alert("Error: Debes poner una fecha posterior");
    } else {
      const tarea = {
        id: data.length + 1,
        descripcion: valorDescripcion,
        fechaLimite: `${fechaFormateada[2]}/${fechaFormateada[1]}/${fechaFormateada[0]}`,
        realizada: false,
      };
      data.push(tarea);
      document.querySelector("#ingresarTareaInput").value = "";
      document.querySelector("#fechaLimiteInput").value = "";
    }
  }
  cargarTareas();
  persistirDatos();
  finalizarTarea();
  borrarTarea();
  // Date tiene D mayus para declara el dia de la fecha
}

// 1. convertir fecha de input a date
// 2. usar milisegundos
// 3. parsear date definido por datos

function persistirDatos() {
  localStorage.setItem("tareas", JSON.stringify(data));
}

function precargarDatos() {
  if (localStorage.getItem("tareas") !== null) {
    data = JSON.parse(localStorage.getItem("tareas"));
  }
}

function getRealizadas(tarea) {
  if (tarea.realizada) {
    return "Tarea Finalizada";
  } else {
    return `<button id="${tarea.id}" class="btn btn-success btnRealizada">
                    Marcar como Realizada
                </button>`;
  }
}

function finalizarTarea() {
  const btn = document.querySelectorAll(".btnRealizada");
  btn.forEach((boton) => {
    boton.addEventListener("click", () => {
      const idBtn = Number(boton.id);
      data.forEach((element) => {
        if (element.id === idBtn) {
          element.realizada = true;
        }
        cargarTareas();
        persistirDatos();
        finalizarTarea();
        borrarTarea();
      });
    });
  });
}

function borrarTarea() {
  const btn = document.querySelectorAll(".btnBorrarTarea");
  btn.forEach((boton) => {
    boton.addEventListener("click", () => {
      const idBtn = parseInt(Number(boton.id));
      data.forEach((element) => {
        if (element.id === idBtn) {
          const filter = data.indexOf((data) => data.id === idBtn);
          const index = filter;

          data.splice(index, 1);
        }
        cargarTareas();
        persistirDatos();
        finalizarTarea();
        borrarTarea();
      });
    });
  });
}
