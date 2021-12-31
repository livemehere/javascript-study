// Promise to async & await

class UserStorage {
  login(id, pw) {
    // 시간이 걸리는 동작 ...
    if ((id == "kong" && pw == "1234") || (id == "ha" && pw == "1234")) {
      return id;
    } else {
      throw error("없는 유저입니다");
    }
  }

  getRole(id) {
    //시간이 걸리는 동작 ...
    if (id == "kong") {
      return { name: "kong", role: "admin" };
    } else {
      throw error("접근권한이 없습니다");
    }
  }
}

const user = new UserStorage();

async function signIn() {
  const id = user.login("kong", "1234");
  const userRole = user.getRole(id);
  console.log(id);
  console.log(userRole);
}
signIn();
