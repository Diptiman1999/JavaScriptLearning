let r = 100;
var q = 190;
function x() {
  var a = 1;
  //   console.log(b); --- reference error in temporal dead zone
  let b = 1000;

  function y() {
    console.log(a);
  }
  return y;
}

var z = x();
console.log(z);
z();
console.log("Window q", window.q);
