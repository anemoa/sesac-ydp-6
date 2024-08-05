import React, {useState} from 'react'

const Text = () => {

    const [title, setTitle] = useState('안녕하세요');
    const [btn, setBtn] = useState('사라져라');

    const btnEvt = () => {
        if(btn === '사라져라'){
            setTitle('');
            setBtn('보여라');
        }else{
            setBtn('사라져라')
            setTitle('안녕하세요')
        }
    }


  return (
    <div>
        <button onClick={btnEvt}>{btn}</button>
        <p>{title}</p>

    </div>
  )
}

export default Text