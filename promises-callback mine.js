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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

async function init() {
  await createPost({ title: "Part 3", body: "This is part 3 body" });
  getPost();
}

init();

// Output
// It will return only two because getpost will be executed first
