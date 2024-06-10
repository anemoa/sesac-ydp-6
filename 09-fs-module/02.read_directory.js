// 디렉토리 읽기
const fs = require('fs');
// const path = require('path');
// fs.readdir('./', function(err, files){
//     if(err) console.log('에러', err);
//     else console.log('결과는', files);
// });

// 파일 생성
// fs.writeFile('mynewfile1.txt', 'Hello World', function(err){
//     if(err) throw err;
//     console.log('파일 생성');
// });

// open(), w를 이용해서  파일 생성
//fs.open('mynewfile2.txt', 'w', function(err, file){ //w는 write 의 약자. w모드로 open 하면 빈 파일 생성
//     if(err) throw err;
//     console.log('파일 생성2');
// })

// 파일생성 appendFile() 추가, 기존파일을 전제
// fs.appendFile('mynewfile1.txt', 'kim', function(err){
//     if(err) throw err;
//     console.log('파일 생성3');
// })

// 파일 삭제
fs.unlink('mynewfile2.txt', function(){
    console.log('파일 삭제 끝');
});

// 파일 이름 변경
fs.rename('mynewfile1.txt', 'renamefile1.txt', function(err){
    if(err){
        throw err;
    }
    console.log('파일 이름 변경');
});