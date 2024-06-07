const http = require('http');
const fs = require('fs');
const server = http.createServer( (req, res) => {
    let path = "./view/";
    switch(req.url){
        case '/':
            path += 'index.html' // ./view/index.html
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html' // ./view/about.html
            res.statusCode = 200;
            break;
        default:
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })

});



server.listen(8000, () => {
    console.log('8000 포트에서 실행');
});