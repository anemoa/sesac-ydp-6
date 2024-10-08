import { useDispatch, useSelector } from 'react-redux';
import './Styles/Box.css';
import {plus, minus, toggleState} from './store/counterSlice';

function App() {
  const number = useSelector((state) => state.counter.number); // {number: 100}
  console.log('state >>', number);

  return (
    <div className='App'>
      <h1>React Redux Ex3</h1>
      <h2>Redux Toolkit 사용</h2>
      <h2>Reducer 추가!</h2>
      <h2>number: {number}</h2>
      <Box />
    </div>
  );
}

// Box1 컴포넌트
const Box = () => {
  return (
    <div className='Box'>
      <h2>Box1: </h2>
      <Box2 />
    </div>
  );
};

// Box2 컴포넌트
const Box2 = () => {
  return (
    <div className='Box2'>
      <h2>Box2: </h2>
      <Box3 />
    </div>
  );
};

// Box3 컴포넌트
const Box3 = () => {
  return (
    <div className='Box3'>
      <h2>Box3: </h2>
      <Box4 />
    </div>
  );
};

// Box4 컴포넌트
const Box4 = () => {
  // #4. useSelector, useDispatch 사용

  const number = useSelector((state) => state.counter.number);
  const isVisible = useSelector((state) => state.counter.toggle);
  
  const dispatch = useDispatch();
  return (
    <div className='Box4'>
      <h2>Box4: {number}</h2>
      <h2>isVisible 값은 {isVisible ? '참' : '거짓'} 이다</h2>

      <button onClick={() => dispatch(plus())}>Plus</button>
      <button onClick={() => dispatch(minus())}>Minus</button>

      <button onClick={() => dispatch(toggleState())}>change</button>
    </div>
  );
};

export default App;
