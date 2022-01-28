# 객체

## index.html

```html
<!DOCTYPE html>
<html lang="kr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>객체</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #876445;
        overflow: hidden;
      }
      button {
        padding: 1rem;
        margin: 1rem;
      }
    </style>
  </head>
  <body>
    <button id="create">만들기</button>
    <script src="./index.js"></script>
  </body>
</html>
```

## class 버전

```js
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
```

## 그냥 한버전

```js
const btn = document.querySelector("#create");

btn.addEventListener("click", function () {
  // 원 생성
  let div = document.createElement("div");
  let radius = 25;
  div.style.width = radius * 2 + "px";
  div.style.height = radius * 2 + "px";
  div.style.backgroundColor = "#F4DFBA";
  div.style.borderRadius = "50%";
  div.style.position = "absolute";

  // 좌표 정하기
  let x = Math.random() * innerWidth - radius;
  let y = Math.random() * innerHeight - radius;
  div.style.left = x + "px";
  div.style.top = y + "px";

  // 이동 방향 정하기
  let dx = Math.random() * 2 - 1;
  let dy = Math.random() * 2 - 1;

  // 이동 하기
  function update() {
    x += dx;
    y += dy;
    div.style.top = x + "px";
    div.style.left = y + "px";
    requestAnimationFrame(update);
  }
  update();

  // body에 붙이기
  document.body.appendChild(div);
});
```
