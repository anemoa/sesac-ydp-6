// 반복문

// for문
for(let i = 0; i < 10; i++){
    // i가 0~9 총 10번 반복
    // console.log('안녕', i);
}


// 1 ~ 5 출력
for(let i = 1; i < 6; i++){
    // console.log(i);
}

console.log('----------------------');

// 5 ~ 1 출력
for(let i = 5; i >= 1; i--){
    // console.log(i)
}

console.log('----------------------');

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지 대한 n
let sum = 0; // 합을 저장할 변수

for(let i = 1; i <= n; i++){
    // sum 변수에 값을 재할당 (이전 sum 변수값 + 현재 반복변수 i 값)
    sum = sum + i; // 0 + 1;
    // console.log(i, sum);
}
// console.log(sum);

console.log('----------------------');

// hint 1) 1 ~ 20 까지 숫자를 반복
// hint 2) 현재 반복 숫자가 짝수라면 (변수)에 더하기
// hint 3) for문 안에 if 문

// 1 ~ 20 중에서 짝수일 때 합을 구하자

let num = 20;
let sum2 = 0;

for(i = 1; i <= num; i++){
    if(i % 2 === 0){
        sum2 += i // sum2 = sum2 + i와 같은 말.
    }
}
// console.log(sum2);

console.log('----------------------');

// for ~ if 중첩

// while 문
let idx = 0;
while(idx < 10){
    // console.log('안녕', idx);
    idx += 1; // idx = idx + 1 과 같은 말
}

console.log('----------------------');

let idx2 = 0;
while(true){
    // 의도적으로 무한루프
    // 무한루프에 빠졌다면 브라우저 닫고 다시 실행하기
    // console.log('안녕', idx2);
    idx2 += 1; // idx2 = idx2 + 1 과 같은 말
    
    // 무한루프를 빠져나오는 순간
    if (idx2 === 10){
        break;
    }
}

console.log('-----------while 문 무한 루프-----------');

// 구구단 while 버전

// let z = 2, j = 1;

// while(z < 10){
//     while(j < 10){
//         console.log(z, "x", j, "=", z * j);
//         j++;
//     }
//     z++;
//     j = 1;
// }


// 실습


// for(let i = 2; i < 10; i++){
//     console.log(`${i}단 ---`);
//     for (a = 1; a < 10; a++){
//         console.log(i, "x" , a, "=", i * a );
//     }
// }


/////////////////////////////////////
// do ~ while 문

/**
 * JavaScript에서 사용되는 반복문 중 하나로,
 * 조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행한 후에 조건을 검사한다.
 * 즉) 항상 코드 블록을 한 번 실행한 다음, 조건이 참인 동안 반복을 계속
 */

// 구문
// do{
    // 실행할 코드 내용
// }while(조건);

// ex1)
// let g = 1;
// do{
//     console.log(g);
//     g++;
// }while(g <= 5);

// ex2)
// do{
//     number = parseInt(prompt('숫자 입력 하시오(10보다 큰 숫자:)', 10));
// }while(number <= 10);
// console.log('입력한 숫자: ', number);

/////////////////////////////////////
// break & continue
// - 반복문에서 사용되는 제어문

// # break
// - 반복문을 중단하고 빠져나옴

// # continue
// - 현재 반복을 중지하고 다음 반복으로 넘김

// ex) break
for (let i = 1; 1 <= 10; i++){
    if (i === 5){
        break; // i가 5일 때 반복문 종료
    }
    console.log(i);
}
// 출력 결과 1, 2, 3, 4

console.log('----------------------');

// ex) continue
for (let i = 1; i <= 5; i++){
    if (i === 3){
        continue;
    }
    //console.log(i);
}
// 출력 결과 1, 2, 4, 5


// 실습문제 1. 10,000까지의 숫자 중 13의 배수면서 홀수인 숫자 구하기

let test1 = 10000; 

for(i = 0; i <= test1; i++){
    if(i % 13 === 0){
        if(i % 2 === 0){
            continue;
        }
        console.log(i);
    }
}

// 실습문제 3. 0 ~ 100 숫자중 2 또는 5의 배수 총 합 구하기

let totalSum = 0;

for(i = 0; i <= 100; i++){
    if(i % 2 === 0 || i % 5 === 0){
        totalSum += i;
    }
}

console.log(`정답은 ${totalSum} 이다.`);


let testNum = prompt('숫자 입력');
testNum = Number(testNum);

function promNum(){
    if(testNum % 13 === 0 && testNum % 2 !== 0){
        console.log(testNum);
    }else{
        console.log('아닙니다');
    }
}

promNum();