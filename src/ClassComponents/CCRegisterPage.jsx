import React, { Component } from 'react'
import { Form, Button, ButtonGroup, DropdownButton, Image, ProgressBar, Col, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { ButtonDropdown, DropdownMenu, DropdownToggle, Row, UncontrolledButtonDropdown } from 'reactstrap';
import classes from './BlogCard.module.css';
import '../MyStyle.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Swal from 'sweetalert2';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { SettingsOverscanOutlined } from '@material-ui/icons';


export default class CCRegisterPage extends Component {

    commentSection = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            opacity: 0.4,
            email: '',
            fname: '',
            lname: '',
            password: '',
            cPassword: '',
            data_from_sql: '',
            dropdownOpen: false,
            setOpen: false,
            setValue: '50',
            value: ''
        }
    }

    clearForm = () => {
        this.setState({
            email: '',
            password: '',
            cPassword: '',
            fname: '',
            lname: '',
            // data_from_sql:[...],

        })
    }

    componentDidMount = () => { //GET all Users from Users_expa (SQL) onload
        window.scrollTo(0, 0);
        localStorage.clear(); //clear local storge onload

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
                    console.log('the first row in this table is = ', result[0].Fname + " " + result[0].Lname + " age: " + result[0].Age + " email: " + result[0].Email);
                    this.setState({ data_from_sql: result });
                },
                (error) => {
                    console.log("err GET=", error);
                });
    }


    goTO = () => {

        if (this.state.emaill == '' || this.state.password == '') {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Some Details Are Missing",
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                window.location.reload(false)
            })


        }

        else if (this.state.data_from_sql.find((user => user.Email == this.state.email))) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Hi " + this.state.email + " you are allready sign up before !",
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                window.location.reload(false)
            })

        }

        else if (this.state.password != this.state.cPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Confirm Password Missing Details - Please Insert Again ",
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                window.location.reload(false)
            })
        }

        else {
            // Swal.fire({
            //     position: 'center',
            //     icon: 'success',
            //     title: 'Hi, Your Sign UP Successfully',
            //     imageHeight: 1500,
            //     showConfirmButton: true,
            //     Onclick: () => { Swal.clickConfirm() }
            // }).then(() => {
            //     window.location.reload(false)
            // })

            window.scrollTo({ top: 530, behavior: 'smooth' })
            this.setState(prevState => ({
                opacity: 1
            }))
            this.handle();
        }

    }


    handle = () => {
        alert("suces")
        const newUser = {
            Email: this.state.email,
            Password: this.state.password,
            Fname: this.state.fname,
            Lname: this.state.lname,
            Age: 17

        }

        let apiUrl = `http://localhost:53281/api/User`;

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
            body: JSON.stringify(newUser) // body data type must match "Content-Type" header
        }).then(response =>
            this.clearForm()
        );
    }
    toggle = () => this.state.setOpen(!this.state.dropdownOpen);


    render() {
        return (

            <div className={classes.NewBLogCard}>
                <Container>
                    <div className={classes.Container} >
                        <Button variant="secondary" size="sm" href="/" className="but" /*onClick={() => HandleClick()}*/>BACK</Button>
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/7S6XfNZ/circle-cropped.png" style={{ width: '15vh', height: '15vh', marginTop: '10px' }} />
                        <h1 className="ExPa" > Create an Account </h1>

                        <form>
                            <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" onChange={(e) => this.setState({ email: e.target.value })} autoFocus />
                            <Row>
                                <Col>
                                    <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="fname" label="First Name" name="fname" autoComplete="First Name" onChange={(e) => this.setState({ fname: e.target.value })} autoFocus />
                                </Col>
                                <Col>
                                    <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="lname" label="Last Name" name="lname" autoComplete="Last Name" onChange={(e) => this.setState({ lname: e.target.value })} autoFocus />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={(e) => this.setState({ password: e.target.value })} />
                                </Col>
                                <Col>
                                    <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth name="Cpassword" label="Confirm" type="password" id="Cpassword" autoComplete="confirm-password" onChange={(e) => this.setState({ cPassword: e.target.value })} />
                                </Col>
                            </Row>
                            <br></br>
                            <Button fullWidth variant="primary" size="lg" onClick={this.goTO}>GET STARTED</Button>
                            <br></br><br></br><br></br><br></br>

                            <div id="part2" style={{ opacity: this.state.opacity }}>
                                <h4>What is Your Gender ?</h4>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                    <Button>Male</Button>&nbsp;
                                    <Button>Female</Button>
                                </ButtonGroup>
                                <br></br><br></br><br></br>

                                <h4>How Old Are You ?</h4>
                                <RangeSlider value={this.state.setValue} onChange={(e) => this.setState({ setValue: e.target.value })} />
                                <br></br>

                                <h4>What Type of Vehicle Do You Own ?</h4>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                    <Button>Jeep</Button>&nbsp;&nbsp;
                                    <Button>ATV</Button>&nbsp;&nbsp;
                                    <Button>RZR</Button>&nbsp;&nbsp;
                                    <Button>Motorcycle</Button>&nbsp;&nbsp;
                                    <Button>Other</Button>
                                </ButtonGroup>


                                <br></br><br></br><br></br><br></br>


                                <h4>Would You Like To Travel With Other Friends ?</h4>
                                <DropdownButton as={ButtonGroup} title="Would You Like To Travel With Other Friends ?" id="bg-vertical-dropdown-1">
                                    <DropdownItem eventKey="1">Sure !</DropdownItem>
                                    <DropdownItem eventKey="2">Only By My Own</DropdownItem>
                                    <DropdownItem eventKey="3">With My Closest Friends</DropdownItem>
                                </DropdownButton>


                                <br></br>
                                {/*progressbar */}

                                {/* <ProgressBar animated now={95} /> */}

                                {/* <div className="dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="secondary btn-sm"
                                            id="dropdown-basic">
                                            Language
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                                            <Dropdown.Item href="#" >Arabic</Dropdown.Item>
                                            <Dropdown.Item href="#">English</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div> */}


                                {/* <Form>
                                    <Form.Group controlId="formBasicRange">
                                        <Form.Label>Range</Form.Label>
                                        <Form.Control type="range" />
                                    </Form.Group>
                                </Form> */}
                                {/* 
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle caret>
                                        Dropdown
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown> */}

                                {/* <ButtonGroup>
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>


                                <ButtonGroup>
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle caret>
                                            Dropdown
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Dropdown Link</DropdownItem>
                                            <DropdownItem>Dropdown Link</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </ButtonGroup>


                                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                    <DropdownItem eventKey="1">Dropdown link</DropdownItem>
                                    <DropdownItem eventKey="2">Dropdown link</DropdownItem>
                                </DropdownButton>

 */}

                            </div>
                        </form>
                    </div>
                </Container >
            </div>
        )
    }
}





