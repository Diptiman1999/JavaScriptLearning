console.log("Start");

function x1(param) {
  setTimeout(function x1() {
    console.log("Inside Param x1 started");
    param();
    console.log("Inside Param x1 ended");
  }, 10000);
}

x1(function () {
  console.log("Pass As Argument");
});

console.log("End");

// Output
/*  Start
    End
    Inside Param x1 started
    Pass As Argument
    Inside Param x1 ended
*/
