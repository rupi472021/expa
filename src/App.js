import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import FCSignIn from './FunctionComponents/FCSignIn';
import FCRegister from './FunctionComponents/FCRegister';

function App() {
  return (
    <div className="App">
      <FCSignIn />
      {/* <FCRegister /> */}
    </div>
  );
}

export default App;


