const {getDbComments} = require('../model/Comment');

console.log({getDbComments});

exports.getMain = (req, res) => {
    res.render('index', {title: 'MVC 실습'})
};

exports.getComments = (req, res) => {
    res.render('comments', {comments: getDbComments()}) // {comments: comments}
};

exports.getComment = (req, res) => {
    //console.log(req.params); // {apple: '1'}
    //console.log(req.params.apple); // '1'

    // 댓글 id: 요청 주소로 들어온 매개변수 (:apple); 
    const commentId = req.params.apple;
    const dbComments =  getDbComments(); // new

    //console.log(dbComments[commentId - 1]); // 배열은 index가 0부터 시작
    console.log('db코멘츠', dbComments);

    // 존재하지 않는 id에 대해서 요청할 때, 404 처리
    if(!dbComments[commentId - 1]){ // !undefined => true
        return res.render('404');
    }

    res.render('comment', {comment: dbComments[commentId - 1]});
};