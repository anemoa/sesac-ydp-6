import React from 'react'

export const SyntheticEvent = () => {

    function syntheticEvent(e){
        console.log('버튼 클릭');
        console.log(e);
        // 콘솔에 찍히는 e 객체는 합성 이벤트 (합성된, 인공적으로 만들어진)
        // 즉, React가 만들어낸 이벤트 객체
        // 브라우저마다 이벤트 이름과 종류 등 이벤트를 처리하는 방식이 다르기 때문에 
        // 이를 동일하게 처리하기 위해 React 에서 사용하는 이벤트 객체
        // e.preventDefault();
        // 합성 이벤트는 React가 모든 브라우저에서 일관된 방식으로 이벤트를 처리할 수 있게 해주는 도구라고 이해하자.
    }

    function printInputValue(evt){
        console.log(evt.target.value);
    }

  return (
    <div>
        <h1>SyntheticEvent</h1>
        <button onClick={syntheticEvent}>syntheticEvent</button>
        <br />
        <input type="text" onChange={printInputValue}/>
    </div>
  )
}
