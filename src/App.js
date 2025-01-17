import './App.css';
// import "@coreui/dist/css/coreui.min.css";
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
import 'react-notifications-component/dist/theme.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import '@coreui/coreui/dist/css/coreui.min.css';
import Modal from './Modal.js';
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import CameraOpen from './FunctionComponents/CameraOpen';

import Webcam from "react-webcam";

class App extends Component {

  constructor(props) {

    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    super(props);
    this.state = {
      Ques_data_fromSQL: '',
      snackBarStatus: false,
      payloadTtile: '',
      show: false,
      test: 'a',
      currentDate: date,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  CheckTripsDate = () => {

    //this function check if the Trip's date passed

    //let apiUrlCheckDate = `http://localhost:51566/api/NewTrip`;
    let apiUrlCheckDate = `https://proj.ruppin.ac.il/igroup47/prod/api/NewTrip`;

    fetch(apiUrlCheckDate)
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("GET dates data from SQL= ", result);
          // result.map(st => console.log(st.Fname)); // all Fname in Users_Expa
          this.setState({
            dates_data_sql: result,
          })

          for (let index = 0; index < result.length; index++) {

            console.log(this.state.currentDate)
            var TripDate = result[index].Date.replace('"', '');
            var TripDate = new Date(TripDate);
            const dateFromSql = TripDate.getFullYear() + '-' + (TripDate.getMonth() + 1) + '-' + TripDate.getDate();

            console.log(dateFromSql)

            if (this.state.currentDate > dateFromSql) {

              console.log(result[index].Name)
              this.ChangeActiveToFalse(result[index].Name);

            }


          }


          // for (let index = 0; index < result.length; index++) {

          //   console.log(this.state.currentDate)
          //   var TripDate = result[3].Date.replace('"', '');
          //   var TripDate = new Date(TripDate);
          //   const dateFromSql = TripDate.getFullYear() + '-' + (TripDate.getMonth() + 1) + '-' + TripDate.getDate();

          //   console.log(dateFromSql)

          //   if (this.state.currentDate >= dateFromSql) {

          //     console.log(result[3].Name)
          //     this.ChangeActiveToFalse(result[3].Name);

          //   }

          // }




        },
        (error) => {
          console.log("err GET=", error);
        });

  }


  ChangeActiveToFalse = (tripName) => {

    console.log(tripName)
    const zero = false;
    //let apiUrlChangeTripToFalse = `http://localhost:51566/api/ParticipantsInTrip/tripName/` + tripName + "/changeTripTo/" + zero;
    let apiUrlChangeTripToFalse = `https://proj.ruppin.ac.il/igroup47/prod/api/ParticipantsInTrip/tripName/` + tripName + "/changeTripTo/" + zero;

    fetch(apiUrlChangeTripToFalse, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        // 'Accept': 'application/json; charset=UTF-8'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(newTrip) // body data type must match "Content-Type" header
    })

  }

  componentDidMount = () => { //GET all Users from Users_expa (SQL) onload

    this.CheckTripsDate();

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

      console.log(payload);

      console.log("notification title: " + payload.notification.title);
      console.log("notification body: " + payload.notification.body);
      console.log(payload.notification.body);

      const a = payload.notification.body.split(',');

      console.log(a[0]) //the email of the requester
      console.log(a[1]) // trip name
      console.log(a[2]) // the name of the requester
      console.log(a[3]) // the image of the requester

      this.setState({
        snackBarStatus: true,
        payloadTtile: payload.notification.title,
        payloadBodyEmail: a[0],
        payloadBodyTripName: a[1],
        payloadBodyRequester: a[2],
        payloadBodyRequesterImge: a[3]
      })
    });

    console.log("this.state.data_from_sql " + this.state.data_from_sql)
    console.log("in componentDidMount function");

    //let apiUrl = `http://localhost:51566/api/User`;
    let apiUrl = `https://proj.ruppin.ac.il/igroup47/prod/api/User`;

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


    //let apiUrl1 = `http://localhost:51566/api/Questionnaire`;
    let apiUrl1 = `https://proj.ruppin.ac.il/igroup47/prod/api/Questionnaire`;
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



    //get all Token_expa from SQL
    //let apiUrl2 = `http://localhost:51566/api/Token`;
    let apiUrl2 = `https://proj.ruppin.ac.il/igroup47/prod/api/Token`;

    fetch(apiUrl2)
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("GET Token data from SQL= ", result);
          // result.map(st => console.log(st.Fname)); // all Fname in Users_Expa
          this.setState({
            Token_fromSQL: result,
          })
        },
        (error) => {
          console.log("err GET=", error);
        });

  }

  accpetUserFunction = () => {


    console.log("you will accept " + this.state.payloadBodyEmail + " for this trip: " + this.state.payloadBodyTripName)

    //let apiUrl = `http://localhost:51566/api/ParticipantsInTrip`;
    let apiUrl = `https://proj.ruppin.ac.il/igroup47/prod/api/ParticipantsInTrip`;

    const Participant = {
      TripName: this.state.payloadBodyTripName,
      AdminEmail: localStorage.getItem('user_email'),
      ParticipantEmail: this.state.payloadBodyEmail,
      Active: true
    }

    ////POST To Participants_in_Trip SQL TABLE
    fetch(apiUrl, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        // 'Accept': 'application/json; charset=UTF-8'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(Participant) // body data type must match "Content-Type" header
    })

  }


  deniedUserFunction = () => {

    console.log("you just denied " + this.state.payloadBodyEmail + " from this trip: " + this.state.payloadBodyTripName)

  }

  accpetUserFunctionFromModal = () => {

    alert("you have a new participant in your trip!")
    this.setState({ show: false });
    this.accpetUserFunction();

    this.accpetUserFunction();

  }

  deniedUserFunctionFromModal = () => {

    alert("maybe next trip")
    this.setState({ show: false });

  }

  // moveto() {
  //   alert("hey")
  //   return(
  //     // <Webcam />
  //     <h1>ken</h1>
  //     );
  // }

  render() {
    return (

      <div className="App">

        <Snackbar
          style={{ marginBottom: 575 }}
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
              <Button color="secondary" size="small" onClick={this.showModal}> VIEW </Button>
              <Button color="secondary" size="small" onClick={this.accpetUserFunction}> ACCEPT </Button>
              <Button color="secondary" size="small" onClick={this.deniedUserFunction}> DENIED </Button>
            </React.Fragment>
          }
        />
        <Modal handleDENIED={this.deniedUserFunctionFromModal} handleACCEPT={this.accpetUserFunctionFromModal} show={this.state.show} handleClose={this.hideModal} name={this.state.payloadBodyRequester} email={this.state.payloadBodyEmail} img={this.state.payloadBodyRequesterImge}> </Modal>
        {/* <ReactNotification /> */}
        {/* <Button color="primary" onClick={<CameraOpen/>}>Open Camera</Button> */}
        <Switch>
          <Route exact path="/">
            <CCLoginPage dataFromApptoLoginPage={this.state.data_from_sql} TokenNumberFromBrowser={this.state.token_num} />
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
          <Route exact path="/main_menu_page/my_trips"   >
            <CCMyTrip />
          </Route>
          <Route exact path="/main_menu_page/search_trip_page" >
            <CCSearchPage />
          </Route>
          <Route exact path="/trip_page">
            {/* <Route exact path="/main_menu_page/trip_page?"{...localStorage.getItem('trip_name')} > */}
            <CCTripPage />
          </Route>
        </Switch>


      </div>
    )
  }
}

export default withRouter(App);

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyAYat-h4SLP816AQyGfE6s5QTUvmalLiXg")
// })(App)