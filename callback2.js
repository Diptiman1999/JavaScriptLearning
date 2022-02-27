console.log("Start");
function xyz(param) {
  param();
}

xyz(function par() {
  console.log("Pass As Parameter");
});

console.log("End");

/*
Output-
  Start
  Pass As Parameter
  End
*/

console.log("Start");
function xyz2() {
  var count = 0;
  setTimeout(function () {
    console.log("Pass As Parameter 2", ++count);
  }, 5000);
  return count;
}

console.log("Output :", xyz2());

console.log("End");
