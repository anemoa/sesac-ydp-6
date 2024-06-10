// path module
const path = require('path');
console.log(path.join('a', 'b', 'index.html'));
console.log(path.join('/a', 'b', 'index.html'));
console.log(path.join('/a', 'b', '../index.html'));
console.log(path.join(__dirname, 'data.json'));

// join과 resolve 차이점
console.log(path.join('a', 'b', 'index.html')); // 상대경로
console.log(path.resolve('a', 'b', 'index.html')); // 절대경로