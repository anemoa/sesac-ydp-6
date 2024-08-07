import React from 'react'

export const Result = ({data}) => {

    const {fruit, background, color, content} = data;

  return (
    <div>
        <img src={`${fruit}.jpg`} alt={fruit}  width={100} height={100}/>

        <div style={{backgroundColor: background, color: color}}>
            {content}
        </div>
    </div>
  )
}
