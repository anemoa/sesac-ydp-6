import React, { useState } from 'react'


// 상태관리를 따로따로 하는 방법
const Prac2 = () => {

    const [fruit, setFruit] = useState('apple.jpg');
    const [bgc, setBgc] = useState('red');
    const [color, setColor] = useState('green');
    const [txt, setTxt] = useState('text');


    function Typing(e){
        setTxt(e.target.value);
    }

    const fruitChange = (e) => {
        setFruit(e.target.value);
    }

    const bgcChange = (e) => {
        setBgc(e.target.value);
    }

    const colorChange = (e) => {
        setColor(e.target.value);
    }
    return (
        <div>
            과일:
            <select onChange={fruitChange} name="" id="">
                <option value="apple.jpg">사과</option>
                <option value="kiwi.jpg">키위</option>
                <option value="banana.jpg">바나나</option>
            </select>

            배경색:
            <select onChange={bgcChange} name="" id="">
                <option value="red">빨강</option>
                <option value="blue">파랑</option>
                <option value="purple">보라</option>
            </select>

            글자색: 
            <select onChange={colorChange} name="" id="">
                <option value="green">초록</option>
                <option value="pink">핑크</option>
                <option value="yellow">노랑</option>
            </select>
            <div>
                내용: <input type="text" onChange={Typing} />
            </div>

            <div style={{width: '150px'}}>
                <img style={{width: '150px'}} src={fruit} alt="" />
            </div>
            <div style={{backgroundColor: bgc, color: color}}>
                {txt}
            </div>

        </div>
  )
}

export default Prac2