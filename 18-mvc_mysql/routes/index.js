const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 작업 순서
// read all -> create -> delete -> update

// 기본 주소 localhost:PORT

router.get('/', controller.main);

router.get('/visitors', controller.getVisitors);



// POST /visitor
router.post('/visitor', controller.getVisitors); // 하나 추가



module.exports = router;