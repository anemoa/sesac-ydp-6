 const express = require('express'); // express모듈 가져오기
 const app = express();
 const PORT = 8888;

 app.set('view engine', 'ejs');
 app.set('views', './views');


// post 방식으로 받을때 body 볼 수 있게 도와준다
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('dynamic', {title: '동적 폼을 배워보자'});
})


// ajax
app.get('/ajax', (req, res) => {
    // get 방식은 브라우저에서 url 쿼리까지 직접 입력해도 값 확인 가능
    // http://localhost:8888/ajax?name=yves&gender=%EB%82%A8%EC%9E%90
    console.log(req.query);
    res.send(req.query);
})

app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})


// axios
app.get('/axios', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/axios', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

// fetch

app.get('/fetch', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/fetch', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})


 app.listen(PORT, () => {
    console.log(`start ${PORT}`);
 })