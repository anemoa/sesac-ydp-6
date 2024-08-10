import React, {useEffect, useState, useRef} from 'react'

export const Prac3 = () => {

    const [val, setVal] = useState('');
    const inRef = useRef('');


    const inVal = (e) => {

        inRef.current = e.target.value;
        console.log('렌더링!!', inRef.current );
    }

    const clickHandler = () => {
        setVal(inRef.current);
        console.log('버튼 렌더링!');
    }

    useEffect(() => {
        console.log('MyComponent is rendering');
      });

  return (
    <div>
        <input type="text" onChange={inVal} />
        <button onClick={clickHandler}>전송!</button>
        <p>{val}</p>
    </div>
  )
}
