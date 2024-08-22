// CallBack Hell = Situation in JS where callbacks
//                 are rested within other callbacks to the
//                 degree where the code is difficult to read
//                 Old pattern to handle asynchronous functions.
//                 Use Promises + Async/Await to avoid Callback Hell.

// Sau 2 giây, dòng "Task 1 complete" sẽ được in ra console, sau đó hàm callback() được gọi để chuyển sang thực hiện task2.
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 3000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 complete");
    callback();
  }, 1500);
}

function task5(callback) {
  setTimeout(() => {
    console.log("Task 5 complete");
    callback();
  }, 2000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          console.log("All tasks complete");
        });
      });
    });
  });
});
