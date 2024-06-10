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


// 여기서부터 계산기

const oper = document.getElementById('operator');
const result = document.getElementById('result');
const value01 = document.getElementById('value1');
const value02 = document.getElementById('value2');

const cal = () => {

    let operValue = oper.value;
    let calcResult = 0;

    if(value01.value.trim() === "" || value02.value.trin === ""){
        alert('값을 입력');
    }else if(operValue != '+' && operValue != '-' && operValue != '/' && operValue != '*'){
        alert('연산자 입력');
    }
    // 입력값이 비었을때 버튼 누르면 경고창 뜨게 만들기

    let value01Num = Number(value01.value);
    let value02Num = Number(value02.value);

    if(operValue == '+'){
        calcResult = value01Num + value02Num;
    }else if(operValue == '-'){
        calcResult = value01Num - value02Num;
    }else if(operValue == '*'){
        calcResult = value01Num * value02Num;
    }else if(operValue == '/'){
        calcResult = value01Num / value02Num;
    }

    result.value = calcResult;

}

// 리셋 버튼

const resetInput = () => {
    value01.value = '';
    value02.value = '';
    oper.value = '';
    result.value = '';
}



// 방명록 실습과제


const writerInput = document.querySelector('#writer');
const contentInput = document.querySelector('#content');

const writeNote = () => {
    // 1. 작성자 input에 입력되는 값을 변수로 만들자
    let writeVal = writerInput.value;

    // 2. 작성내용 input에 입력되는 값을 변수로 만들자
    let contentVal = contentInput.value;

    
    // 3. table 요소 선택하기
    let tableEl = document.querySelector('#table');

    // 4. tr 요소 생성하기
    let trEl = document.createElement('tr');

    // 5. 작성자 셀 만들기
    let tdWrite = document.createElement('td');
    tdWrite.innerText = writeVal;
    
    // 6. 작성내용 셀 만들기
    let tdContent = document.createElement('td');
    tdContent.innerText = contentVal;

    // 7. 작성일 cell 만들기
    let dateCell = document.createElement('td');
    let todayDate = new Date();
    dateCell.innerText = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()} 
    ${todayDate.getHours()}:${todayDate.getMinutes()}`;

    // 8. tr에 위에서 만든 내용들 추가
    trEl.append(tdWrite, tdContent, dateCell);

    // 9. table에 tr 추가
    tableEl.append(trEl);


    // 10. 입력이 되면 input 창 초기화 하기
    writerInput.value = '';
    contentInput.value = '';
}