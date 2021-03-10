import './App.css';
import CCRegister from './ClassComponents/CCRegister';
import FCSignIn from './FunctionComponents/FCSignIn';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <FCSignIn/> */}
        <CCRegister/>
    </div>
  );
}

export default App;
