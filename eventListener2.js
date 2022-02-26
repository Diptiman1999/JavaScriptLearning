window.onload = function () {
  console.log("Started");
  function incrementCounter() {
    let count = 0;
    document
      .getElementById("clickMe")
      .addEventListener("click", function xyz() {
        console.log("It is Clicked", ++count);
      });
  }
  incrementCounter();
  console.log("Ended");
};

// window.onload was used because  is returning null because it executes before the DOM fully loads.
