// 자료형 (data types)
// Q) 데이터(변수)의 종류가 무엇인가?
// - primitive (원시타입, 기본형): string, number, boolean, undefined, null... 
// - object (객체 타입, 참조형): Primitive 타입이 아닌 나머지.

// 1. string (문자열)
// - 텍스트 정보, 따옴표 감싸야 함
// - 숫자, 특수문자도 따옴표 안에 포함 되어있다면? -> 문자열이다.

// let text = '하이루';
// let text2 = '방가방가';
// let gender = '남성';

// console.log(text);
// console.log(text2);
// console.log(text + text2);

// 문자 + 변수를 동시에
// console.log(text + " 나는 yves다 내 성별은 " + gender + " 이야 알았니?");
// console.log(text, text2, "유후")

// 템플릿 리터럴 (= 문자를 표현하는 새로운 문법)
// (ES6) 백틱(`)과 달러($), 중괄호({}) 조합으로 사용한다.
// - 문자열 내에서 변수와 상수를 간결히 표현
// console.log(`${text} 나는 누구누구얌 내 성별은 ${gender}이다`)


// 2. Number (숫자형)
// - 정수, 실수
// -연산이 가능하다 (+ - * /)
// let num = 100;
// let num2 = 0.12;
// 
// console.log(num, num2); // 100 0.12
// console.log(num + 1); // 101
// console.log(num - 1); // 99
// console.log(num * 2); // 200
// console.log(num / 2); // 50
// 
// console.log(num2 + 1); // 1.12

// 3. boolean (불리언)
// - true, false (참, 것짓) 두 가지 값만 가지는 데이터.
// let isWater = true;
// let haveMoney = false;
// 
// console.log(isWater, haveMoney); //true false


// 4. null (빈 값)
// "값이 없음"을 의도적으로 명시
// let temp = null;
// console.log(temp); // null
// temp = "hello";
// console.log(temp); // hello


// 5. undefined
// 값도 없고, 타입도 지정되지 않은 상태
// let x; // 변수 선언만 했을 때 초기 값으로 undefined 할당
// console.log(x); // undefined



// {Quiz}
// Q1. 코드 실행 시 q1 변수는 어떤 값이 될까?
// let q1 = 3;
// console.log( q1 - 2) // 1
// console.log(q1) // 3


// Q2. 코드 실행 시 q2 변수는 어떤 값이 될까?
// let q2 = 10;
// q2 = q2 + 5; // 15
// q2 = q2 - 2; // 13
// console.log(q2);

// Q2. 코드 실행 시 q3 변수는 어떤 값이 될까?
// const q3 = 1;
// q3 = q3 + 1; // error;
// console.log(q3);



// 6. 배열 (Array): data 구조
// 배열의 이름: fruits
// 배열의 요소(아이템): 배열 안에 있는 데이터 하나하나
// 배열의 위치(인덱스): 0부터 시작 - zero based numbering
// 배열의 길이(크기): 요소의 개수와 동일 ex) fruits의 길이는 4

const fruits = ["orange", "lemon", "berry","apple"];
// console.log(fruits);
// console.log(fruits[0]);
// orange
// fruits 배열의 / 위치가 0인 요소 출력


// js에서는 배열 요소의 자료형이 달라도 된다
// why?
// A) js의 동적 타입 특성으로 인한 유연성 - 느슨한 언어
const mixedArray = [1, "yves", true, {name: "sean"}, null] // name: sean -> 객체
console.log(mixedArray);

// Array 안에 Array 들어갈 수 있음 (중첩 가능) => 2차원 배열
const korean = [
    ['가', '나', '다'], 
    ["라", "마", "바"],
    ["사", "아", "자"]
];

console.log(korean);
console.log(korean[0]); // ['가', '나', '다']
console.log(korean[1]); // ['라', '마', '바']
console.log(korean[2]); // ['사', '아', '자']
console.log(korean[0][1]);

// Quiz
// Q1) "가자" 글씨 출력하기
console.log(korean[0][0] + korean[2][2]);

// Q2) "사다" 글씨 출력하기
console.log(`${korean[2][0]}${korean[0][2]}`);

// Q3) 3차원 배열에서 숫자 8 출력
const nums = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
    
];

console.log(nums[1][0][1]);


// 7. 객체 (object) (key: value)
// - 프로그래밍에서 실제 존재하는 개체나 개념을 표현하는 데이터 구조
// - 속성과 메소드로 구성
// - *속성: 키(key)와 값(value)의 쌍으로 이루어져 있다. - 상태나 특징
// - *메소드
// - 함수(function)을 값으로 가진다. - 동작이나 행위

const cat = {
    name: "장화", // "name"은 key, "장화"는 value
    age: 10,
    isCute: true,
    mew: function(){
        return '야옹';
    }
}

//console.log(cat) // object 자체를 출력

// 객체(object)에 접근하는 방법
// #1. 점 표기법 (.)
//console.log(cat.name); // 장화
//console.log(cat.age); // 10
//console.log(cat.mew()); // 야옹


// #2. 대괄호 표기법 ([])
// console.log(cat['name']); // 장화

// #. key가 변수에 저장되어 있을 때 사용법
// const temVal = 'name';
// console.log(cat[temVal]); // = cat['name'] = cat.name 동일하다.


// 8. typeof: 자료형을 확인할 수 있는 키워드
// typeof X 형식
console.log(typeof '문자'); // string
console.log(typeof 11); // number
console.log(typeof 0.222); //number
console.log(typeof true); // boolean
console.log(typeof null); // object
// js의 초기 구현중 하나로서, null 값을 object로 분류하는 것은 공식적으로 인정한 언어의 설계상 오류
console.log(typeof undefined); // undifined
console.log(typeof fruits); // object 배열은 object로 나온다
console.log(typeof cat); // object 객체는 object로 나온다




// 9. 형변환

// let mathScore = prompt('수학점수 입력');
// console.log("mathScroe > ", mathScore, typeof mathScore);
// let engScore = prompt('영어점수 입력');
// console.log("engScroe > ", engScore, typeof engScore);

// let avg = ((Number(mathScore) + Number(engScore)) / 2)

// console.log(`수학, 영어 평균 점수는 ${avg}점 입니다.`);

// #1. String(): 문자로 형변환
let str1 = true;
let str2 = 123;
let str3 = undefined;

console.log(String(str1), typeof String(str1)) // true string
console.log(String(str2), typeof String(str2)) // 123 string
console.log(String(str3), typeof String(str3)) // undefined string
console.log(str1.toString(), typeof str1.toString()); // true string
// 값을 문자열로 변환


// 2. Number(): 숫자로 형변환
let n1 = true;
let n2 = false;
let n3 = 123.9;

console.log(Number(n1), typeof Number(n1));
console.log(Number(n2), typeof Number(n2));
console.log(Number(n3), typeof Number(n3));
console.log(parseInt(n3, 10));
// n3의 값을 10진수의 정수(int)로 바꾸겠다 //123
console.log(parseFloat(n3, 10));
// n3의 값을 실수(float)으로 바꾸겠다. // 123.9

// +) null, undefined를 숫자로 바꾼다면?
console.log(Number(undefined), typeof Number(undefined));
// NaN = Not a Number (숫자가 아님)
// 정의 되지 않은 값이 숫자로 변환 될 수 없기 때문에 NaN으로 표시됨

console.log(Number(null), typeof Number(null)); // 0 'Number'


let mathScore = 77;
let engScore = 88;

mathScore = Number(mathScore);
engScore = Number(engScore);
let avgScore = ((mathScore + engScore) * 0.5);

//let avgScore = ((Number(mathScore) + Number(engScore)) / 2)

console.log(`수학, 영어 평균 점수는 ${avgScore}점 입니다.`);