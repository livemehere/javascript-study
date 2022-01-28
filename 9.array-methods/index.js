// filter (새로운 배열 반환) (원래 데이터를 건들지 않음)

let items = [
  { name: "tv", price: 3000 },
  { name: "airconditional", price: 4000 },
  { name: "printer", price: 5000 },
  { name: "cup", price: 2000 },
  { name: "pants", price: 1000 },
  { name: "pan", price: 1500 },
];

// TODO: filter

console.log(items);
items = items.filter((item) => item.price >= 4000);
console.log(items);

// TODO: map (callback 적용 된 새로운 배열 반환)

// FIXME: case 1 (good)

const items2 = [1, 2, 3, 4, 5];
const items3 = items2.map((item) => item * 2);
console.log(items2);
console.log(items3);

// FIXME: case 2 (bad)

const items4 = items.map((item) => (item.price += 333));
console.log(items);
console.log(items4);

// TODO: find, findIndex

const foundItem = items.find((item) => item.price > 500); // return 순서대로 돌면서 가장 처음 조건을 만족한 값 1개
const foundIdex = items.findIndex((item) => item.price == 2000); // 있으면 return index, 없으면 return -1;
console.log(foundItem);
console.log(foundIdex);

// TODO: forEach

items.forEach((item) => {
  console.log(item);
});

// TODO: some (조건을 만족하는것이 하나라도 있다면 true, 하나도 없다면 false)

const hasExpensiveItem = items.some((item) => item.price > 3000);
console.log(hasExpensiveItem);

// TODO: every (모두가 조건을 만족하면 true, 하나라도 만족하지 않는다면 false)

const isAllCheap = items.every((item) => item.price < 5000); //false
console.log(isAllCheap);

// TODO: reduce (배열의 각 값들의 누적값을 반환함) reduce(callback,초기값 =default 첫번째 인덱스) ** 만약 빈 배열이라면 첫번째인덱스가 없기때문에 초기값을주지않으면 에러남

const num = [1, 2, 3, 4, 5];
// const num = ["1", "2", "3", "4", "5", "6", "7"];
const sum = num.reduce((total, num) => {
  return total + num;
}, 100);
console.log(sum);

// TODO: includes (단순한 배열에서 값있는지없는지 boolean)

const num2 = [1, 2, 3, 4, 5];
const result = num.includes(7); //false
console.log(result);
