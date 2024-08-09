
import './App.css';
import { UseCallBackEx } from './Components/UseCallBackEx';
import { UseCallbackEx2 } from './Components/UseCallbackEx2';
import UseMemoEx from './Components/UseMemoEx';
import { UseReducerEx } from './Components/UseReducerEx';

function App() {
  return (
    <div className="App">
      {/* <UseMemoEx /> */}
      {/* <UseCallBackEx /> */}
      <hr />
      {/* <UseCallbackEx2 postId={9}/> */}
      <UseReducerEx />
    </div>
  );
}

export default App;
