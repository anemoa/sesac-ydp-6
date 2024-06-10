/**
 * js 엔진 구글 : v8 + c++ = node.js 브라우저 밖에서 js
 * 모듈에는 사용자가 만든 모듈, 시스템모듈, 빌트인 모듈
 * 
 */

// const add = (a, b) => {
//     return a + b;
// }

// export 해서 다른 파일이 불러와서 사용할 수 있게끔 
// 모듈 단위, 불러올때 require() -> common Js는 es6기준 import 사용

// console.log(__dirname);
// console.log(__filename);

// const add = require('./07-1.add');
// console.log(add(2,5));
// console.log('from 07.module.js');

// scope (범위) 모듈은 각각의 범위를 가지고 있다.
// require('./08.batman'); 
// require('./08.superman');

// 모듈의 기초 형태
// ()() -> 함수의 자동실행 형태
(function (){
    const superHero ='Superman';
    console.log(superHero);
})()
// 모듈의 형태
(function(exports, require, module, __filename, __dirname){
    코드 
})()