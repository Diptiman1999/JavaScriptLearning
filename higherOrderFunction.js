console.log("Start");

const radius = [1, 2, 3, 4, 5];

function calculateArea(radius) {
  let output = [];
  for (var i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}

console.log(calculateArea(radius));
console.log("End");
