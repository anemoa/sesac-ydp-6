// var addr = 'http://localhost:8000/example.htm?year=2024&month=feb';
// var addr = 'http://localhost:8000/demo.htm?id=2024&pw=feb';
// 
// var q = url.parse(addr, true);
// console.log(q);
// console.log(q.pathname); // 경로와 파일 이름/example.htm
// console.log(q.search); // ?year=2024&month=feb
// var qdata = q.query;  
// console.log(qdata); // { year: '2024', month: 'feb' }
// console.log(qdata.month); // 기존 쿼리에서 month에 해당하는 것만 출력 feb
/**
 * url 모듈은 웹주소를 읽어오며, 
 * 읽어온 내용을 구문분석하여 주소의 각 부분으로 나누고 객체로 변환한다.
 * 
 */


const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var fileName = "." + q.pathname;
    console.log(fileName);

    fs.readFile(fileName, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })



}).listen(8000, () => {
    console.log('8000서버 실행');
});