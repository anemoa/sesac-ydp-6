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
    maxAge: 60 * 1000, // 쿠키 수명 (단위: ms)
    // expires: 만료 날짜/시간 지정 가능
    signed: true, // 쿠키의 암호화 (req.signedCookies)
    // secure: 웹 브라우저와 웹 서버가 https 통신하는 경우만 쿠키를 서버에 전송
}
app.use('/static',express.static(__dirname + '/static'));
app.get('/', (req, res) => {
    res.render('popup');
});

app.listen(port, () => {
    console.log(`Sever is running! The port number is ${port} ...`);
    console.log(process.env.COOKIE_SECRET);
});