function init() {
  cargarProductos();
}

function cargarProductos() {
  const nodoProductos = document.getElementById("tablaStock");

  const table = document.createElement("table");

  table.setAttribute("id", "listaStock");
  table.setAttribute("class", "table table-bordered table-hover table-wrapper");

  table.innerHTML = `
    <thead>
        <tr>
            <th>N.id</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio p/ unidad</th>
            <th>Acciones</th>
        </tr>
    </thead>
    `;
  const tbody = document.createElement("tbody");

  data.forEach((producto) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${producto.id}</td> 
        <td>${producto.producto}</td> 
        <td>${producto.cantidad}</td>
        <td>${producto.precioPorUnidad}</td>
        <td>
            <button class="btn btn-danger">
                Eliminar stock
            </button>
            <button class="btn btn-success">
                Agregar stock
            </button>
            <button class="btn btn-primary">
                Cambiar precio por unidad
            </button>
        </td>
        `;
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  nodoProductos.appendChild(table);
}
