// setTimeout() = function in Javascript that allows you to schedule
//                the execution of a function after an amount of time (miliseconds)
//                Times are approximate (varies based on the worked of the JS runtime env.)

//                setTimeout(callback, delay);

// setTimeout(() => {
//   console.log("hello");
// }, 3000);

const timeoutId = setTimeout(() => {
  console.log("Hi");
}, 3000);

// clearTimeout(); // cancels a timeout
