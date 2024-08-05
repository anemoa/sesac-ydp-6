import React, {useState} from 'react'

export default function SayFunction() {

    console.log(useState('welcome')); // 자료 잠시 저장하는 용도
    // const [a, b] = useState('');
    // a: state에 저장할 자료
    // b: state 변경을 도와주는 함수
    // useState(''): 상태 초기값 (숫자, 문자, 배열, 객체 등 값의 형태는 자유로움)

    const [message, setMessage] = useState('Welcome');

    const onClickEnter = () => {
        setMessage('안녕하냐규');
    }

    const onClickLeave = () => {
        setMessage('잘가라규');
    }

    const handleClick = () => {
        setMessage((currentMessage) => {
            return currentMessage === 'Welcome' ? 'Hi' : 'bye';
        })
    }
  return (
    <div>
        <h1>Function Component</h1>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <button onClick={handleClick}>Hi</button>
        <h1>{message}</h1>
    </div>
  )
}
