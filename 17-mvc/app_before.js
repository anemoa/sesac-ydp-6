const exrpess = require('express');
const path = require('path');

const app = exrpess();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');


// (임시) DB에서 가져온 데이터
const comments = [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요^~^',
    },
    {
      id: 2,
      userid: 'happy',
      date: '2022-11-01',
      comment: '반가워유',
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오 신기하군',
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫 댓글입니당ㅎㅎ',
    },
];


app.get('/', (req, res) => {
    res.render('index', {title: 'MVC 실습'})
});

app.get('/comments', (req, res) => {
    res.render('comments', {comments}) // {comments: comments}
});

// 콜론(:): 요청의 주소에서 "변수"를 사용하는 방법
app.get('/comment/:apple', (req, res) => {
    //console.log(req.params); // {apple: '1'}
    //console.log(req.params.apple); // '1'

    // 댓글 id: 요청 주소로 들어온 매개변수 (:id); 
    const commentId = req.params.apple;

    //console.log(comments[commentId - 1]); // 배열은 index가 0부터 시작
    console.log(comments);

    // 존재하지 않는 id에 대해서 요청할 때, 404 처리
    if(!comments[commentId - 1]){ // !undefined => true
        return res.render('404');
    }

    res.render('comment', {comment: comments[commentId - 1]});
});

// 요청의 주소에 변수 여러개 사용 예시
app.get('/test/:id/:name', (req, res) => {
    res.send(req.params);
});

// 404 처리는 맨 마지막 라우트(주소)로 선언: 그렇지 않으면 나머지 라우팅(주소를 설계한 행위)이 전부 무시됨
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`${PORT} 접속`);
});
