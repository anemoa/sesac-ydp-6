import React from 'react'
import { useToggle } from '../hooks/useToggle'

export const Faq = () => {
    const [isFaqOpen, setIsFaqOpen] = useToggle();
    // return[value, toggleValue];

    console.log('isFaqOpen >>>', isFaqOpen); // false, true
    console.log('setIsFaqOpen >>>', setIsFaqOpen); // toggleValue {setValue(!value)}
  return (
    <div>
        <h1>custom hook (useToggle) ex </h1>
        <div onClick={setIsFaqOpen} style={{cursor: 'pointer'}}>Q. 리액트에서 커스텀 훅 만들수 있나요?</div>
        {isFaqOpen && <div>A. 네 가능해요</div>}
    </div>
  )
}
