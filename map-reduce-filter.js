const radius = [100, 2, 3, 4, 52, 6, 7, 89];

// Map
console.log(
  "Double th element :",
  radius.map(function (x) {
    return 2 * x;
  })
);

// When you are using arrow function then also you need to use return if there is more than one line
// If there is only one line then no need to use {} and retrurn keyword
console.log(
  "Double th element :",
  radius.map((x) => 2 * x)
);

// Filter
console.log(
  "Greater than 50 :",
  radius.filter(function (x) {
    return x > 50;
  })
);

console.log(
  "Greater than 50 :",
  radius.filter((x) => x > 50)
);

// Reduce
console.log(
  "Maximum value :",
  radius.reduce((acc, curr) => {
    if (curr > acc) acc = curr;
    return acc;
  }, 0)
);

const classRoom = [
  { name: "Diptiman Senapati", age: 22, section: "J" },
  { name: "Rohit Kumar", age: 24, section: "A" },
  { name: "Ankit Kumar", age: 23, section: "B" },
  { name: "Deepak Balmochai", age: 22, section: "A" },
];
console.log("ClassRoom :", classRoom);

console.log(
  "Name + Age :",
  classRoom.map((x) => x.name + " " + x.age)
);
console.log(
  "Group Wise Age :",
  classRoom.reduce(function (acc, curr) {
    if (acc[curr.age]) acc[curr.age]++;
    else acc[curr.age] = 1;
    return acc;
  }, {})
);
