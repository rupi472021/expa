import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import CCResetPasswordPage from './ClassComponents/CCResetPasswordPage';
import PictureUploader from './Components/PictureUploader';
import CCRegisterPage from './ClassComponents/CCRegisterPage';
import CCLoginPage from './ClassComponents/CCLoginPage';
import FCMainMenuPage from './FunctionComponents/FCMainMenuPage';


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
        <Route exact path="/main_menu_page" >
          <FCMainMenuPage />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);