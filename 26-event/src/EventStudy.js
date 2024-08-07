import React, { useState } from 'react'


/* 
    - 이벤트 핸들러
        - 특정 이벤트가 발생했을 때 실행하는 함수
        (보통 이벤트 객체를 매개변수로 받아서 이벤트에 대한 정보를 접근하고 처리함)

    - 이벤트 객체
        - 이벤트가 발생한 요소와 관련된 정보를 담고 있는 놈 (TMI)

    ------------------------------------------------------------

    이벤트 객체를 사용하지 않아도 이벤트 핸들러는 사용할 수 있다.
    이벤트 객체는 추가적인 정보를 제공하는 역할일 뿐, 반드시 사용해야 하는 것은 아니다.

    리액트 이벤트 핸들러는 기본적으로 'event' 객체를 자동으로 전달함
        - 순수 JS, html
        - 이벤트 핸들러를 설정할 때, 브라우저가 이벤트 객체를 자동으로 전달해준다.

*/


export const EventStudy = () => {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [message, setMessage] = useState('hi');

    
    //  이벤트 객체 없이 상태 업데이트
    const handleClick = () => {
        setCount(count + 1);
    }

    // 이벤트 객체를 사용한 상태 업데이트
    const handleClickWithEvent = (e) => {
        setCount(count + 1);

        // 클릭한 위치의 좌표를 상태에 저장
        console.log(e);
        setPosition({x: e.clientX, y: e.clientY});
    }

    // 매개변수를 사용하는 핸들러
    const handleClickWithParam = (e, message) =>{
        setCount(count + 1);
        setPosition({x: e.clientX, y: e.clientY});
        console.log("message >>", message);
    }


    // 일반 함수: 이벤트 객체를 매개변수로 받지 않음
    const messeageFunction = (e) => {
        setMessage(`호출: ${e}`)
        console.log('messgeFunction >> ', e);
    }

    const messageClick = () =>{
        messeageFunction('하요')
    }

  return (
    <div>
        {/* 이벤트 객체 없이 handleClick 함수 호출 */}
        <button onClick={handleClick}>클릭</button>
        <div>클릭 횟수: {count}</div>

        <hr />
        {/* onClick 핸들러 함수에서 이벤트 객체는 자동으로 매개변수 역할을 한다. */}
        {/* 이벤트 객체 있이  handleClickWithEvent 호출 */}
        <button onClick={handleClickWithEvent}>클릭22</button>
        <div>
            클릭 위치: X: {position.x}, Y: {position.y}
        </div>
        <hr />

        {/* 매개변수를 사용하여 handleClickWithParam 호출 */}
        {/* e(event)를 직접 보내는 이유는 핸들러 함수에 추가적인 매개변수를 보내기 위해서임 */}
        <button onClick={e => handleClickWithParam(e, '버튼 클릭됨')}>메세지 출력 버튼</button>
        <hr />

        {/* 클릭시 messageClick 호출 */}
        <button onClick={messageClick}>messageClick 호출</button>
        <div>메시지: {message}</div>
    </div>
  )
}
