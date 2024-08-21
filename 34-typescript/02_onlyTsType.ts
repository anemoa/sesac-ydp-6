// only Ts type(ts type)

// 튜플(Tuple)
// - 튜플은 고정된 개수의 요소를 가짐
// - 각 요소의 타입이 미리 지정된 배열
// - 각 요소의 순서가 중요하며 순서에 따라 타입이 다를 수 있음.

// 튜플 타입 선언
let drink: [string, string];

// 튜플의 값을 할당
drink = ['coke',  '33'];
console.log(drink);

// 튜플 타입 선언과 할당을 동시에 하는 법
let drink2: [string, string] = ['dd', 'hi'];
console.log(drink2);

// 튜플의 데이터를 변경할 때에도, 배열의 데이터를 변경했던 것처럼 인덱스로 접근
// 또한, 배열의 메소드도 사용 가능

// 인덱스로 접근해 값 변경 가능

drink2[0] = 'zero';
drink2[1] = '11223';
console.log(drink2);


drink2.push('ggdd');
console.log(drink2);

/**
 *  튜플의 숨겨진 한계
 *  길이와 타입이 정해진 것처럼 보이지만, push 메소드가 동작하므로 그 정의가 깨짐
 *  튜플이라 고정된 개수가 변하면 안되는데 변해버림
 * 
 *  why?
 *  - 이는 ts의 타입 시스템이 배열 메소드와 관련된 동작을 '완전히' 제한하지 않기 때문이다.
 * 
 *  이처럼 타입 시스템의 의도와 어긋나는 동작을 방지하고자 한다면,
 *  as const를 사용하거나, readOnly 키워드를 사용하여 튜플을 불변으로 만들 수 있다.
 */


// readOnly
// - 요소의 타입 순서와 길이를 '완벽히' 고정

let drink3: readonly [string, number] = ['coke', 2222];
// drink3.push('hee');
console.log('drink3 >>>', drink3);

// type 별칭
// - type 별칭을 이용해서 type 선언 가능
type campionInfo = [number, string, number];

// 엄격하고 명확히 데이터를 관리해야 하는 작업일 겨우 사용하면 이점!
let most1: campionInfo = [1, 'Yumi', 50000];
let most2: campionInfo = [2, 'Timo', 120000];

// =============================================================
// 