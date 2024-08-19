import React from 'react'

export const App2 = () => {
    
    const moneyInOut = (e) => {
        const bank = e.target.value;
        console.log(bank);
    }
  return (
    <div>
        <h1>코딩온 뱅크</h1>
        <h2>잔액: </h2>
        <input type="text" onChange={(e) => moneyInOut} />
        <button>입금</button>
        <button>출금</button>
    </div>
  )
}
