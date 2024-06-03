// let num = 1;
// let num2 = num;
// console.log(num, num2); // 1
// console.log(num === num2); // true;
// 
// num = 5; // 1 -> 5
// console.log(num, num2); // 5 1
// console.log(num === num2); // false;
// 
// function changeValue(x){
//     x = 10;
//     console.log('x > ', x); // 10
// }
// 
// changeValue(num);
// console.log("num > ", num); // 5


// let a = 1;
// let b = a;

// console.log(a, b);
// console.log(a === b);

// a = 7;
// console.log(a, b);
// console.log(a === b);

// function value(s){
//     s = 21;
//     console.log('s >', s);
// }

// value(a);
// console.log('a >', a);



// const obj = {a: '가', b: '나'};
// const obj2 = {a: '가', b: '나'};

// console.log(obj, obj2);
// console.log(obj === obj2);

// obj2.c = '다';
// console.log(obj, obj2);
// console.log(obj === obj2);

///////////////////////////////////////////////////////

let now = new Date();
console.log(now);


let abc = new Date(0);
console.log(abc);

let def = new Date(24 * 3600 * 1000);
console.log(def);

let date = new Date('2024-06-01');
console.log('date >', date);

let date2 = new Date('2024', '06', '03');
console.log('date2 >', date2);



console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

// console.log(min);
// console.log(Math.min);

const todayWhat = (0 < now.getDate() < 6) ? '평일' : '주말';
console.log(todayWhat);


console.log( Math.floor(Math.random() * 11) );


// const todoLis = document.querySelectorAll('.todo');
// for(let todoLi of todoLis){
//     todoLi.classList.remove('todo');
//     todoLi.classList.add('done');
// };

// const doneLis = document.querySelectorAll('.done');
// for(let doneLi of doneLis){
//     doneLi.classList.remove('done');
//     doneLi.classList.add('todo');
// }

// const todo01 = document.querySelectorAll('ul li')[0];
// const todo02 = document.querySelectorAll('ul li')[1];

// todo01.classList.remove('todo');
// todo02.classList.remove('todo');

// todo01.classList.add('done');
// todo02.classList.add('done');

// const done01 = document.querySelectorAll('ul li')[2];
// const done02 = document.querySelectorAll('ul li')[3];
// const done03 = document.querySelectorAll('ul li')[4];

// done01.classList.remove('done');
// done02.classList.remove('done');
// done03.classList.remove('done');

// done01.classList.add('todo');
// done02.classList.add('todo');
// done03.classList.add('todo');


// querySelectorAll로 li를 가져올 경우 NodeList(유사배열)로 가져옴
// 근데 NodeList는 forEach() 반복문만 사용이 가능
// 그러니 classList.toggle로 .todo가 있으면 빼고 없으면 추가
// + classList.toggle로 .done이 있으면 빼고 없으면 추가를 반복문으로 돌린다.


const todoList = document.querySelectorAll('ul > li');
todoList.forEach( (el) => {
    el.classList.toggle('todo');
    el.classList.toggle('done');
} )