/**
 * path.join(): 여러 인자를 넣으면 하나의 경로로 합쳐준다
 * path.resolve(): path.join과 비슷하지만 약간의 차이가 있다
 * path.parse(): 파일 경로를 root, dir, base, ext, name으로 구분한다
 * path.format(): path.parse()한 객체를 파일 경로로 합친다
 */

const { log } = require('console');
const path = require('path')
// console.log(path);
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.join('a', 'b', 'index.html'));

console.log('----------------------------');
let pathName = path.parse('/home/user/dir/file.txt'); //
console.log(pathName);

console.log('----------------------------');
console.log(path.extname('/home/user/dir/file.txt')); // 확장자 이름
console.log(path.basename('/home/user/dir/file.txt')); // 파일 이름