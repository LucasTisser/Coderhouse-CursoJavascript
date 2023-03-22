function init() {
  agregarAccionConToastify();
  agregarAccionConToastifyStyled();
  agregarAccionConToastifyClickeable();
  agregarAccionConToastifyDestiny();
}

function agregarAccionConToastify() {
  const nodo = document.querySelector("#btnTOAST");
  nodo.addEventListener("click", () => {
    Toastify({
      text: "ESTO ES UN SALUDO",
      duration: 3000,
      gravity: "top",
      position: "center",
    }).showToast();
  });
}

function agregarAccionConToastifyStyled() {
  const nodo = document.querySelector("#btnTOAST2");
  nodo.addEventListener("click", () => {
    Toastify({
      text: "ESTO ES UN SALUDO",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "black",
        fontSize: "200px",
      },
    }).showToast();
  });
}

function agregarAccionConToastifyClickeable() {
  const nodo = document.querySelector("#btnTOAST3");
  nodo.addEventListener("click", () => {
    Toastify({
      text: "ESTO ES UN SALUDO",
      duration: 3000,
      gravity: "top",
      position: "center",
      onClick: () => {
        alert("ESTA ES LA FUNCION DEL TOAST");
      },
    }).showToast();
  });
}

function agregarAccionConToastifyDestiny() {
  const nodo = document.querySelector("#btnTOAST4");
  nodo.addEventListener("click", () => {
    Toastify({
      text: "ESTO ES UN SALUDO",
      duration: 3000,
      gravity: "top",
      position: "center",
      destination: "https://google.com",
    }).showToast();
  });
}
