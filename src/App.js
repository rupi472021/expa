import './App.css';
import { Switch, Route ,withRouter } from 'react-router-dom';
import FCSignIn from './FunctionComponents/FCSignIn';
import CCResetPasswordPage from './ClassComponents/CCResetPasswordPage';
import FCRegister from './FunctionComponents/FCRegister';
import PictureUploader from './Components/PictureUploader';
import CCRegisterPage from './ClassComponents/CCRegisterPage';


function App() {
  return (
    // <div className="App">
    //   <header>
    //     <Switch>
    //       <Route  exact path="/" >
    //         <FCSignIn />
    //       </Route>
    //       <Route exact path="/register" >
    //         <FCRegister/>
    //       </Route>
    //       <Route exact path="/forget_password_page" >
    //         <CCResetPasswordPage/>
    //       </Route>
    //     </Switch>
    //   </header>
    // </div>
  //  <PictureUploader/>
   <CCRegisterPage/>
  );
}

export default withRouter(App);