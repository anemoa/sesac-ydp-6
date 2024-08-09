
import './App.css';
import { Faq } from './Components/Faq';
import { UseCallBackEx } from './Components/UseCallBackEx';
import { UseCallbackEx2 } from './Components/UseCallbackEx2';
import UseMemoEx from './Components/UseMemoEx';
import { UseReducerEx } from './Components/UseReducerEx';
import { useTitle } from './hooks/useTitle';

function App() {
  useTitle('React hooks 학습중!!');
  return (
    <div className="App">
      {/* <UseMemoEx /> */}
      {/* <UseCallBackEx /> */}
      <hr />
      {/* <UseCallbackEx2 postId={9}/> */}
      <UseReducerEx />
      <Faq />
    </div>
  );
}

export default App;
