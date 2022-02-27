console.log("Start");

const radius = [1, 2, 3, 4, 5];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

Array.prototype.calculate = function (logic) {
  let output = [];
  for (var i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log("End");
