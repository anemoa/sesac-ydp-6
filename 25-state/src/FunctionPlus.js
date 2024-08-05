import React, {useState} from 'react'

const FunctionPlus = () => {
    const [num, setNum] = useState(0);
    const increase = () => {
        setNum(num + 1);
    }

    const decrease = () => {
        setNum(num - 2);
    }
  return (
    <div>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-2</button>
        <p>{num}</p>
    </div>
  )
}

export default FunctionPlus;