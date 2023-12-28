const path = require("path");

//! path.basename()
// const filename = path.basename("/user/test/file.txt");

//!path.dirname()
//const filename = path.dirname("/user/test/file.txt");
// console.log(filename);

//!path.extname()
// const filename = path.extname("/user/test/file.pdf");
// console.log(filename);
//!path.join()
const joinedPath = path.join("/user", "test", "file.txt");
// console.log(joinedPath);

//!path.resolve()
const absolutePath = path.resolve("text", "file.txt");
// console.log(absolutePath);

//!path.isAbsolute()
const isAbs = path.isAbsolute("user/test");
console.log(isAbs);

//!path.parse()

const parsedPath = path.parse("/users/text/file.txt");
console.log(parsedPath.dir);
console.log(parsedPath.name);
console.log(parsedPath.ext);
