// 구조분해 할당
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ['a', 'b', 'c'];

// const [one, two, abc, four, five] = arr1;
// console.log(one, two, abc, four, five);

// const [x, y, z, alpha] = arr2;
// console.log(x, y, z, alpha);

let num1 = 1;
let num2 = 2;
// 변수 값의 교환, 2개의 변수 값을 교환할 때 제3의 변수를 사용했지만 지금은 그럴 필요가 없다

// console.log('Before: ', num1, num2);
// [num2, num1] = [num1, num2];
// console.log('After: ', num1, num2);


// 기본 값을 지정할 수 있다 ex) f3 = 'orange'
// const lists = ['apple', 'grape'];
// [f1, f2, f3='orange'] = lists;
// console.log(f1, f2, f3);


// 객체, object -> key: value 이루어진것. {} 사용

const obj = {
    title: 'element',
    content: 'function',
    num: 5
};

// 표기법
// console.log(obj.num);
// console.log(obj.content);
// console.log(obj.title);

// console.log(obj['title']);
// console.log(obj['content']);
// console.log(obj['num']);

// 객체 구조 분해, 디폴트값을 줄 수도 있다.

// const {num, title, content, star = 1000} = obj;
// console.log(num, title, content, star);

// const {a1, b1, c1} = obj; // 같은 이름을 사용해야 한다.
// console.log(a1, b1, c1); // 안 그럼 undefined 뜬다.

// undefined: 변수는 할당되었지만(초기화), 값이 할당된건 아니다.

const lectureInfo = {
    name: 'Coding On',
    part: 'web',
    leader: 'Kim',
}

// console.log(lectureInfo);

function getInfo(lecture){
    const {name, part, leader} = lecture;
    const output = `${name}강의는 ${part}개발을 공부한다. 수업의 리더는 ${leader}이다`;
    return output;
}

const result = getInfo(lectureInfo);
console.log(result);