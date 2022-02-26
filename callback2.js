console.log("Start");

function x1(param) {
  param();
}

function x2(param) {
  param();
}
x1(function () {
  console.log("Pass As Argument 1");
});
// x2(function () {
//   console.log("Pass As Argument 1");
// });

console.log("End");

// Output
/*  Start
    Pass As Argument
    End
*/

// As there is nothing to wait here thats why it return instantly
// console.log("Start");

function x2(param) {
  setTimeout(param, 5000);
}

x2(function () {
  console.log("Pass As Argument 2");
});

// console.log("End");
