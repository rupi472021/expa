import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import FCSignIn from './FunctionComponents/FCSignIn';
import CCResetPasswordPage from './ClassComponents/CCResetPasswordPage';
import FCRegister from './FunctionComponents/FCRegister';
import PictureUploader from './Components/PictureUploader';
import CCRegisterPage from './ClassComponents/CCRegisterPage';
import CCLoginPage from './ClassComponents/CCLoginPage';
import FCPickUserPage from './FunctionComponents/FCPickUserPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" >
          <CCLoginPage />
        </Route>
        <Route exact path="/register" >
          <CCRegisterPage />
        </Route>
        <Route exact path="/forget_password_page" >
          <CCResetPasswordPage />
        </Route>
        <Route exact path="/pick_user_page" >
          <FCPickUserPage />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);