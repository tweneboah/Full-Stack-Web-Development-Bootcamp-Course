//---Nested Timeout Functions----

const task1 = (callback) => {
  setTimeout(() => {
    console.log("Task 1 Completed");
    callback();
  }, 3000);
};

const task2 = (callback) => {
  setTimeout(() => {
    console.log("Task 2 Completed");
    callback();
  }, 2000);
};

const task3 = (callback) => {
  setTimeout(() => {
    console.log("Task 3 Completed");
    callback();
  }, 1000);
};

//start the first task

// task1(function () {
//   // Once the first is completed start the second
//   task2(function () {
//     // Once the first is completed start the third
//     task3(function () {
//       console.log("All the tasks completed");
//     });
//   });
// });

//--fetch user data(dummy)
const userData = { id: 1, name: "Agnes Appia" };
const usersPosts = [
  { id: 101, content: "Post 1" },
  { id: 102, content: "Post 2" },
];
const postComments = {
  101: ["comment 1", "comment "],
  102: ["comment 1", "comment "],
};

//fetch user data
const fetchUserData = (userId, callback) => {
  console.log("Fetcching user data...");
  setTimeout(() => {
    callback(userData);
  }, 1000);
};

//fetch user posts
const fetchUserPosts = (userId, callback) => {
  console.log("Fetcching user posts...");
  setTimeout(() => {
    callback(usersPosts);
  }, 1000);
};

//fetch  posts comments
const fetchPostComments = (postId, callback) => {
  console.log("Fetcching  posts comments...");
  setTimeout(() => {
    callback(postComments[postId] || []);
  }, 1000);
};

//initiate the process
fetchUserData(1, function (userData) {
  console.log("User data", userData);
  fetchUserPosts(userData.id, function (usersPosts) {
    console.log("User posts", usersPosts);
    usersPosts.forEach(function (post) {
      console.log("Post", post);
      fetchPostComments(post.id, function (comments) {
        console.log("Comments", comments);
      });
    });
  });
});
