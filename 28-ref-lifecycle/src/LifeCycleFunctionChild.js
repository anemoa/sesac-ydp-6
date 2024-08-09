import React, { useEffect, useState } from 'react'


// 자식 컴포넌트
export default function LifeCycleFunctionChild({num}) {
    const [input, setInput] = useState('');
    
    // #1. Mount 시점에 실행 (return 생략한 버전)
    useEffect(() => {
        console.log('컴포넌트 마운트! 🔵');
    }, []);

    // #2. Mount 시점에 실행 (return 있는 버전)
    useEffect(() => {
        console.log('컴포넌트 마운트! 🔵');
        return () => {
            // Unmount 시점에 실행
            console.log('컴포넌트 언마운트! 🔴');
        }
    }, []);

    // #3. mount or update 시점에 실행 (의존성 배열 생략)
    useEffect(() => {
        console.log('컴포넌트 마운트! 🔵 or update 🟢');
    });

    // 의존성 배열이 [] 빈 배열 이므로 위에 #1 #2는 렌더링 시 한 번만 실행
    // 의존성 배열을 생략하는 의미는 '매 렌더링마다 실행' 하겠다는 뜻 (상태 변경마다 라는 뜻도 포함)


    // #4. input 상태가 업데이트 될 때 실행
    useEffect(() => {
        console.log('마운트! 🔵 or input 상태가 변경됨에 따라 컴포넌트 업데이트 🟠');
    }, [input]);
    // input이 배열이 아니라도 의존성 배열에 추가할 수 있다.
    // 문자열, 숫자 상관없이 이 값이 변경될 때마다 useEffect가 실행된다.

  return (
    <div style={{color: 'white'}}>
        자식이다
        <p>현재 숫자는 {num}이다</p>
        <input type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        />
    </div>
  )
}
