import './App.css';
import { Switch, Route ,withRouter } from 'react-router-dom';
import FCSignIn from './FunctionComponents/FCSignIn';
import FCRegister from './FunctionComponents/FCRegister';

function App() {
  return (
    <div className="App">
      <header>
        <Switch>
          <Route  exact path="/" >
            <FCSignIn />
          </Route>
          <Route  exact path="/register" >
            <FCRegister />
          </Route>
        </Switch>
      </header>
       {/* <FCSignIn />   */}
      <FCRegister />
    </div>
  );
}

export default withRouter(App);