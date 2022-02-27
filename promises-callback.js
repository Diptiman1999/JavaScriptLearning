const posts = [
  { title: "Part 1", body: "This is part 1 body" },
  { title: "Part 2", body: "This is part 2 body" },
];

function getPost() {
  setTimeout(function () {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// getPost();
// createPost({ title: "Part 3", body: "This is part 3 body" });

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      posts.push(post);
      const error = false;
      if (!error) resolve();
      else reject("Error occurred");
    }, 2000);
  });
}

// createPost({ title: "Part 3", body: "This is part 3 body" })
//   .then(getPost)
//   .catch((err) => console.log(err));

// Async Await
async function init() {
  await createPost({ title: "Part 3", body: "This is part 3 body" });
  getPost();
}
init();
// Without await
// It would have returned Only two Parts

// // Promise.all
// const promise1 = Promise.resolve("Hello Diptiman");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "Function overed after 5 sec");
// });
// Promise.all([promise1, promise2, promise3]).then((value) => console.log(value));
