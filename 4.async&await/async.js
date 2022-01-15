//async & await
// clear style of using promise

// 1. promise
function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve("knog");
  });
}

const user = fetchUser();
user.then(console.log);

// 2. async
async function fetchUser2() {
  return "knog";
}

const user2 = fetchUser2();
user2.then(console.log);

//3. await
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done :)");
    }, ms);
  });
}

async function getApple() {
  const res = await delay(1000);
  return "🍎";
}

async function getBanana() {
  const res = await delay(1000);
  return "🍌";
}

function getAllFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => {
      return `${apple}+${banana}`;
    });
  });
}

// 4. more await
async function getAllFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple}+${banana}`;
}

// 5. 연관성없는 promise 두개를 동시에 받는방법
async function getAllFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple}+${banana}`;
}

// 6. 연관성없는 promise 두개를 동시에 받는방법 (Promise APIs 사용하기)
async function getAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((allFruits) => {
    return allFruits.join("+");
  });
}

getAllFruits().then((res) => console.log(res));
