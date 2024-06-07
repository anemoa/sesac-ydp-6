// 함수 선언
const add = (a, b) => a + b; // {return a + b} 를 생략하고 a + b만 적음

// add함수를 다른 js 파일에서 불러와 사용할 수 있도록 내보내기
module.exports = add;