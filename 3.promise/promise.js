// TODO: Promise

// const promise = new Promise((resolve, reject) => {
//   console.log("프로미스실행");
//   resolve("성공");
// });

// function getEgg() {
//   return new Promise((resolve, reject) => {
//     console.log("프로미스실행");
//     resolve("계란");
//   });
// }

// function cook() {
//   return new Promise((resolve, reject) => {
//     resolve("프라이");
//   });
// }

// getEgg().then((data) => {
//   console.log(data);
//   cook().then(console.log);
// });

//TODO: async & await
// async function ramen() {
//   return "신라면봉지";
// }

// async function cook() {
//   return "맛있는 라면";
// }

// async function cooking() {
//   const first = await ramen();
//   const meal = await cook();

//   return `${first} + ${meal}`;
// }
// cooking().then(console.log);
// console.log("손님등장");

//TODO: callback to Promise

class UserStorage {
  login(id, pw) {
    return new Promise((resolve, reject) => {
      if ((id == "kong" && pw == "1234") || (id == "ha" && pw == "1234")) {
        resolve(id);
      } else {
        reject(new Error("없는 유저입니다"));
      }
    });
  }

  getRole(id) {
    return new Promise((resolve, reject) => {
      if (id == "kong") {
        resolve({ name: "kong", role: "admin" });
      } else {
        reject(new Error("접근 권한이 없습니다"));
      }
    });
  }
}

const user = new UserStorage();
user.login("kong", "1234").then((id) => {
  user.getRole(id).then((userRole) => {
    console.log(id);
    console.log(userRole);
  });
});
