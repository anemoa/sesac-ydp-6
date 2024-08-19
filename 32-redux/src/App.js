import { useState } from 'react';
import './Styles/Box.css';

function App() {
  const [num, setNum] = useState(100);
  const plus = () => setNum(num + 1);
  const minus = () => setNum(num - 1);
  return (
    <div className="App">
      <h1>React Redux</h1>
      <h2>Redux를 사용하지 않을때 Props 전달</h2>
      <Box num={num} plus={plus} minus={minus} />
    </div>
  );
}

export default App;


// Box1 컴포넌트
const Box = ({num, plus, minus}) => {
  return(
    <div className='Box'>
      <h2>Box1: {num} </h2>
      <Box2 num={num} plus={plus} minus={minus} />
    </div>
  )
}

// Box2 컴포넌트
const Box2 = ({num, plus, minus}) => {
  return(
    <div className='Box2'>
      <h2>Box2: </h2>
      <Box3 num={num} plus={plus} minus={minus}/>
    </div>
  )
}

// Box3 컴포넌트
const Box3 = ({num, plus, minus}) => {
  return(
    <div className='Box3'>
      <h2>Box3: </h2>
      <Box4 num={num} plus={plus} minus={minus}/>
    </div>
  )
}

// Box4 컴포넌트
const Box4 = ({num, plus, minus}) => {
  return(
    <div className='Box4'>
      <h2>Box4: {num} </h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  )
}