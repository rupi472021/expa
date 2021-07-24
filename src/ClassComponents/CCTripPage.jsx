import React, { Component, useRef } from 'react'
import { AiOutlineRollback } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Form, Button, DropdownButton, Dropdown, ButtonGroup, ProgressBar, CardColumns, Modal, Card } from 'react-bootstrap';
import MediaCard from '../FunctionComponents/FCardMaterialUi';
import MediaCard2 from '../FunctionComponents/FCardMaterialUi2';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FCSimpleBottomNavigation from '../FunctionComponents/FCSimpleBottomNavigation';
import { Container, Row, Col, Table } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import FCEditList from '../FunctionComponents/FCEditList';
//import Weathers from '../Element/EWeather';
import Select from '@material-ui/core/Select';
import { BiCamera } from "react-icons/bi";
import Webcam from "react-webcam";
// import {useRef} from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

<link rel="stylesheet/less" type="text/css" href="styles.less" />

class CCTripPage extends Component {

    //export default class CCTripPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            setValue: '',
            TripsByName: [],
            ParticipantsArray: [],
            opacity: 0.6,
            disabled: true,
            disabled1: true,
            showComponent: false,
            showChecklistComponent: false,
            showParticipantsComponent: false,
            showWeatherComponent: false,
            showCameraComponent: false,
            // Check1: '',
            // Check2: '',
            // Check3: '',
            Check4: '',
            Check5: '',
            Check6: '',
            NumOfPartners: 1,
            arrOfEquipment: ['water', 'Tent', 'Gas', 'Sun Screen'],
            Equipment1: 'Water',
            Equipment2: 'Gas',
            Equipment3: 'Tent',
            Equipment4: 'Kitchen supplies',
            WhoBring1: '',
            WhoBring2: '',
            WhoBring3: '',
            WhoBring4: '',
            WhoBring5: '',
            WhoBring6: '',
            WhoBring7: '',

            b1: '',
            b2: '',
            b3: '',
            b4: '',
            b5: '',
            b6: '',
            b7: '',


        };
        this._onButtonClick = this._onButtonClick.bind(this);
        this._EditListButtonClick = this._EditListButtonClick.bind(this);
        this._ViewParticipantsButtonClick = this._ViewParticipantsButtonClick.bind(this);
        this._onWeatherButtonClick = this._onWeatherButtonClick.bind(this);
        this._onCameraButtonClick = this._onCameraButtonClick.bind(this);



    };

    componentDidMount = () => {
        let apiUrl = `http://localhost:51566/api/NewTrip/getripByName/${localStorage.getItem('trip_name')}/`
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // console.log("The trip for this trip name -  trips data from sql")
                // console.log(data);
                data.forEach((item) => {
                    console.log("item us");
                    console.log(item.Date);
                    this.state.TripsByName.push({ Trip: item });
                    this.setState({ name: item.Name, date: item.Date, email: item.Admin_email, area: item.Area, matchper: item.MatchPercent, numofnight: item.NumOfnights, participants: item.Participants, time: item.Time, vehicle: item.VehicleType, children: item.WithChildren });
                    localStorage.setItem('admin_email', item.Admin_email);
                })
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

        console.log("this.state.TripsByName....");
        console.log(this.state.TripsByName);
        // console.log(this.state.TripsByName[0].Area);
        console.log(this.state.tempName);
        console.log(this.state.email);




        this.getParticipantTripDate();
    }

    getParticipantTripDate() {

        let apiUrl = `http://localhost:51566/api/User/getParticiByName/${localStorage.getItem('trip_name')}/`
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // console.log("The trip for this trip name -  trips data from sql")
                console.log(data);
                data.forEach((item) => {
                    // console.log("item us");
                    // console.log(item.Date);
                    this.state.ParticipantsArray.push({ Partner: item });
                    this.setState({ email: item.Email, fname: item.Fname, lname: item.Lname, image: item.Image });
                })
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

        console.log("this.state.ParticipantsArray....");
        console.log(this.state.ParticipantsArray);

    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    _EditListButtonClick() {

        //Checking if user is The Trip Admin
        if (localStorage.getItem('admin_email') == localStorage.getItem('user_email')) {
            this.setState({
                disabled1: false,
            });
        }

        console.log("in _EditListButtonClick")

        this.setState({ showChecklistComponent: true });

        let apiUrl = `http://localhost:51566/api/TripEquipment`

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

                console.log("The Equipment for this trip -  trip's Equipment data from sql")
                console.log(data); //data is all table
                this.state.filterData = data.filter(e => e.TripName == localStorage.getItem('trip_name'))
                console.log(this.state.filterData) //Equipment per trip

                for (let index = 0; index < this.state.filterData.length; index++) {

                    if (this.state.filterData[index].Eq == 'Water') {
                        this.setState({ b1: this.state.filterData[index].Fname + " " + this.state.filterData[index].Lname })
                    }

                    if (this.state.filterData[index].Eq == 'Gas') {
                        this.setState({ b2: this.state.filterData[index].Fname + " " + this.state.filterData[index].Lname })
                    }

                    if (this.state.filterData[index].Eq == 'Tent') {
                        this.setState({ b3: this.state.filterData[index].Fname + " " + this.state.filterData[index].Lname })
                    }

                    if (this.state.filterData[index].Eq == 'Kitchen supplies') {
                        this.setState({ b4: this.state.filterData[index].Fname + " " + this.state.filterData[index].Lname })
                    }

                }


            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

    }

    _ViewParticipantsButtonClick() {
        this.setState({
            showParticipantsComponent: true,
        });
    }

    _onWeatherButtonClick() {
        this.setState({
            showWeatherComponent: true,
        });
    }

    _onCameraButtonClick() {
        // const webRef=useRef(null);
        // let img="httpL;';'";
        // const showImage=()=>{
        //     img=webRef.current.getScreenshot();


        this.setState({
            showCameraComponent: true,
        });


    }




    CloseEditList = () => {
        this.setState({
            showChecklistComponent: false,
            showComponent: false,
            showParticipantsComponent: false,
            showWeatherComponent: false,
            showCameraComponent: false
        });
    }


    test = () => {

        alert(this.state.ParticipantsArray.length);

    }

    backbtn = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Press Yes to return Main Pgae",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                // localStorage.clear();
                window.location.href = "http://localhost:3000/main_menu_page"
                // window.location.href = "http://proj.ruppin.ac.il/igroup47/prod/"       
            }
        })
    }

    _SaveListButtonClick = () => {

        console.log("in _SaveListButtonClick function")

        console.log("Equipment1 is: " + this.state.Equipment1)
        console.log("Equipment2 is: " + this.state.Equipment2)
        console.log("Equipment3 is: " + this.state.Equipment3)
        console.log("Equipment4 is: " + this.state.Equipment4)

        console.log("WhoBring1 is: " + this.state.WhoBring1)
        console.log("WhoBring2 is: " + this.state.WhoBring2)
        console.log("WhoBring3 is: " + this.state.WhoBring3)
        console.log("WhoBring4 is: " + this.state.WhoBring4)

        if (this.state.WhoBring1 !== '') {

            console.log("you are in the first if")

            const Equipment = {

                BringEmail: this.state.WhoBring1,
                Eq: this.state.Equipment1,
                TripName: this.state.name

            }

            let apiUrl = `http://localhost:51566/api/TripEquipment`;
            //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/NewTrip`;

            ////POST To Trip_Equipment SQL TABLE
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
                body: JSON.stringify(Equipment) // body data type must match "Content-Type" header
            }).then(response =>
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'CheckList was updated successfully',
                    showConfirmButton: true,
                    Onclick: () => { Swal.clickConfirm() }
                }).then(() => {


                })
            );
        }

        if (this.state.WhoBring2 !== '') {

            console.log("you are in the second if")

            const Equipment = {

                BringEmail: this.state.WhoBring2,
                Eq: this.state.Equipment2,
                TripName: this.state.name

            }

            let apiUrl = `http://localhost:51566/api/TripEquipment`;
            //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/NewTrip`;

            ////POST To Trip_Equipment SQL TABLE
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
                body: JSON.stringify(Equipment) // body data type must match "Content-Type" header
            }).then(response =>
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'CheckList was updated successfully',
                    showConfirmButton: true,
                    Onclick: () => { Swal.clickConfirm() }
                }).then(() => {


                })
            );
        }



        if (this.state.WhoBring3 !== '') {

            console.log("you are in the third if")

            const Equipment = {

                BringEmail: this.state.WhoBring3,
                Eq: this.state.Equipment3,
                TripName: this.state.name

            }

            let apiUrl = `http://localhost:51566/api/TripEquipment`;
            //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/NewTrip`;

            ////POST To Trip_Equipment SQL TABLE
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
                body: JSON.stringify(Equipment) // body data type must match "Content-Type" header
            }).then(response =>
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'CheckList was updated successfully',
                    showConfirmButton: true,
                    Onclick: () => { Swal.clickConfirm() }
                }).then(() => {


                })
            );
        }




        if (this.state.WhoBring4 !== '') {

            console.log("you are in the fourth if")

            const Equipment = {

                BringEmail: this.state.WhoBring4,
                Eq: this.state.Equipment4,
                TripName: this.state.name

            }

            let apiUrl = `http://localhost:51566/api/TripEquipment`;
            //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/NewTrip`;

            ////POST To Trip_Equipment SQL TABLE
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
                body: JSON.stringify(Equipment) // body data type must match "Content-Type" header
            }).then(response =>
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'CheckList was updated successfully',
                    showConfirmButton: true,
                    Onclick: () => { Swal.clickConfirm() }
                }).then(() => {


                })
            );
        }





    }

    render() {

        return (
            /*style={{ backgroundColor: '#1d21243b', height: '100%' }}*/
            <div style={{ fontWeight: "bold", boxShadow: '10px 70px 300px 50px  yellow', fontSize: '30px', borderRadius: '15px'}}>
                {/* <h1>{this.state.TripsByName[0].Trip.Name}</h1> */}
                <Button variant="secondary" size="sm" onClick={this.backbtn} className="but"> Main Menu </Button><h1></h1>
                {/* {Weathers} */}
                <div style={{ fontWeight: "bold", boxShadow: '10px 70px 300px 50px  yellow', fontSize: '30px', borderRadius: '15px' }}>
                    <div>
                        <nav class="navbar navbar-inverse" style={{ backgroundColor: 'grey' }}>
                            <Button size="sm" variant="warning" onClick={this._onWeatherButtonClick}><b>Weather</b></Button>
                            <Button size="sm" variant="info" onClick={this._onButtonClick}><b>Info</b></Button>
                            <Button variant="danger" size="sm" onClick={this._ViewParticipantsButtonClick}><b>{this.state.ParticipantsArray.length + 1} / {this.state.participants}</b></Button>
                            <BiCamera size={40} onClick={this._onCameraButtonClick} ></BiCamera>
                        </nav>
                        <div><ProgressBar animated striped variant="success" now={(this.state.ParticipantsArray.length / this.state.participants) * 100} label="Participants Capacity" /></div>


                        <nav class="navbar navbar-inverse" style={{ backgroundColor: 'grey' }}>
                            <h3 style={{ boxShadow: '0px 50px 150px 10px yellow', fontSize: '14px', backgroundColor: 'gold', borderRadius: '2px' }}>&nbsp;&nbsp;AT: <b>{this.state.date}</b>&nbsp;&nbsp;</h3>
                            <h3 style={{ boxShadow: '0px 50px 150px 10px yellow', fontSize: '14px', backgroundColor: 'gold', borderRadius: '2px' }}>&nbsp;&nbsp; Name: <b>{this.state.name}</b>&nbsp;&nbsp;</h3>
                            <h3 style={{ boxShadow: '0px 50px 150px 10px yellow', fontSize: '14px', backgroundColor: 'gold', borderRadius: '2px' }}>&nbsp;&nbsp;Admin: <b>{localStorage.getItem('admin_email')}&nbsp;&nbsp;</b></h3>
                        </nav>



                        {/* <h1>{this.state.name}</h1> */}

                        {/* <FCSimpleBottomNavigation /> */}
                        <Container>
                            <Row>
                                <Col style={{ boxShadow: '0px 0px 150px 10px yellow', fontSize: '14px', borderRadius: '10px' }}>
                                    <h1></h1>
                                    <h5 style={{ fontWeight: "bold", marginRight: '30px', boxShadow: '0px 50px 150px 10px yellow', fontSize: '15px', backgroundColor: 'gold', borderRadius: '15px', marginLeft: '21px' }}>
                                        Travel Checklist
                                    </h5>

                                    <Table striped bordered hover variant="dark" style={{ opacity: this.state.opacity }}>
                                        <thead>
                                            {/* <tr>
                                                <th>Who Bring What </th>
                                            </tr> */}
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <h6>Water</h6>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} onChange={(e) => this.setState({ Check1: e.target.value })}>
                                                        <option value=""></option>
                                                        <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                        {
                                                            this.state.ParticipantsArray?.length > 0 &&
                                                            this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                        }
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                                <h6>Gas</h6>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} onChange={(e) => this.setState({ Check2: e.target.value })}>
                                                        <option value=""></option>
                                                        <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                        {
                                                            this.state.ParticipantsArray?.length > 0 &&
                                                            this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                        }
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                                <h6>Tent</h6>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} onChange={(e) => this.setState({ Check3: e.target.value })}>
                                                        <option value=""></option>
                                                        <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                        {
                                                            this.state.ParticipantsArray?.length > 0 &&
                                                            this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                        }
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                                <h6>Coffee</h6>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} onChange={(e) => this.setState({ Check4: e.target.value })}>
                                                        <option value=""></option>
                                                        <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                        {
                                                            this.state.ParticipantsArray?.length > 0 &&
                                                            this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                        }
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                                <h6>Light</h6>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} onChange={(e) => this.setState({ Check5: e.target.value })}>
                                                        <option value=""></option>
                                                        <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                        {
                                                            this.state.ParticipantsArray?.length > 0 &&
                                                            this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                        }
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Button variant="info" onClick={this._EditListButtonClick}>View List</Button>
                                    <h1></h1>
                                </Col>
                                <Col style={{ boxShadow: '0px 0px 150px 10px ', fontSize: '14px', borderRadius: '10px', borderColor: 'black' }}>
                                    <Map style={{ marginLeft: '-25px', borderRadius: '10px' }} google={this.props.google} zoom={11}>
                                        <Marker onClick={this.onMarkerClick}
                                            name={'Current location'} />
                                        <InfoWindow onClose={this.onInfoWindowClose}>
                                        </InfoWindow>
                                    </Map>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div style={{ boxShadow: '0px 0px 150px 10px yellow', borderRadius: '10px' }}><br></br><br></br>Admin Chat<br></br><br></br><br></br></div>
                    {/* Showing Checklist  */}
                    {this.state.showChecklistComponent ?
                        <Modal
                            show={this.state.showChecklistComponent}
                            onHide={this.CloseEditList}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Travel Checklist</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Table striped bordered hover variant="dark" >

                                    <tbody>
                                        {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus /></td> */}
                                        <tr>
                                            <h5>Water</h5>
                                            <td>
                                                <select onChange={(e) => this.setState({ WhoBring1: e.target.value })}>
                                                    <option value={this.state.b1}>{this.state.b1}</option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Gas</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ WhoBring2: e.target.value })}>
                                                    <option value={this.state.b2}>{this.state.b2}</option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Tent</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ WhoBring3: e.target.value })}>
                                                    <option value={this.state.b3}>{this.state.b3}</option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Kitchen supplies</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ WhoBring4: e.target.value })}>
                                                    <option value={this.state.b4}>{this.state.b4}</option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Coffee</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ WhoBring4: e.target.value })}>
                                                    <option value={this.state.b4}>{this.state.b4}</option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Light</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ WhoBring4: e.target.value })}>
                                                    <option value={this.state.b4}>{this.state.b4}</option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button disabled={this.state.disabled1} style={{ alignItems: 'center' }} variant="primary" onClick={this._SaveListButtonClick}>Save Changes</Button>
                                <Button variant="secondary" onClick={() => this.setState({ showChecklistComponent: false })}  >Close</Button>
                            </Modal.Footer>
                        </Modal> : null
                    }





                    {/* Showing Trip Card */}
                    {this.state.showComponent ?
                        <Modal
                            show={this.state.showComponent}
                            onHide={this.CloseEditList}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                {/* <Modal.Title>Travel Checklist</Modal.Title> */}
                            </Modal.Header>
                            <Modal.Body>
                                <CardColumns>
                                    {
                                        // {this.state.AllTripsBYEmail?.length=0=>{<p>You dont have any </p>}}                    
                                        this.state.TripsByName?.length > 0 &&
                                        this.state.TripsByName?.map((item, key) => <MediaCard2 style={{ backgroundColor: 'yellow' }} name={this.state.name} key={key} date={this.state.date} time={this.state.time} participants={this.state.participants} area={this.state.area} />)
                                    }
                                </CardColumns>

                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={() => this.setState({ showComponent: false })}  >Close</Button>
                                <Button style={{ alignItems: 'center' }} variant="primary">Save Changes</Button> */}
                            </Modal.Footer>
                        </Modal> : null
                    }



                    {/* Showing Participants Card */}
                    {this.state.showParticipantsComponent ?
                        <Modal
                            show={this.state.showParticipantsComponent}
                            onHide={this.CloseEditList}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                {/* <Modal.Title>Travel Checklist</Modal.Title> */}
                            </Modal.Header>
                            <Modal.Body>
                                <CardColumns>
                                    {
                                        // {this.state.AllTripsBYEmail?.length=0=>{<p>You dont have any </p>}}                    
                                        this.state.ParticipantsArray?.length > 0 &&
                                        this.state.ParticipantsArray?.map((item, key) => <Card>
                                            <Card.Img variant="top" src={item.Partner.Image} />
                                            <Card.Body>
                                                <Card.Title>{item.Partner.Fname} {item.Partner.Lname}</Card.Title>
                                                <Card.Text>
                                                    This is a wider card with supporting text below as a natural lead-in to
                                                    additional content. This content is a little bit longer.
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                                            </Card.Footer>
                                        </Card>)
                                    }
                                </CardColumns>

                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={() => this.setState({ showComponent: false })}  >Close</Button>
            <Button style={{ alignItems: 'center' }} variant="primary">Save Changes</Button> */}
                            </Modal.Footer>
                        </Modal> : null
                    }



                    {/* Showing Weather Component */}
                    {this.state.showWeatherComponent ?
                        <Modal
                            show={this.state.showWeatherComponent}
                            onHide={this.CloseEditList}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>In Progress . . .</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>


                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={() => this.setState({ showComponent: false })}  >Close</Button>
<Button style={{ alignItems: 'center' }} variant="primary">Save Changes</Button> */}
                            </Modal.Footer>
                        </Modal> : null
                    }



                    {/* Showing camera Component */}
                    {this.state.showCameraComponent ?
                        <Modal
                            show={this.state.showCameraComponent}
                            onHide={this.CloseEditList}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title className="App">
                                    heys
                                    <Webcam />
                                    {/* <div className="App">
                                    react webcam
                                    <Webcam ref={webRef} />
                                    <button
                                        onClick={() => {
                                            showImage();
                                        }}>
                                        show image in console
                                    </button>
                                    <br />
                                </div> */}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>


                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={() => this.setState({ showComponent: false })}  >Close</Button>
<Button style={{ alignItems: 'center' }} variant="primary">Save Changes</Button> */}
                            </Modal.Footer>
                        </Modal> : null
                    }






                </div >
            </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAYat-h4SLP816AQyGfE6s5QTUvmalLiXg")
})(CCTripPage)


