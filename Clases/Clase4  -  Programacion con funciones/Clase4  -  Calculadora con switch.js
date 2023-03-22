/*
1.Pedir al usuario un numero
2.Pedir  al usuario otro numero
3.Pedir al usuario una operacion
4.Imprimir el resultado
*/

const numero1 = parseInt(prompt("Ingrese un numero"));
const numero2 = parseInt(prompt("Ingrese otro numero"));
const operacion = prompt("Ingrese una operacion:\n Suma\n Resta\n Mul\n Div");

// --- Opcion Principal ---

switch (operacion) {
  case "Suma": {
    // console.log(numero1 + numero2);
    parseInt(alert(numero1 + numero2));
    break;
  }
  case "Resta": {
    // console.log(numero1 - numero2);
    parseInt(alert(numero1 - numero2));
    break;
  }
  case "Mul": {
    // console.log(numero1 * numero2);
    parseInt(alert(numero1 * numero2));
    break;
  }
  case "Div": {
    // console.log(numero1 / numero2);
    parseInt(alert(numero1 / numero2));
    break;
  }
  default: {
    console.log("Operacion invalida");
    break;
  }
}

// --- Opcion alternativa ---

// if (operacion === "Suma")
//     {
//         // console.log(numero1+numero2);
//         parseInt(alert(numero1 + numero2));
//     }
// else if (operacion === "Resta")
//     {
//         // console.log(numero1-numero2);
//         parseInt(alert(numero1 - numero2));
//     }
// else if (operacion === "Mul")
//     {
//         // console.log(numero1*numero2);
//         parseInt(alert(numero1 * numero2));
//     }
// else if(operacion === "Div")
//     {
//         // console.log (numero1/numero2);
//         parseInt(alert(numero1 / numero2));
//     }
// else
//     {
//         console.log("operacion no valida")
//     }
