// spread 연산자 ...
// const a = [1, 2, 3];
// const b = [4, 5];

// const spread = [...a, ...b];
// console.log(spread);

// const c = [...'hello'];
// console.log(c);
// 기존의 방식으로 하려면
// const d = 'hello'.split('');
// console.log(d);

// spread 연산자를 object(객체)에 사용
// const chip = {
//     base: 'chip',
//     company: 'lotte'
// };

// const potato = {
//     ...chip,
//     flavor: 'potato'
// };
// console.log(chip);
// console.log(potato);

// --------------------------------
// rest 파라미터
// 함수에서 사용시

// const values = [10, 20, 30, 40, 50, 60];
// function get(a,b, c, ...rest){ // 순서대로 읽고 나머지는 rest에 넣어라
//     console.log(a, b, c);
//     console.log(rest);
// };
// get(...values);

// --------------------------------

const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000
  };

// const {flavor, ...abc} = icecream;
// console.log(flavor);
// console.log(abc);

// --------------------------------

const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;
console.log(one1, two1);
console.log(rest2);