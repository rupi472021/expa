import React, { Component } from 'react';
import { Form, Button, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';
import RangeSlider from 'react-bootstrap-range-slider';

export default class CCCreateNewTrip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trip_name: '',
            trip_date: '',
            trip_time: '',
            trip_nights: '',
            trip_area: '',
            num_of_participants: '',
            vehicle_type: '',
            with_children: '',
            match_percent: '',
            match_from_SQL: '',
            temparray: [],
            tempemail: '',
            visibility: 'hidden',
            disable: true,
            Trip_data_from_sql: [],
        }
    };

    componentDidMount = () => { //GET all Trips from Trip_Cretia (SQL) onload
        console.log("in componentDidMount function");

        let apiUrl = `http://localhost:53281/api/NewTrip`;
        //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/NewTrip`;

        fetch(apiUrl)
            .then(res => {
                console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("GET all trips data from SQL= ", result);
                    //   result.map(st => console.log(st.Name)); // all Fname in Users_Expa
                    this.setState({
                        Trip_data_from_sql: result,
                    })
                },
                (error) => {
                    console.log("err GET=", error);
                });
    }


    checkValidationbtn = (event) => {
        ///Validate that "Trip name" is Available.
        console.log("check valid");
        console.log(this.state.Trip_data_from_sql);
        if (this.state.Trip_data_from_sql.find((trip => trip.Name == this.state.trip_name))) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Hey ! Trip Name : " + this.state.trip_name + " already exist ! Please Try another one",
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                window.location.reload(false)
            })
        }
        ///Validate Blanks Fields.
        else if (this.state.trip_name == '' || this.state.trip_date == '' || this.state.vehicle_type == '' || this.state.trip_nights == '' || this.state.trip_area == ' ' || this.state.num_of_participants == '' || this.state.with_children == '' || this.state.match_percent == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "All fields should be filled",
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                event.preventDefault();
            })
        }
        else { this.publish() }
    }


    publish = () => {
        //alert("in publish function")
        this.setState(prevState => ({
            disable: false,
        }))

        const input = this.state.trip_date;
        const [date, time] = input.split('T');

        const newTrip = {
            Admin_email: localStorage.getItem('user_email'),
            Name: this.state.trip_name,
            Date: date,
            Time: time,
            NumOfnights: this.state.trip_nights,
            Area: this.state.trip_area,
            Participants: this.state.num_of_participants,
            VehicleType: this.state.vehicle_type,
            WithChildren: this.state.with_children,
            MatchPercent: this.state.match_percent
        }

        let apiUrl = `http://localhost:53281/api/NewTrip`;
        //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/NewTrip`;

        ////POST To TRIP_Criteria SQL TABLE
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
            body: JSON.stringify(newTrip) // body data type must match "Content-Type" header
        }).then(response =>
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Trip has been publish',
                showConfirmButton: true,
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                this.getmatch();
                // window.location.href = "http://localhost:3000/main_menu_page"

            })
        );
    }

    getmatch = () => {
        ///Getting all the Users
        console.log("in getmatch function");
        let apiUrl = `http://localhost:54976/api/Questionnaire/getSpecific/${localStorage.getItem('user_email')}/${this.state.match_percent}`
        //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/Questionnaire/getSpecific/${localStorage.getItem('user_email')}/${this.state.match_percent}`

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                //this.state.temparray=[];
                console.log("Relevant Users Algoritem -  data from sql:")
                console.log(data);
                data.forEach((item) => {
                    this.state.temparray.push({ tempemail: item.Email, match: item.Match / 23 * 100 });
                })
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

    }

    backbtn = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Press Yes to return Main Menu Page",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "http://localhost:3000/main_menu_page"
            }
        })
    }

    checkinputs = () => {

        const input = this.state.trip_date;
        const [date, time] = input.split('T');

        console.log("trip name : " + this.state.trip_name);
        console.log("trip date : " + date);
        console.log("trip time : " + time);
        console.log("trip number of nights : " + this.state.trip_nights);
        console.log("trip area : " + this.state.trip_area);
        console.log("trip participants : " + this.state.num_of_participants);
        console.log("trip vehicle tipe : " + this.state.vehicle_type);
        console.log("trip with children : " + this.state.with_children);
        console.log("trip name : " + this.state.match_percent);
    }

    editTripDetails = () => {

        const input = this.state.trip_date;
        const [date, time] = input.split('T');

        const newTrip = {
            Admin_email: localStorage.getItem('user_email'),
            Name: this.state.trip_name,
            Date: date,
            Time: time,
            NumOfnights: this.state.trip_nights,
            Area: this.state.trip_area,
            Participants: this.state.num_of_participants,
            VehicleType: this.state.vehicle_type,
            WithChildren: this.state.with_children,
            MatchPercent: this.state.match_percent
        }


        // event.preventDefault(); 
        let apiUrl = `http://localhost:54976/api/NewTrip/` + this.state.trip_name + "/" + this.state.match_percent + "/" + this.state.with_children;
        //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/NewTrip/`+this.state.trip_name+"/"+this.state.match_percent+"/"+this.state.with_children;

        fetch(apiUrl, {
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



    render() {
        return (
            <div style={{ backgroundColor: '#1d21243b', height: '100%' }}>
                <div><Button variant="secondary" size="sm" onClick={this.backbtn} className="but"> Main Menu </Button></div>
                <div>
                    <div><br></br>
                        <h4 style={{ fontWeight: "bold", width: '90%', boxShadow: '0px 50px 150px 10px yellow', fontSize: '30px', backgroundColor: 'gold', borderRadius: '15px', marginLeft: '21px' }}>
                            Hey {localStorage.getItem('user_fname')}
                        </h4>
                        <h4 style={{ fontWeight: "bold" }}>
                            Choose Your Preference For Your Perfect Trip
                        </h4>
                    </div><br></br>
                    <Form>
                        <Form.Group controlId="formBasicEmail" style={{ width: '75%', marginLeft: 50 }} >
                            <Form.Control style={{ borderRadius: 20 }} type="text" placeholder="Trip Name*" onChange={(e) => this.setState({ trip_name: e.target.value })} autoFocus /><br></br>
                            <Form.Label style={{ fontWeight: 'bold', fontSize: 20 }} > When ?</Form.Label>
                            <Form.Control style={{ borderRadius: 20 }} type="datetime-local" onChange={(d) => this.setState({ trip_date: JSON.stringify(d.target.value) })} autoFocus />
                        </Form.Group>
                        <Form>
                            <Form.Label style={{ fontWeight: 'bold', fontSize: 20 }} > Nights ? </Form.Label><br></br>
                            <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ trip_nights: e.target.value })}>
                                <Button value="0">0</Button>&nbsp;&nbsp;
                                    <Button value="1">1</Button>&nbsp;&nbsp;
                                    <Button value="2">2</Button>&nbsp;&nbsp;
                                    <Button value="3">3</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                            <h1>{this.state.with_children}</h1>
                            <br></br>

                        </Form>
                        <Form>
                            <Form.Label style={{ fontWeight: 'bold', fontSize: 20 }} > Where ? </Form.Label><br></br>
                            <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ trip_area: e.target.value })}>
                                <Button value="North">North</Button>&nbsp;&nbsp;
                                    <Button value="South">South</Button>&nbsp;&nbsp;
                                    <Button value="East">East</Button>&nbsp;&nbsp;
                                    <Button value="West">West</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                        </Form>
                        <br></br>
                        <Form.Group controlId="formBasicName">
                            <Form.Label style={{ fontWeight: 'bold', fontSize: 20 }} > How Many Partners ? </Form.Label><br></br>
                            <Form.Control style={{ borderRadius: 10, width: '50%', marginLeft: 93 }} type="number" placeholder="Number of Participants" size='small' onChange={(number) => this.setState({ num_of_participants: number.target.value })} />
                        </Form.Group>
                    </Form>

                    <Form.Label style={{ fontWeight: 'bold', fontSize: 20 }} > Vehicle Type ? </Form.Label><br></br>
                    <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ vehicle_type: e.target.value })}>
                        <Button value="Jeep">Jeep</Button>&nbsp;&nbsp;
                                    <Button value="ATV">ATV</Button>&nbsp;&nbsp;
                                    <Button value="RZR">RZR</Button>&nbsp;&nbsp;
                                    <Button value="Motorcycle">Motorcycle</Button>&nbsp;&nbsp;
                                    <Button value="None"> None </Button>
                    </ButtonGroup>

                    <br></br><br></br>
                    <Form.Label style={{ fontWeight: 'bold', fontSize: 20 }} > With Children ? </Form.Label><br></br>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ with_children: e.target.value })}>
                        <Button value="YES">YES</Button>&nbsp;&nbsp;
                                    <Button value="NO">NO</Button>&nbsp;&nbsp;
                                </ButtonGroup>

                    <br></br><br></br>
                    <Form.Label style={{ fontWeight: 'bold', fontSize: 20 }} >I want At least {this.state.match_percent}% match with my ExPa Partners!</Form.Label><br></br>
                    <RangeSlider value={this.state.match_percent} onChange={(match) => this.setState({ match_percent: match.target.value })} />
                    <br></br>
                    <Button disabled={this.state.disable} variant="secondary" type="button" onClick={this.editTripDetails} > Edit Trip </Button>
                    <br></br><h1></h1>
                    <Button style={{marginBottom:'10px'}} variant="success" type="button" onClick={this.checkValidationbtn} > Publish Trip </Button>
                </div >
            </div>
        )
    }
}
