// callback 함수는 어떻게 동작하는건가요? 형태는 어떠한가요?
let str = "kong";
// kong을 ko로 바꾸고싶다면

function delG(callback) {
  console.log("g를 지운다");
  callback();
}

// 흔히 보이는 callback 모습
delG(() => {
  console.log("n을지운다");
});
