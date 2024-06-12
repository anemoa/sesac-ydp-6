const express = require('express');
const app = express();
const PORT = 8080;
// console.log(app);
app.set('view engine', 'ejs');
app.set('views', './views'); // views폴더 안에 파일.ejs

// 브라우저에 처음 접속했을때 s
app.get('/', (req, res) => {
    res.render('index', {title: '홈'});
})

app.get('/about', (req, res) => {
    res.render('about', {title: '소개'})
});

app.get('/create', (req, res) => {
    res.render('create', {title: '작성'});
})

app.listen(PORT, () => {
    console.log('8080 서버 실행');
});