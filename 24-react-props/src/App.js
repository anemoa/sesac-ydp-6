import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponent name="SeSAC 6기" />
      <hr />
      <FunctionComponent name="SeSAC 6기" />
      <FunctionComponent name="SeSAC 6기" />
      <hr />
      <Button Link="https://www.google.com">googlee</Button>
      <Button></Button>
    </div>
  );
}

export default App;
