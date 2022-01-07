//TODO: async & await
async function ramen() {
  return "신라면봉지";
}

async function cook() {
  return "맛있는 라면";
}

async function cooking() {
  const first = await ramen();
  const meal = await cook();

  return `${first} + ${meal}`;
}

// async function cooking() {
//   return ramen().then((first) => {
//     return cook().then((second) => {
//       return `${first}+${second}`;
//     });
//   });
// }

cooking().then(console.log);
console.log("손님등장");
