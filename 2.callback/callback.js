//콜백지옥

class UserStorage {
  login(id, pw, onSuccess, onFail) {
    if ((id == "kong" && pw == "1234") || (id == "ha" && pw == "1234")) {
      onSuccess(id);
    } else {
      onFail(new Error("없는 유저입니다"));
    }
  }

  getRole(id, onSuccess, onFail) {
    if (id == "kong") {
      onSuccess({ name: "kong", role: "admin" });
    } else {
      onFail(new Error("접근 권한이 없습니다"));
    }
  }
}

const user = new UserStorage();
user.login(
  "kong",
  "1234",
  (id) => {
    console.log("로그인 성공!");
    user.getRole(
      id,
      (userRole) => {
        console.log(userRole.name, userRole.role);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
