// Async/Await = Async = makes a function return a promise
//               Await = makes a an async func wait for a promise to resolve

//               Allow you write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in a event queue

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("You walk the dog");
      } else {
        reject("You did not walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("You clean the kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 2000);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakeOut = true;
      if (trashTakeOut) {
        resolve("You take out the trash");
      } else {
        reject("You didn't take out the trash");
      }
    }, 500);
  });
}

// sử dụng await để đợi một Promise hoàn thành trước khi tiếp tục thực hiện các bước tiếp theo.
// await walkDog() sẽ đợi walkDog hoàn thành trước khi gán kết quả cho walkDogResult và in ra console.

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!");
  } catch (err) {
    console.error(err);
  }
}

doChores();
