const http = require('http');
// console.log(http);
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h2>Hello DW</h2>` )
}).listen(3000, () => {
    console.log('3000번 서버 실행');
});