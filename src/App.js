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
import { store } from 'react-notifications-component';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert, AlertTitle } from '@material-ui/lab';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Ques_data_fromSQL: '',
      snackBarStatus: false,
      payloadTtile: '',
      payloadBody: '',
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
        console.log("Token length : " + token.length);
        this.setState({ token_num: token });
      })
      .catch(err => {
        console.log("No permission to send push", err);
      });
    messaging.onMessage((payload) => { //אם שלחו הודעה- היא מאזינה

      console.log("notification title: " + payload.notification.title);
      console.log("notification body: " + payload.notification.body);

      this.setState({
        snackBarStatus: true,
        payloadTtile: payload.notification.title,
        payloadBody: payload.notification.body
      })

      // store.addNotification({
      //   title: payload.notification.title + '!',
      //   message: payload.notification.body,
      //   type: "warning",
      //   insert: "top",
      //   container: "top-right",
      //   animationIn: ["animate__animated", "animate__fadeIn"],
      //   animationOut: ["animate__animated", "animate__fadeOut"],
      //   dismiss: {
      //     duration: 5000,
      //   },
      //   slidingExit: {
      //     duration: 800,
      //     timingFunction: 'ease-out',
      //     delay: 0
      //   }
      // });

    });

    console.log("in componentDidMount function");

    let apiUrl = `http://localhost:53281/api/User`;
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


    let apiUrl1 = `http://localhost:53281/api/Questionnaire`;
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
        <Snackbar
          style={{ marginBottom: 600 }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackBarStatus}
          autoHideDuration={1000}
          onClick={() => this.setState({ snackBarStatus: false })}
          message={this.state.payloadTtile}
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={() => this.setState({ snackBarStatus: false })}> VIEW </Button>
              <Button color="secondary" size="small" onClick={() => alert("this user joined your trip!")}> ACCEPT </Button>
              <Button color="secondary" size="small" onClick={() => alert("maybe next trip!")}> DENIED </Button>
            </React.Fragment>
          }
        />
        {/* <ReactNotification /> */}
        <Switch>
          <Route exact path="/" >
            <CCLoginPage dataFromApptoLoginPage={this.state.data_from_sql} />
          </Route>
          <Route exact path="/register" >
            <CCRegisterPage dataFromApptoRegisterPage={this.state.data_from_sql} QuesDatafromApptoRegisterPage={this.state.Ques_data_fromSQL} Token={this.state.token_num} />
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