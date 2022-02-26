// function x() {
//   var a = 1;
//   function y(i) {
//     a = a + i;
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// console.log(z);
// z(1);
// z(1);
// z(1);

function x() {
  let a = 1;
  function y(i) {
    a = a + i;
    console.log(a);
  }
  return y;
}

var z = x();
console.log(z);
z(1);
z(1);
z(1);
