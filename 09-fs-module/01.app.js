const fs = require('fs'); // file system의 약자로 파일 처리에 관한 전반적인걸 담당
const path = require('path');
// console.log(fs);
// fs.mkdir(path, mode, callback)
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err){
//         return console.error(err);
//     }
//     console.log('디렉토리 생성완료');
// });

// fs.rmdir(path.join(__dirname, 'test'), (err) => {
//     if(err){
//         return console.error(err);
//     }
//     console.log('디렉토리 삭제완료');    
// });