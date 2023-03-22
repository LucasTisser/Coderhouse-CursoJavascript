function init() {
  accionarBotonInfo();
  accionarBotonAprobado();
}

function accionarBotonInfo() {
  const nodoBtn = document.querySelector("#btn");

  nodoBtn.addEventListener(`click`, () => {
    swal.fire({
      title: "aca dentro esta la informacion",
      icon: "info",
      showConfirmButton: false,
    });
  });
}

function accionarBotonAprobado() {
  const nodoBtn2 = document.querySelector("#btn2");

  nodoBtn2.addEventListener(`click`, () => {
    swal.fire({
      title: "Esta es una advertencia",
      text: "esta es informacion sobre la advertencia",
      icon: "warning",
      showConfirmButton: true,
    });
  });
}
