const fs = require('fs');
const path = require('path');


fs.rmdir(path.join(__dirname, 'test'), (err) => {
    if(err){
        console.error(err);
    }
    console.log('디렉토리 생성 완료');
});

fs.rmdir(path.join(__dirname, 'hihi'), (err) => {
    if(err){
        console.error(err);
    }
    console.log('만들었다');
} )