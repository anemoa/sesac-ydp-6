import React, {useState, useMemo} from 'react'

// useMemo 
// 메모이제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산을 최소화 함.

export default function UseMemoEx() {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState(''); // 재렌더링용


    // [before]
    const calc = () => {
        console.log('계산중이다');
        for(let i = 0; i < 109000 ; i++){} // 시간 소모적인 작업
        return count ** 2;
    }

    // [after] useMemo 적용

    const calcMemo = useMemo(() => {
        console.log('메모 열심히 계산중');
        for(let i = 0; i < 109000 ; i++){}
        return count ** 2;
    }, [input]); // count가 변경될때만 계산 수행

    // count의 값이 바뀔 때에만 함수를 실행하라는 뜻
    // input 상태가 바뀌면 컴포넌트는 리랜더링 되지만 calc는 연산되지 않음.


  return (
    <div>
        <h1>useMemo Ex</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => setCount(() => count + 1 )}>Plus</button>
        <p>count: {count} </p>

        {/* before */}
        <p>calc : {calc()}</p>

        {/* after useMemo 적용 */}
        <p>calcMemo: {calcMemo} </p>
    </div>
  )
}
