var http = require('http');
var url = require('url');
var fs = require('fs');

// http.createServer(function(req, res){
//     // req에 사용자가 원하는 파일
//     var q = url.parse(req.url, true);
//     var filename = '.' + q.pathname;
//     // 읽을 준비는 완료

//     fs.readFile(filename, function(err, data){

//         if(err){
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end('file not found');
//         }

//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();

//     })

// }).listen(3000, () => {
//     console.log('3000포트 서버');
// })

http.createServer( (req, res) => {
    let que = url.parse(req.url, true);
    let namefile = '.' + que.pathname;

    fs.readFile(namefile, function(err, data){

        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('file not found');
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
} ).listen(3030, () => {
    console.log('3030 포트');
})