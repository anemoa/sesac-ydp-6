// # generic
// - 선언 할 때 타입을 지정하기 어려운 케이스가 존재
// - 데이터 타입을 외부에서 지정
// - 생성 시점에 타입을 명시
// --> 재사용성, 유연성 증가
// --> 타입을 변수처럼 사용함!
// <T> 형태로 주로 사용함

// Ex1)
function numArrLen(arr: number[]): number {
    return arr.length;
}

console.log(numArrLen([1, 2, 3])); // 3

// Ex2)
function strArrLen(arr: string[]): number{
    return arr.length;
}
console.log(strArrLen(['1', '2', '3'])); // 3

// - 리턴되는 값이 string, number, boolean, .. 모든 값이 들어올 수 있는 함수라면? 좋겠다

// #1. generic 기본 사용법
// <T>를 사용해서 매개변수를 선언하는 공간을 하나 더 만듦
// --> type만 올 수 있음

function arrLen<T>(arr: T[]){
    return arr.length;
}

// T[]: T에 대응되는 자료형의 배열
console.log(arrLen<string>(['22', '33', '44', '55']));
console.log(arrLen<number>([22, 33, 44, 5]));
console.log(arrLen<string | number>(['22', '삼삼', 66, 77]));

// ============================================================

function printSome<T>(x: T, y: T): void{
    console.log(x, y);
}

printSome<string>('hi', 'hello');
printSome<number>(22, 33);
printSome<boolean[]>([true, false], [true, true]);

// #2. 두 개의 서로 다른 타입 매개변수 generic
// * 관례일 뿐
// T: type
// U: usually 
function printSome2<T, U> (x: T, y: U): void{
    console.log(x, y);
}

printSome2<string, number>('2', 3);

// ============================================================
// * inetrface & generic
// Ex1)
// Phone 인터페이스의 옵션이 여러 타입으로 정의될 수 있다면? generic!

interface Phone<T>{
    company: string;
    createdAt: Date;
    option: T;
}

// 사용자 정의
type iphoneOption = {
    color: string;
    storage: number;
}

const iphone50: Phone<iphoneOption> = {
    company: 'apple',
    createdAt: new Date('2024-08-21'),
    option: {
        // generic을 통해 option의 속성 타입을 유연하게 지정
        color: 'white',
        storage: 256,
    }
};

console.log(iphone50);

// Ex2)
type galaxyOption = {
    color: string;
    isBuz: boolean;
}

const galaxy50: Phone<galaxyOption> = {
    company: 'samsung',
    createdAt: new Date('2024-09-21'),
    option: {
        color: 'green',
        isBuz: true,
    }
};

console.log(galaxy50);


// 제네릭 이용해서 함수 arrElement 선언하기

// 배열과 인덱스 번호를 매개변수로 받고, Arr[index]에 대한 요소를 리턴하는 함수 만들기

// 함수의 리턴 타입까지 작성하기

// 실행 예시) console.log(arrElement<string>(["a"], 0));

function arrElement<T>(arr: T[], idx: number) {
    if(idx >= arr.length){
        return false
    }
    return arr[idx];
}

console.log(arrElement<string>(["a"], 0));

// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!

console.log(arrElement<string>(['a'], 1)); // false