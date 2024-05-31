// 배열에서 반복문 사용하기
// - 기본 for 문
// - for of 문
// - forEach() 메소드

// 배열) for문 사용 이유
const fruits = ['사과', '딸기', '자몽', '레몬', '블루베리'];
console.log(fruits.length); // 5

for(let f = 0; f < fruits.length; f++){
    console.log(fruits[f]);
}

console.log('---------------------------');

// Ex)
const arr = [1, 2, 6, 7, 8];
const alphas = ['a', 'b', 'c', 'd'];


// #1. 기본 for문
for(let a = 0; a < arr.length; a++){
    console.log(arr[a]);
}
console.log('---------------------------');

// #2. for ... of 반복문
// 반복은 배열의 요소를 직접 참조하므로 인덱스를 사용할 필요가 없다.
// 순서가 있는 구조 반복에 적합하다.
// 배열 'alpha'의 각 요소를 반복하면서 al 변수에 순서대로 할당하고, 각각 요소에 대해 반복문 블록 실행

for(let al of alphas ){
    console.log('al >', al);
}
console.log('---------------------------');

// #3. forEach() 메소드
// 배열의 각 요소에 대해 지정된 함수를 실행
// 일반적으로 배열을 순회하면서 각 요소에 대해 동일한 작업을 수행할 때 사용
// 각 요소에 대해 함수가 호출 될 때마다, 해당 요소가 함수의 인자로 전달된다.

alphas.forEach(function(al){
    // al: currentValue를 의미, 반복하고 있는 현재 요소
    console.log(al);
})


alphas.forEach(function(al, idx){
    // al: currentValue를 의미, 반복하고 있는 현재 요소
    // idx: currentValue의 인덱스(위치)
    console.log(al, idx);
})

alphas.forEach(function(al, idx, arr){
    // al: currentValue를 의미, 반복하고 있는 현재 요소
    // idx: currentValue의 인덱스(위치)
    // arr: forEach를 호출한 배열
    console.log(al, idx, arr);
})
console.log('---------------------------');

// map, filter, find 메소드
// - 조건에 따라 요소를 변경하거나 선택

// #1. map()
// - 배열의 각 요소에 대한 지정된 함수를 호출하고 그 결과로 새로운 배열을 생성

const numbers = [1, 2, 3, 4,5];
const numbers2 = numbers.map(function(num){
    return num * 2;
})
console.log(numbers2); // [2, 4, 6, 8, 10]

// #2. filter()
// - 배열의 각 요소에 대해 지정된 함수를 호출하고, 
// 그 결과가 'true'인 요소들로 이루어진 새로운 배열 생성

const pracNum = numbers.filter(function(num){
    return num % 2 === 0;
})
console.log([pracNum]); // [2, 4]

// #3. find()
// - 조건을 만족하는 첫 번째 요소 찾기
// - 조건에 만족 > 해당 요소 반환
// - 조건에 불만족 > undefined 반환

const pracNum2 = numbers.find(function(num){
    return num % 2 === 0;
})

console.log(pracNum2); // 2 출력

// + 옵션
// for in 반복문
// 객체의 key를 반복 할 수 있는 구문

const dog = {
    name: '태풍',
    gender: 'male',
    info: 'cute'
    // (key, value)
}

for(let key in dog){
    console.log(key, dog[key]); // 객체의 각 속성(key, value) 에 대해 실행할 코드
    // key: key
    // value: dog[key]
}

// -- 참고)
// 변수 = key = 각 속성의 키를 저장하는 변수
// 객체 = dog = 속성을 반복할 객체