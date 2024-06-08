// const add = require('../07-node/01.math')

// console.log(add(3,90));

const http = require('http');
const server = http.createServer();

// server.listen(3000, () => {
//   console.log('3000 성공');
// } );

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<h2>hello world</h2>`)
}).listen(3030, () => {
  console.log('3030실행중');
})