import React, { useState } from 'react'
import LifeCycleFunctionChild from './LifeCycleFunctionChild';


// 부모 컴포넌트
export default function LifeCycleFunction() {
    const [num, setNum] = useState(0);
    const [visible, setVisible] = useState(true);

    const changeNum = () => {
        setNum(num + 1);
    }

    const changeVisible = () =>{
        setVisible(!visible);
    }
  return (
    <div style={{backgroundColor: 'green'}}>
        <button onClick={changeNum}>plus</button>
        <button onClick={changeVisible}>on / off</button>

        {/* 자식 컴포넌트 다루기 */}
        {visible && <LifeCycleFunctionChild num={num} />}
    </div>
  )
}
