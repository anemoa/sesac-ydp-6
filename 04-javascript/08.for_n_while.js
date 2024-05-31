// 반복문

// for문
for(let i = 0; i < 10; i++){
    // i가 0~9 총 10번 반복
    // console.log('안녕', i);
}


// 1 ~ 5 출력
for(let i = 1; i < 6; i++){
    console.log(i);
}

console.log('----------------------');

// 5 ~ 1 출력
for(let i = 5; i >= 1; i--){
    console.log(i)
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
    console.log('안녕', idx);
    idx += 1; // idx = idx + 1 과 같은 말
}

console.log('----------------------');

let idx2 = 0;
while(true){
    // 의도적으로 무한루프
    // 무한루프에 빠졌다면 브라우저 닫고 다시 실행하기
    console.log('안녕', idx2);
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


for(let i = 2; i < 10; i++){
    console.log(`${i}단 ---`);
    for (a = 1; a < 10; a++){
        console.log(i, "x" , a, "=", i * a );
    }
}