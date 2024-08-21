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

//===========================================================
// * Enum
// - 사용하는 이유
// 1. 분야별로 종류를 정의하여 명확하게 사용
// 2. 하드코딩의 실수를 줄이기 위하여

// - 숫자 값 지정 가능 (기본)
// enum Auth {
//     admin = 0,
//     user = 1,
//     guest = 2,
// }

// #1. enum은 기본으로 0부터 1씩 증가하는 값을 갖는다

enum Auth{
    admin, user, guest
}

console.log(Auth.admin); // 0 
console.log(Auth.user); // 1
console.log(Auth.guest); // 2

//  #2. 정의되지 않은 값은 이전 값에 1씩 더해짐
enum menu {
    pasta = 4000,
    pizza = 6000,
    chicken,
}

console.log(menu.pasta);
console.log(menu.pizza);
console.log(menu.chicken);

// #3. 문자열 지정 가능
enum cafe {
    americano = '아메리',
    latte = '라떼이즈홀스'
}

console.log(cafe.americano);
console.log(cafe.latte);

// #3-2 문자열 & 숫자 혼합 지정 가능
enum cake{
    choco, // 0
    vanilla = 200, // 200
    mango, // 201
    kiwi = 'kiwi' // 'kiwi'
}

console.log(cake.choco);
console.log(cake.vanilla);
console.log(cake.mango);
console.log(cake.kiwi);

//===========================================================
// * any
// 1. 명시적 타입 지정
let val: any;
val = true;
val = 'dog';
console.log(val);

// 2. 암시적 타입 지정
let val2;
val2 = false;
val2 = 'cat';
console.log(val2);

//===========================================================
// Interface

// #1. 객체 타입 정의
// - interface 키워드 사용
interface Crew {
    name: string;
    readonly age: number;
    exp: boolean;
}

const crew1: Crew = {
    name: 'yves',
    age: 12,
    exp: false,
};
// - "Crew" 인터페이스는 3가지 속성을 요구
// - crew1 객체는 이 구조를 따라야 함
// - 객체 안에 순서는 상관 없음
console.log(crew1);

// #2. 선택적 속성
// - 모든 속성이 필수는 아님!
// - '?' 붙이기
interface Crew2 {
    name: string;
    age?: number; // age는 선택적 속성
}

const crew2: Crew2 ={
    name: 'yves2',
}
console.log(crew2);
// crew2 객체는 age 속성이 없어도 유효함.

// 3. readOnly 읽기 전용 속성
// - 객체가 초기화 된 후에는 변경할 수 없음.
const crew3: Crew = {
    name: 'yves3',
    age: 22,
    exp: true,
};
crew3.name = 'son';
// crew3.age = 33;
console.log(crew3);

// #4. 상속도 가능!
enum Score {
    Aplus = 'A+',
    A = 'A',
    B = 'B',
    C = 'C',
}


// #5. 인터페이스 확장
// - 기존 인터페이스의 모든 속성 포함 및 속성 추가
interface Team extends Crew {
    // {name, age, exp}
    position: string;
    readonly personnel?: number // 없어도 되는 값 처리
    [grade: number]: Score;

    // ** 인덱스 시그니처
    // - 객체가 어떤 키로든 접근할 수 있도록 허용하고, "키"와 "그에 대응하는 값"의 "타입"을 정의할 수 있는 방법을 제공
    // [grade: number] - 숫자인 키(key)
    // [grade: number]: string =- 숫자 키를 가진 객체가 문자열 값을 가질 것 임을 명시.
}

const first: Team = {
    name: 'uv',
    age: 22,
    exp: true,
    position: 'frontend',
    1: Score.Aplus, // 1: A+
};
console.log(first);

// 값 변경 (점 접근법, 대괄호 법)
first.position = 'backend';
first['exp'] = false;
console.log(first);

// #6. 교차 타입: 두 개 이상의 interface를 합치는 것
interface Toy {
    name: string;
    start(): void;
}

interface Car {
    name: string; // 공통된 속성을 가지고 있어도 상관 없음
    color: string;
    price: number;
}

interface ToyCar extends Toy, Car {} // 인터페이스 확장을 사용한 교차 타입
const toyCar: ToyCar = {
    name: 'tayo',
    start(){
        console.log('출발한다규'); // 함수도 가능!        
    },
    color: 'green',
    price: 5000
};

console.log('toyCar >>', toyCar);

//===========================================================
// * [번외] type 사용
type Gender = 'F' | 'M';
type Person = {
    name: string;
    age?: number;
    like?: string[];
    gender: Gender; // 위에서 정의한 'Gender' 타입을 가짐 > 'F', 'M' 둘 중 하나여야 함
}

const IU: Person = {
    name: 'IU',
    age: 33,
    gender: 'F', // Gender 타입에 선언된 값만 넣을 수 있음
};

console.log(IU);




// 1. 아래와 같이 오브젝트, 불리언(boolean) 데이터 타입 순으로 설정하는 튜플 만들어보기
let olimpic_newgame: readonly [object, boolean] = [
    {
      name: "쇼트트랙",
      type: "혼성 계주",
    },
    true,
  ];
  
//2. olimpic_newgame[1]=false; 를 했을 때 변경되지 않도록 수정할 수 없는 데이터 만들기
// olimpic_newgame[1]=false;


// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기

interface Game{
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
  }
  
  let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
  }