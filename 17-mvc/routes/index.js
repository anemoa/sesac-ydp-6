const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// console.log(controller);

// 기본 요청 주소: "localhost:PORT"
router.get('/', controller.getMain);

router.get('/comments', controller.getComments);

// 콜론(:): 요청의 주소에서 "변수"를 사용하는 방법
router.get('/comment/:apple', controller.getComment);

// 요청의 주소에 변수 여러개 사용 예시
// router.get('/test/:id/:name', (req, res) => {
//     res.send(req.params);
// });

module.exports = router;