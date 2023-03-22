// 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 110 , 165 . . .

let num = prompt("Ingrese un numero");
let n0 = 1;
let n1 = 1;

if (num === 0) {
  console.log(n0);
}
if (num === 1) {
  console.log(n1);
} else {
  for (let i = 2; i <= num; i++) {
    let ni = n0 + n1;
    n0 = n1;
    n1 = ni;
  }
  console.log(n1);
}
