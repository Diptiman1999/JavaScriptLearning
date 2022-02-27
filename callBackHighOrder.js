console.log("Start");

const radius = [1, 2, 3, 4, 5];

// One thing you cant return from setTimeout callback function because it is executed after the closure function is retuned
// In for loop if you use var for calling array then it will may cause a problem in callback thing
// So use let
function calculateArea(radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    setTimeout(function calc() {
      console.log("Message");
      output.push(Math.PI * radius[i] * radius[i]);
      console.log(output);
    }, 5000);
  }
  return output;
}

console.log(calculateArea(radius));
console.log("End");
