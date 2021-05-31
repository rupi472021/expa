import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import CCRegisterPage from './ClassComponents/CCRegisterPage';
import CCLoginPage from './ClassComponents/CCLoginPage';
import CCCreateNewTrip from './ClassComponents/CCCreateNewTrip';
import FCMainMenuPage from './FunctionComponents/FCMainMenuPage';
import React, { Component } from 'react';
import CCResetPasswordPage from './ClassComponents/CCResetPasswordPage';
import CCMyprofile from './ClassComponents/CCMyprofile';
import CCMyTrip from './ClassComponents/CCMyTrip';
import CCSearchPage from './ClassComponents/CCSearchPage';
import CCTripPage from './ClassComponents/CCTripPage';
import firebase from './firebase';
import { Notifications } from 'react-push-notification';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data_from_sql: '',
      Ques_data_fromSQL: '',
    }
  };

  componentDidMount = () => { //GET all Users from Users_expa (SQL) onload

    const messaging = firebase.messaging();
    messaging.requestPermission().then(() => {
      console.log("Notifications allowed");
      return messaging.getToken();
    })
      .then(token => {
        console.log("Token Is : " + token);
      })
      .catch(err => {
        console.log("No permission to send push", err);
      });
    messaging.onMessage((payload) => { //אם שלחו הועדה- היא מאזינה
      console.log(payload);
      //console.log(payload.data.notification)
    });

    console.log("in componentDidMount function");

    let apiUrl = `http://localhost:54976/api/User`;
    //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/User`;

    fetch(apiUrl)
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("GET Users data from SQL= ", result);
          // result.map(st => console.log(st.Fname)); // all Fname in Users_Expa
          this.setState({
            data_from_sql: result,
          })
        },
        (error) => {
          console.log("err GET=", error);
        });


    let apiUrl1 = `http://localhost:54976/api/Questionnaire`;
    fetch(apiUrl1)
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("GET Questionnaire data from SQL= ", result);
          // result.map(st => console.log(st.Fname)); // all Fname in Users_Expa
          this.setState({
            Ques_data_fromSQL: result,
          })
        },
        (error) => {
          console.log("err GET=", error);
        });
  }

  render() {
    return (
      <div className="App">
        <Notifications />
        <Switch>
          <Route exact path="/" >
            <CCLoginPage dataFromApptoLoginPage={this.state.data_from_sql} />
          </Route>
          <Route exact path="/register" >
            <CCRegisterPage dataFromApptoRegisterPage={this.state.data_from_sql} QuesDatafromApptoRegisterPage={this.state.Ques_data_fromSQL} />
          </Route>
          <Route exact path="/forget_password_page" >
            <CCResetPasswordPage dataFromApptoResetPasswordPage={this.state.data_from_sql} />
          </Route>
          <Route exact path="/main_menu_page" >
            <FCMainMenuPage />
          </Route>
          <Route exact path="/main_menu_page/create_new_trip_page" >
            <CCCreateNewTrip />
          </Route>
          <Route exact path="/main_menu_page/my_profile" >
            <CCMyprofile />
          </Route>
          <Route exact path="/main_menu_page/my_trips" >
            <CCMyTrip />
          </Route>
          <Route exact path="/main_menu_page/search_trip_page" >
            <CCSearchPage />
          </Route>
          <Route exact path="/trip_page" >
            <CCTripPage />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);