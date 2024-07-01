const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
dotenv.config({
    path: path.resolve(__dirname, '.env'),
}); 

const app = express();
const port = process.env.PORT; 

app.set('view engine', 'ejs');
app.set('views', './views');

// cookie-parser 미들웨어
app.use(cookieParser(process.env.COOKIE_SECRET));
const cookieConfig = {
    httpOnly: true, // 웹 서버를 통해서만 쿠키에 접근 가능
    // front js에서 document.cookie 로 접근하는걸 차단
    maxAge: 7 * 1000, // 쿠키 수명 (단위: ms)
    // expires: 만료 날짜/시간 지정 가능
    signed: true, // 쿠키의 암호화 (req.signedCookies)
    // secure: 웹 브라우저와 웹 서버가 https 통신하는 경우만 쿠키를 서버에 전송
}

app.get('/', (req, res) => {
    res.render('cookie');
})

app.get('/setCookie', (req, res) => {
    // * 서버가 클라이언트한테 응답 "함"
    // res.send()
    // res.json()
    // res.end()

    // * 서버가 클라이언트한테 응답하는 게 아니라 "쿠키를 설정" (응답하기 전인 상태)
    // res.cookie()

    // res.cookie(키, 값, 옵션)
    // : 쿠키를 설정하는 메소드 =/= 서버가 클라이언트 응답
    res.cookie('myKeyTest', 'myValueTest', cookieConfig);

    // 클라이언트한테 응답~
    res.send('Set signed cookie');
})

app.get('/getCookie', (req, res) => {
    // req.signedCookies
    // : cookie-parser가 만든 요청의 서명된 쿠키 해석
    res.send(req.signedCookies);
})

app.get('/clearCookie', (req, res) => {
    // res.clearCookie(키, 값, 옵션)
    // : 쿠키를 삭제하는 메소드 =/= 서버가 클라이언트 응답
    // : 쿠키를 생성할 때의 키, 값, 옵션이 일치해야 함(단, maxAge/expires 키는 일치할 필요 없음)
    res.clearCookie('myKeyTest', 'myValueTest', cookieConfig);

    res.send('delete signed cookie!');
})

app.listen(port, () => {
    console.log(`Sever is running! The port number is ${port} ...`);
    console.log(process.env.COOKIE_SECRET);
});

// cookie-parser
// : 요청에 실려온 쿠키를 해석해서 req.cookies 객체로 만듦

// cookieParser(secretKey, optionObj)
// - secretKey: 비밀키
//      - 비밀키의 값을 통해 해당 쿠키가 이 서버가 만든 쿠키임을 검증
//      - 쿠키는 클라이언트에 저장되는 정보이다보니 위조가 쉬워서 비밀키를 통해 만든 서명을 쿠키 뒤에 붙임
// - obtionObj: 쿠키에 사용되는 옵션

// ver1. 평문 쿠키
// : myValueTest
// ver2. 서명된 쿠키
// s%3AmyValueTest.hJ%2B5zrjA0i%2BCMvWo8bV5ldOFBkahM3DUIlM99CDAM88
// 서명된 쿠키?
// s%3A쿠키값.임의의문자열
// s%3A? 접두사 (해당 쿠키값 자체가 서명됨을 알려주는 접두사)
// -> 서명된 쿠키/평문 쿠키를 구별
// -> 클라이언트가 임의로 서명된 쿠키를 만들거나 조작할 수 없도록
// -----
// 1. 서버가 "서명된 쿠키"를 받으면, "s%3A"를 보고 서명된 쿠키임을 인식
// 2. 서버의 비밀키(process.env.COOKIE_SECRET)를 사용해 다시 서명하고 받은 서명이랑 비교
// 3. 두 값이 일치하면 쿠키가 변조되지 않았음을 신뢰하고 사용

// 쿠키 vs 세션
// - 비슷한 역할, 동작원리 유사(세션도 어쨌든 쿠키 기반)
// - 쿠키: 서버의 자원을 사용하지 않고
// - 세션: 서버의 자원을 사용

//- 보안: 세션 > 쿠키
//      쿠키는 로컬 지정 -> 변조될 가능성 있음
//      세션은 session-id만 저장하고 나머지는 서버에서 처리 "비교적" 안전

// - 세션 만료기간 설정할 수 있으나 브라우저가 종료되면(=/= 탭을 닫는것) 만료기간과 상관없이 삭제됨
// - 속도: 쿠키 > 세션