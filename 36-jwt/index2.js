const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session'); // 세션 미들웨어
const app = express();
const PORT = 8000;
const SECRET = 'ZTNevfIPUwHWO7w9VNQI1FIOZe3nhVlX'; // 영어 32자 / 암호화 SHA-256 // 영어 한 글자 = 8bit

const userInfo = {
    id: 'test',
    pw: '1111',
    name: 'yves',
}

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 세션 설정
app.use(
    session({
        secret: SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 5 * 1000,
        }
    })
)


// 메인 페이지 (세션 기반 검증)
app.get('/', (req, res) => {
    if(req.session.user){
        const token = req.session.user.token;
        console.log('token >>>', token);
        

        try{
            // JWT 토큰 검증
            const result = jwt.verify(token, SECRET);
            console.log('result >>', result);

            if(result.id === userInfo.id){
                // 검증 성공시 사용자 정보 출력
                res.render('index2', {name: req.session.user.name});
            }else{
                // 검증 실패
                res.redirect('/login');
            }
        }catch(error){
            console.log('검증된 회원 아님', error);
        }
    }else{
        res.redirect('/login');
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

// 로그인 처리
app.post('/login', (req, res) => {
    try{
        const {id, pw} = req.body; // 유저가 입력한 정보
        const {id: uId, pw: uPw} = userInfo; // 유저의 디비 정보

        if(id === uId && pw === uPw){
            // 토큰 생성
            const token = jwt.sign({id}, SECRET);
            console.log('token >>>', token);

            // 세션에 사용자 정보 저장
            req.session.user = {id, name: userInfo.name, token};
            res.json({result: true, token});
        }else{
            res.json({
                result: false,
                message: '땡땡땡!',
            })
        }
    } catch(error){
        console.log(error);
    }
});


app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

