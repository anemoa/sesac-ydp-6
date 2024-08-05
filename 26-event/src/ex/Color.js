import React, {useState} from 'react'

const Color = () => {

    const [msg, setMsg] = useState('검정색글씨');
    const [color, setColor] = useState('black');

    const onClickRed = () => {
        setMsg('빨간색 글씨');
        setColor('red');
    }

    const onClickBlue = () => {
        setMsg('파란색 글씨');
        setColor('blue');
    }


  return (
    <div>
        <p style={{color: color}}>{msg}</p>
        <button onClick={onClickRed}>빨간색글씨</button>
        <button onClick={onClickBlue}>파란색글씨</button>
    </div>
  )
}

export default Color