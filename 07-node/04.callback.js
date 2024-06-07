function first(){
    second();
    console.log('1');
    return
}

function second() {
    console.log('2');
    return
}

first();

// 콜백 함수: 어떤 지정된 기능이 종료된 후에 실행되는 함수
