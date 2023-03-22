let usuarios = [
  {
    nombre: "Lucas",
    apellido: "Prada",
    id: 1,
    trabajo: "Ing. Sistemas",
    active: "False",
  },
  {
    nombre: "Martin",
    apellido: "Sanchez",
    id: 2,
    trabajo: "Contador",
    active: "True",
  },
  {
    nombre: "Manuel",
    apellido: "Perez",
    id: 3,
    trabajo: "Abogado",
    active: "True",
  },
  {
    nombre: "Javier",
    apellido: "Rodriguez",
    id: 4,
    trabajo: "Odontologo",
    active: "False",
  },
  {
    nombre: "Pedro",
    apellido: "Lamas",
    id: 5,
    trabajo: "Economista",
    active: "True",
  },
];

let opciones = [
  `
    1..Lista de usuarios.
    2..Modificar.
    3..Agregar.
    4..Buscar.
    5..Borrar.
    6..Obtener nombre completos.
    7..Obtener activos.
    8..ordenar.
    9..terminar.
    `,
];

/*  0.Declarar una variable para almacenar la opcion
    1.Mientras la opcion seleccionada sea !== 9
        2.Mostrar las  opciones
*/

// algo anterior que se explico
// let listado = "";
// for(let i=0;i<opciones.length;i++)
// {
//     listado+=opciones[i];
// }

let opcionSeleccionada = 0;
let listado = "";
opciones.forEach((opcion) => {
  listado += opcion;
});

do {
  opcionSeleccionada = parseInt(prompt("Seleccione una opcion" + listado));

  switch (opcionSeleccionada) {
    case 1: {
      listarUsuarios();
      break;
    }
    case 2: {
      modificarUsuarios();
      break;
    }
    case 3: {
      agregarUsuarios();
      break;
    }
    case 4: {
      buscarUsuarios();
      break;
    }
    case 5: {
      borrarUsuarios();
      break;
    }
    case 6: {
      obtenerNombresCompletos();
      break;
    }
    case 8: {
      ordenar();
      break;
    }
  }
} while (opcionSeleccionada !== 9);

function listarUsuarios() {
  usuarios.forEach((usuario) => console.log(usuario));
}
function modificarUsuarios() {
  const id = parseInt(prompt("Ingrese un id"));
  const usuarioBuscado = usuarios.find((usuario) => id === usuario.id);

  // console.log(usuarioBuscado);

  if (typeof usuarioBuscado !== `undefined`) {
    const opcionesModificar = parseInt(
      prompt(`Seleccione una opcion:
    1..Modificar nombre.
    2..Modificar apellido.
    3..Modificar trabajo.`)
    );

    switch (opcionesModificar) {
      case 1: {
        usuarioBuscado.nombre = prompt("Ingrese nuevo nombre:");
        break;
      }
      case 2: {
        usuarioBuscado.apellido = prompt("Ingrese nuevo apellido:");
        break;
      }
      case 3: {
        usuarioBuscado.trabajo = prompt("Ingrese nuevo trabajo:");
        break;
      }
      default: {
        alert("Opcion invalida");
      }
    }
  } else {
    alert("id de usuario invalido");
  }
}

// Se puede decir que el id se asigne al ultimo id agregado, para que tenga un orden

function agregarUsuarios() {
  const idNuevo = parseInt(prompt("Ingrese un id para el usuario nuevo:"));
  const nombreNuevo = prompt("Ingrese un nombre nuevo:");
  const apellidoNuevo = prompt("Ingrese un apellido nuevo:");
  const trabajoNuevo = prompt("Ingrese un trabajo nuevo:");

  const usuarioAgregado = {
    nombre: nombreNuevo,
    apellido: apellidoNuevo,
    id: idNuevo,
    trabajo: trabajoNuevo,
  };
  usuarios.push(usuarioAgregado);
}

function buscarUsuarios() {
  const filtro = prompt("Ingrese el criterio de busqueda: ");

  const coincidencias = usuarios.filter((usuario) => {
    return usuario.apellido === filtro;
  });

  if (coincidencias) {
    console.log(coincidencias);
  } else {
    alert("No hay coincidencias");
  }
}

function borrarUsuarios() {
  const id = parseInt(prompt("Ingrese un id de usuario"));
  // some devuelve verdadero o falso
  const existe = usuarios.some((usuario) => usuario.id === id);

  if (existe) {
    const index = usuarios.indexOf((usuario) => usuario.id === id);
    usuarios.splice(index, 1);
  } else {
    alert("No existe usuario");
  }
  // cuando quiero borrar uno en especifico, me borra el ultimo usuario
  // siempre, hay que corregir y poder eliminar el que decida
}

function obtenerNombresCompletos() {
  const datosTransformados = usuarios.map((element) => {
    return {
      nombreCompleto: element.nombre + element.apellido,
      id: element.id,
      activo: element.active,
    };
  });
  console.log(datosTransformados);
}
