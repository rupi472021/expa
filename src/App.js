import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import CCResetPasswordPage from './ClassComponents/CCResetPasswordPage';
import PictureUploader from './Components/PictureUploader';
import CCRegisterPage from './ClassComponents/CCRegisterPage';
import CCLoginPage from './ClassComponents/CCLoginPage';
import CCCreateNewTrip from './ClassComponents/CCCreateNewTrip';
import FCMainMenuPage from './FunctionComponents/FCMainMenuPage';
import React, { Component } from 'react';
import { responsiveFontSizes } from '@material-ui/core';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data_from_sql: '',
    }
  };


  componentDidMount = () => { //GET all Users from Users_expa (SQL) onload

    console.log("in componentDidMount function");
    let apiUrl = `http://localhost:53281/api/User`;

    fetch(apiUrl)
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("GET data from SQL= ", result);
          result.map(st => console.log(st.Fname)); // all Fname in Users_Expa
          console.log('the third row in this table is = first name:', result[2].Fname + " last name:" + result[2].Lname + " age: " + result[2].Age + " email: " + result[2].Email);
          this.setState({
            data_from_sql: result,
          })
        },
        (error) => {
          console.log("err GET=", error);
        });
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <CCLoginPage dataFromApptoLoginPage={this.state.data_from_sql} />
          </Route>
          <Route exact path="/register" >
            <CCRegisterPage dataFromApptoRegisterPage={this.state.data_from_sql} />
          </Route>
          <Route exact path="/forget_password_page" >
            <CCResetPasswordPage />
          </Route>
          <Route exact path="/main_menu_page" >
            <FCMainMenuPage />
          </Route>
          <Route exact path="/main_menu_page/create_new_trip_page" >
            <CCCreateNewTrip />
          </Route>
        </Switch>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         <Route exact path="/" >
//           <CCLoginPage />
//         </Route>
//         <Route exact path="/register" >
//           <CCRegisterPage />
//         </Route>
//         <Route exact path="/forget_password_page" >
//           <CCResetPasswordPage />
//         </Route>
//         <Route exact path="/main_menu_page" >
//           <FCMainMenuPage />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

export default withRouter(App);