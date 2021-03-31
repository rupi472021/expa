import React, { Component } from 'react';
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
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
        }
    };

    checkValidationbtn = () => {
        if (this.state.trip_name == '' || this.state.trip_date == '' || this.state.vehicle_type == '' || this.state.trip_nights == '' || this.state.trip_area == ' ' || this.state.num_of_participants == '' || this.state.with_children == '' || this.state.match_percent == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "All fields should be filled",
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                window.location.reload(false)
            })
        }
        else { this.publish() }
    }

    publish = () => {
        //alert("in publish function")

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

        let apiUrl = `http://localhost:54976/api/NewTrip`;
        ////POST
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
                //window.location.href = "http://localhost:3000/main_menu_page"
                this.getmatch();
            })
        );
    }

    getmatch = () => {

        console.log("in getmatch function");
        let apiUrl = `http://localhost:54976/api/Questionnaire?matchPercent=` + this.state.match_percent;

        fetch(apiUrl)
            .then(res => {
                console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("GET match SQL= ", result);
                    result.map(st => console.log(result)); // all Fname in Users_Expa
                    this.setState({
                        match_from_SQL: result,
                    })
                },
                (error) => {
                    console.log("err GET=", error);
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

    render() {
        return (
            <div style={{ backgroundColor: '#1d21243b', height: '100%' }}>
                <div><Button variant="secondary" size="sm" onClick={this.backbtn} className="but"> Main Menu </Button></div>
                <div>
                    <div><br></br>
                    Hi {localStorage.getItem('user_fname')}, Choose Your Preference For the Perfect Trip!
                </div><br></br>
                    <Form>
                        <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="dense" required fullWidth id="tripname" label="Trip Name" name="tripname" autoComplete="tripname" onChange={(e) => this.setState({ trip_name: e.target.value })} autoFocus />
                        Trip Start Date {'&'} Time:
                        <TextField type="datetime-local" style={{ backgroundColor: 'white' }} variant="outlined" margin="dense" required fullWidth id="tripname" name="date" autoComplete="date" onChange={(d) => this.setState({ trip_date: JSON.stringify(d.target.value) })} autoFocus />
                        {/* <Form.Group controlId="formBasicDate">
                            <Form.Label>Trip Start Date and Time:</Form.Label>
                            <Form.Control style={{ width: '75%', marginLeft: 50 }} type="datetime-local" timeFormat="YYYY-MM-DD HH:mm" onChange={(a) => this.setState({ trip_date: JSON.stringify(a.target.value) })} />
                        </Form.Group> */}
                        <Form>
                            Number of Nights:
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3"><div></div>
                                <Form.Check value="0" onChange={(zero) => this.setState({ trip_nights: zero.target.value })} inline label="0" type={type} id="0" />
                                <Form.Check value="1" onChange={(one) => this.setState({ trip_nights: one.target.value })} inline label="1" type={type} id={`inline-${type}-1`} />
                                <Form.Check value="2" onChange={(two) => this.setState({ trip_nights: two.target.value })} inline label="2" type={type} id={`inline-${type}-2`} />
                                <Form.Check value="3" onChange={(three) => this.setState({ trip_nights: three.target.value })} inline label="3" type={type} id={`inline-${type}-3`} />
                            </div>
                        ))}
                        </Form>
                        <Form>
                            <div>Trip Area:</div>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3"><br></br>
                                    <Form.Check value="North" onChange={(North) => this.setState({ trip_area: North.target.value })} inline label="North" type={type} id="0" />
                                    <Form.Check value="South" onChange={(South) => this.setState({ trip_area: South.target.value })} inline label="South" type={type} id={`inline-${type}-1`} />
                                    <Form.Check value="East" onChange={(East) => this.setState({ trip_area: East.target.value })} inline label="East" type={type} id={`inline-${type}-2`} />
                                    <Form.Check value="West" onChange={(West) => this.setState({ trip_area: West.target.value })} inline label="West" type={type} id={`inline-${type}-3`} />
                                </div>
                            ))}
                        </Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label> Number of Participants:</Form.Label>
                            <Form.Control style={{ width: '50%', marginLeft: 100 }} type="number" placeholder="Number of Participants" size='small' onChange={(number) => this.setState({ num_of_participants: number.target.value })} />
                        </Form.Group>
                    </Form>
                    <div> Trip's Vehicle Type: </div>
                    <DropdownButton defult="D" title={this.state.vehicle_type}>
                        <Dropdown.Item onClick={(ATV) => this.setState({ vehicle_type: ATV.target.value })} as="button" value="ATV"> ATV </Dropdown.Item>
                        <Dropdown.Item onClick={(JEEP) => this.setState({ vehicle_type: JEEP.target.value })} as="button" value="JEEP"> JEEP </Dropdown.Item>
                        <Dropdown.Item onClick={(RZR) => this.setState({ vehicle_type: RZR.target.value })} as="button" value="RZR"> RZR </Dropdown.Item>
                        <Dropdown.Item onClick={(Motorcycle) => this.setState({ vehicle_type: Motorcycle.target.value })} as="button" value="Motorcycle"> Motorcycle </Dropdown.Item>
                        <Dropdown.Item onClick={(Other) => this.setState({ vehicle_type: Other.target.value })} as="button" value="Other"> Other </Dropdown.Item>
                    </DropdownButton><br></br>
                    <div> Childrens ?
                    <Checkbox value="yes" onChange={(yes) => this.setState({ with_children: yes.target.value })} /> Yes
                    <Checkbox value="no" onChange={(no) => this.setState({ with_children: no.target.value })} /> No
                    </div>
                    <h6>I want At least {this.state.match_percent}% match with my ExPa!</h6>
                    <RangeSlider value={this.state.match_percent} onChange={(match) => this.setState({ match_percent: match.target.value })} />
                    {/* <Checkbox value="50" onChange={(fifty) => this.setState({ match_percent: fifty.target.value })} /> 50% and above
                    <Checkbox value="70" onChange={(seventy) => this.setState({ match_percent: seventy.target.value })} /> 70% and above
                    <br></br>
                    <Checkbox value="90" onChange={(ninety) => this.setState({ match_percent: ninety.target.value })} /> 90% and above
                    <Checkbox value="0" onChange={(none) => this.setState({ match_percent: none.target.value })} /> don't care */}
                    <br></br>
                    <Button variant="primary" type="button" onClick={this.checkValidationbtn} > Publish Trip </Button>
                </div >
            </div>
        )
    }
}
