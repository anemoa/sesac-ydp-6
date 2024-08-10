import React, {useEffect, useState} from 'react'

export const Prac2 = () => {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');


    const inputVal = (e) => {
        setInput(e.target.value);
        console.log(input);
    }

    const btnClick = () => {
        setCount(count + 1);
        console.log('리렌더링!!');
    }


    useEffect(() => {
        console.log('렌더링 최초 실행');
    }, []);




  return (
    <div>
        <input type="text" value={input} onChange={inputVal} />
        
        <p>{input.length === 0 ? <p>아직 암것도 없어용</p> : <p>{input}</p>}</p>

        <button onClick={btnClick}>플러스</button>
        <p>{count}</p>
    </div>
  )
}
