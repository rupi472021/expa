import React, { Component } from 'react';
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default class CCCreateNewTrip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trip_name: '',
            trip_date: '',
            vehicle_type: '',
            trip_nights: '',
            trip_area: '',

        }
    };

    checkValidationbtn = () => {
        if (this.state.trip_name == '' || this.state.trip_date == '' || this.state.vehicle_type == '' || this.state.trip_nights == '') {
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

    render() {
        return (
            <div style={{ backgroundColor: '#1d21243b', height: '100vh' }}>
                <div><br></br>
                    Hi {localStorage.getItem('user_fname')}, Choose Your Preference For the Perfect Trip!
                </div><br></br>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label> Trip Name: </Form.Label>
                        <Form.Control style={{ width: '75%', marginLeft: 50 }} type="text" placeholder="Enter Your Trip Name" size='small' onChange={(e) => this.setState({ trip_name: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formBasicDate">
                        <Form.Label>Trip Start Date and Time:</Form.Label>
                        <Form.Control style={{ width: '75%', marginLeft: 50 }} type="datetime-local" timeFormat="YYYY-MM-DD HH:mm" onChange={(a) => this.setState({ trip_date: JSON.stringify(a.target.value) })} />
                    </Form.Group>
                    <Form>
                        Number of Nights:
                        {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3"><br></br>
                            <Form.Check value="0" onChange={(zero) => this.setState({ trip_nights: zero.target.value })} inline label="0" type={type} id="0" />
                            <Form.Check value="1" onChange={(one) => this.setState({ trip_nights: one.target.value })} inline label="1" type={type} id={`inline-${type}-1`} />
                            <Form.Check value="2" onChange={(two) => this.setState({ trip_nights: two.target.value })} inline label="2" type={type} id={`inline-${type}-2`} />
                            <Form.Check value="3" onChange={(three) => this.setState({ trip_nights: three.target.value })} inline label="3" type={type} id={`inline-${type}-3`} />
                        </div>
                    ))}
                    </Form>
                    <Form>
                        Trip Area:
                        {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3"><br></br>
                            <Form.Check value="North" onChange={(North) => this.setState({ trip_area: North.target.value })} inline label="North" type={type} id="0" />
                            <Form.Check value="South" onChange={(South) => this.setState({ trip_area: South.target.value })} inline label="South" type={type} id={`inline-${type}-1`} />
                            <Form.Check value="East" onChange={(East) => this.setState({ trip_area: East.target.value })} inline label="East" type={type} id={`inline-${type}-2`} />
                            <Form.Check value="West" onChange={(West) => this.setState({ trip_area: West.target.value })} inline label="West" type={type} id={`inline-${type}-3`} />
                        </div>
                    ))}
                    </Form>
                </Form><br></br>
                <DropdownButton id="dropdown-split-variants" title="Trip's Vehicle Type:">
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item onClick={(ATV) => this.setState({ vehicle_type: ATV.target.value })} as="button" value="ATV"> ATV </Dropdown.Item>
                    <Dropdown.Item onClick={(JEEP) => this.setState({ vehicle_type: JEEP.target.value })} as="button" value="JEEP"> JEEP </Dropdown.Item>
                    <Dropdown.Item onClick={(RZR) => this.setState({ vehicle_type: RZR.target.value })} as="button" value="RZR"> RZR </Dropdown.Item>
                    <Dropdown.Item onClick={(Motorcycle) => this.setState({ vehicle_type: Motorcycle.target.value })} as="button" value="Motorcycle"> Motorcycle </Dropdown.Item>
                    <Dropdown.Item onClick={(Other) => this.setState({ vehicle_type: Other.target.value })} as="button" value="Other"> Other </Dropdown.Item>
                </DropdownButton><br></br>
                <Button variant="primary" type="button" onClick={() => alert("your trip name is: " + this.state.trip_name + " on this date & time: " + this.state.trip_date + " numbers of nights: " + this.state.trip_nights + " Trip area: " + this.state.trip_area + " and vehicle type is: " + this.state.vehicle_type)} > Publish Trip </Button><br></br><br></br>
                <Button variant="secondary" size="sm" className="but" onClick={this.backbtn}> Main Menu </Button>
            </div >
            // onClick={() => alert("your trip name is: " + this.state.trip_name + " on this date & time: " + this.state.trip_date + " numbers og nights: " +this.state.trip_nights+ " Trip area: " +this.state.trip_area+ " and vehicle type is: " +this.state.vehicle_type)}
        )
    }
}
