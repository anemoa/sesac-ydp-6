const express = require('express');
const jwt = require('jsonwebtoken');
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

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    try{
        const {id, pw} = req.body; // 유저가 입력한 정보
        const {id: uId, pw: uPw} = userInfo; // 유저의 DB 정보

        if(id === uId && pw === uPw){
            // 토큰 생성
            const token = jwt.sign({id}, SECRET);
            res.json({result: true, token});
        }else{
            // 로그인 실패 등답
            res.json({
                result: false,
                message: '로그인 정보가 틀림',    
            })
            
        }

    } catch (error){
        console.log(error);
    }
});

app.post('/token', (req, res) => {
    // 서버는 클라이언트 요청의 Authorization 헤더를 확인.
    if(req.headers.authorization){
        console.log('인증 헤더 >>', req.headers.authorization);

        // ['Bearer', 'token_string] 형태
        const token = req.headers.authorization.split(' ');
        console.log('token >>', token);

        try{
            // 토큰 검증
            const result = jwt.verify(token[1], SECRET);
            console.log('result >>', result);

            // 유효한 토큰
            if(result.id === userInfo.id){
                res.json({result: true, name: userInfo.name});
            }
        } catch(error){
            // 토큰 검증 실패 or 유효하지 않은 토큰일 때
            console.log(error);
            res.json({
                result: false,
                message: '인증된 회원 아님',
            });
        }
    } else{
        res.redirect('/login');
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

