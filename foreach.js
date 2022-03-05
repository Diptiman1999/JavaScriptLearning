console.log("Start");
let l1 = ["diptiman", "rohit", "ankit"];
console.log("L1:", l1);

async function timer(data) {
  console.log("Inside Timer");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(data);
      resolve();
    }, 5000);
  });
}

// https://gist.github.com/Diptiman1999/83fceaaf8a657b9d942a7eabdc3cd441
async function test1() {
  console.log("Inside test1");
  //   await Promise.all(
  //     l1.map(async (data) => {
  //       await timer(data);
  //     })
  // );//It work in parallel but waits until all promise are resolved
  for (const name of l1) {
    await timer(name);
  } //It work one by one
  console.log("Exiting test1");
}

async function allFunction() {
  console.log("Inside all function");
  await test1();
  console.log("Existing all function");
}

allFunction();
