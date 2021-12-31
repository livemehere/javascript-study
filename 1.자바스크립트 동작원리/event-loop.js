console.log("시작");

setTimeout(function () {
  console.log("중간");
}, 0);

Promise.resolve().then(function () {
  console.log("프로미스");
});

console.log("끝");
