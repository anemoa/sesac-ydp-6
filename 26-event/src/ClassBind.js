import React, { Component } from 'react'

export default class ClassBind extends Component {

    constructor(props){
        // 클래스형 컴포넌트의 생성자 메소드. 컴포넌트가 처음 생성될 때 호출
        super(props);

        // console.log('cons this: ', this);
        this.state = {
            name: "sesac",
        }

        // #1. 클래스 컴포넌트에서 이벤트 사용 - bind 쓰기
        // bind 메소드로 this 바인딩
        // 바인딩이란? (binding)
        //  - 프로그램의 어떤 기본 단위가 가질 수 있는 구성요소의 구체적인 값, 성격을 확정짓는 것
        //  -js에서 this는 함수가 호출되는 방식에 따라 달라질 수 있다
        // 즉, this가 무엇을 가르키는지 명확하게 해주기 위해 바인딩이 필요
        //  => this가 올바른 객체를 가리키도록 설정하는 작업

        // 1. 생성자에게 바인딩 하기
        this.printConsole = this.printConsole.bind(this);

    }

    // bind 사용하기
    printConsole(){
        console.log('printConsole - this: ', this); // 컴포넌트의 인스턴스를 가리킴
        console.log('printConsole - state: ', this.state); // 컴포넌트의 상태 출력
    }

    // #2 화살표 함수에서 이벤트 사용 - 화살표 함수 사용
    /* 
        화살표 함수는 this가 상위 스코프의 this를 참조하므로 바인딩이 필요 없음 (= Lexical Scpoing)
        (자신만의 this를 가지지 않는다.)
    
    */

    
    // evt: 이벤트 객체 / msg, e: 추가로 전달된 인자
    printConsole2 = (evt, msg, e) => {
        console.log('evt', evt);
        console.log('evt.target', evt.target);
        console.log('evt.currentTarget', evt.currentTarget);
        console.log('msg >>', msg);
        console.log('e >>', e);
        console.log('this >>', this); // 클래스 인스턴스
    }
  render() {
    return (
        <div>
            Class Component Event
            {/* 인자 없이 호출 */}
            <button onClick={this.printConsole}>printConsole 인자 X</button>

            {/* 이벤트 객체와 인자 전달 */}
            <button onClick={(e) => this.printConsole2(e, 'msg', 'msg2')}>printConsole2 인자 O</button>

            {/* 이벤트 객체만 전달 */}
            <button onClick={this.printConsole2}>printConsole2 인자 X</button>
        </div>
    
    )
  }
}
