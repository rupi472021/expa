import './App.css';
import { Switch, Route ,withRouter } from 'react-router-dom';
import FCSignIn from './FunctionComponents/FCSignIn';
import FCRegister from './FunctionComponents/FCRegister';
import ResetPasswordPage from './ClassComponents/ResetPasswordPage';

function App() {
  return (
    <div className="App">
      <header>
        <Switch>
          <Route  exact path="/" >
            <FCSignIn />
          </Route>
          <Route exact path="/register" >
            <FCRegister />
          </Route>
          <Route exact path="/forget_password_page" >
            <ResetPasswordPage />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default withRouter(App);