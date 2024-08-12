import './styles/App.css';
import {CssModuleComponents} from './CssModuleComponents';
import { SassComponents } from './SassComponents';
import { StyledComponent } from './StyledComponent';

function App() {

  return (
    <div className="App">
      <h2>Sen</h2>

      <CssModuleComponents />

      <hr />

      <SassComponents />
      <hr />
      <StyledComponent />
    </div>
  );
}

export default App;
