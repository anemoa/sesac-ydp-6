
import './App.css';
import { UseCallBackEx } from './Components/UseCallBackEx';
import { UseCallbackEx2 } from './Components/UseCallbackEx2';
import UseMemoEx from './Components/UseMemoEx';

function App() {
  return (
    <div className="App">
      {/* <UseMemoEx /> */}
      <UseCallBackEx />
      <hr />
      <UseCallbackEx2 postId={9}/>
    </div>
  );
}

export default App;
