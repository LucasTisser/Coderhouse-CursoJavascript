function init() {
  saludar();
  cargarTeclado();
}
/* 
    1. Escriba un programa que pida al usuario su nombre en una ventana Swwet Alert  
    2. Una vez, obtenido el nombre, mostrar un mensaje de Bienvenida. 
    3. Muestre una pantalla con el teclado de una calculadora básica. (SUMA,  MUL)
    0 1 2 
    3 4 5
    6 7 8
    9 + * 
    Puede usar el template predefinido.
    4. Haga que los resultado de  clickear número y  operaciones se muestren en un toast
*/

let acc = 0;
let operacion = "SUMA";

function cargarTeclado() {
  const nodo = document.querySelector("#teclado");
  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "numero");
    div.addEventListener("click", () => {
      if (operacion == "SUMA") {
        acc += i;
      } else {
        acc *= i;
      }

      Toastify({
        text: `Ingresó ${i} / Resultado: ${acc}`,
        duration: 3000,
        gravity: "top",
        position: "center",
      }).showToast();
    });
    div.innerHTML = `${i}`;
    nodo.appendChild(div);
  }
  const divSumar = document.createElement("div");
  divSumar.setAttribute("class", "operacion");
  divSumar.innerHTML = `+`;
  divSumar.addEventListener("click", () => {
    Toastify({
      text: `SUMAR`,
      duration: 3000,
      gravity: "top",
      position: "center",
    }).showToast();
    operacion = "SUMA";
  });
  nodo.appendChild(divSumar);

  const divMul = document.createElement("div");
  divMul.setAttribute("class", "operacion");
  divMul.innerHTML = `*`;
  divMul.addEventListener("click", () => {
    Toastify({
      text: `MULTIPLICAR`,
      duration: 3000,
      gravity: "top",
      position: "center",
    }).showToast();
    operacion = "MUL";
  });
  nodo.appendChild(divMul);
}

function saludar() {
  Swal.fire({
    title: "Ingresa Tu nombre",
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",
  }).then((resultado) => {
    if (resultado.value) {
      let nombre = resultado.value;
      Swal.fire({
        title: `Hola, ${nombre}`,
      });
    }
  });
}
