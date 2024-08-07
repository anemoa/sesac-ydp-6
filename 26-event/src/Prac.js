import React, { useState } from 'react'
import { Select } from './Select'
import { Input } from './Input'
import { Result } from './Result'

// 부모 컴포넌트
// 상태관리를 한 번에 하는 방법
const Prac = () => {

    const [data, setData] = useState({
        fruit: 'apple',
        background: 'black',
        color: 'white',
        content: 'txt'
    })
  return (
    <>
    {/* props를 넘겨줄건데, setData 함수를 넘겨줘야 state 변경이 가능 */}
        <div>
            <Select setData={setData} />
        </div>

        <div>
            <Input setData={setData}/>
        </div>

        <div>
            <Result data={data}/>
        </div>
    
    </>
  )
}

export default Prac