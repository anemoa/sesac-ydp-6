import React from 'react'

export const Input = (props) => {
    const {setData} = props;

    const handleInput = (e) => {
        const content = e.target.value;

        setData((data) => {
            return {...data, content}
        })
    }
  return (
    <div>
        내용: <input type="text" onChange={handleInput} />
    </div>
  )
}
