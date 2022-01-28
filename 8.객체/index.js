const btn = document.querySelector("#create");

class Circle {
  isMove = true;
  constructor(radius) {
    // 원 생성
    this.radius = radius;
    this.div = document.createElement("div");
    this.div.style.width = this.radius * 2 + "px";
    this.div.style.height = this.radius * 2 + "px";
    this.div.style.backgroundColor = "#F4DFBA";
    this.div.style.borderRadius = "50%";
    this.div.style.position = "absolute";

    this.x = Math.random() * innerWidth - radius;
    this.y = Math.random() * innerWidth - radius;

    this.updatePosition(this.x, this.y);

    // 이동 방향 정하기
    this.dx = Math.random() * 2 - 1;
    this.dy = Math.random() * 2 - 1;

    // body에 붙이기
    document.body.appendChild(this.div);

    this.move();

    this.div.addEventListener("click", () => {
      this.isMove = !this.isMove;
    });
  }

  updatePosition(x, y) {
    this.div.style.left = x + "px";
    this.div.style.top = y + "px";
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    // 이동 하기
    const update = () => {
      requestAnimationFrame(update);
      this.div.style.opacity = this.isMove ? "1" : "0.5";
      if (!this.isMove) return;
      this.x += this.dx;
      this.y += this.dy;
      this.updatePosition(this.x + this.dx, this.y + this.dy);
    };
    update();
  }
}

const circleArray = [];

btn.addEventListener("click", function () {
  circleArray.push(new Circle(Math.random() * 50));
});
