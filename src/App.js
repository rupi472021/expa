import './App.css';
import FCSignIn from './FunctionComponents/FCSignIn';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FCRegister from './FunctionComponents/FCRegister';

function App() {
  return (
    <div className="App">
        {/* <FCSignIn/> */}
        <FCRegister/>
    </div>
  );
}

export default App;
