//---setTimeout---

// const showMessage = () => {
//   console.log("Hello after 3 seconds");
// };

//Schedule the message
// setTimeout(showMessage, 3000);

//rewrite
// setTimeout(() => {
//   console.log("Hello after 3 seconds");
// }, 3000);

// setTimeout(function () {
//   console.log("Hello after 3 seconds");
// }, 3000);

// console.log("waiting for the message");

//---Canceling a `setTimeout`---

// const timeOutId = setTimeout(() => {
//   console.log("This will  not displayed");
// }, 3000);

// console.log("Timeout scheduled");
// clearTimeout(timeOutId);
// console.log("Timeout canceled");

//---setInterval---

// setInterval(() => {
//   console.log("Am calling at every 2 seconds");
// }, 2000);

let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log(counter);

  if (counter >= 5) {
    clearInterval(intervalId);
  }
}, 2000);
