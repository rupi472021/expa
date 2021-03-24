import React, { Component } from 'react'
import { Form, Button, ButtonGroup, DropdownButton, Image, ProgressBar, Col, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { ButtonDropdown, DropdownMenu, DropdownToggle, Input, Row, UncontrolledButtonDropdown } from 'reactstrap';
import classes from './BlogCard.module.css';
import '../MyStyle.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Swal from 'sweetalert2';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { SettingsOverscanOutlined } from '@material-ui/icons';
import Google_RegisterPage from '../ServiceComponents/GoogleRegisterPage';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import GoogleRegisterPage from '../ServiceComponents/GoogleRegisterPage';


const useStyles = makeStyles((theme) => ({

    chip: {
        margin: theme.spacing(0.5),
        marginRight: 20
    },

}));









export default class CCRegisterPage extends Component {

    commentSection = React.createRef();

    constructor(props) {
        super(props);
        this.datafromgoogle = this.datafromgoogle.bind(this);
        this.state = {
            opacity: 1,
            email: '',
            fname: '',
            lname: '',
            age: '',
            password: '',
            cPassword: '',
            data_from_sql: '',
            dropdownOpen: false,
            setOpen: false,
            setValue: '50',
            value: '',
            q1: '',
            q3: '',
            q4: '',
            disabled: false,
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

    componentDidMount = () => {

        window.scrollTo(0, 0);
        localStorage.clear(); //clear local storge onload
        console.log(this.props.dataFromApptoRegisterPage);
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

        else if (this.props.dataFromApptoRegisterPage.find((user => user.Email == this.state.email))) {
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
                window.location.reload(false);
            })
        }

        else {
            window.scrollTo({ top: 530, behavior: 'smooth' })
            this.setState(prevState => ({
                opacity: 1,
                disabled: true,


            }))


            // Swal.fire({
            //     position: 'top-down',
            //     icon: 'success',
            //     title: 'Hi you loggin successfully to ExPa!',
            //     imageHeight: 1500,
            //     showConfirmButton: true,
            // })

            // this.handle();
        }

    }

    postTosqlQues = () => {
        alert("Post to Answer")
        if (this.state.q1 == '' || this.state.q3 == '' || this.state.q4 == '' || this.state.age == '') {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Some Details Are Missing",
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                window.location.reload(false)
            })


        }
        else {
            const newAnswer = {
                Email: this.state.email,
                Q1: this.state.q1,
                Q2: this.state.q3,
                Q3: this.state.q4,
            }

            let apiUrl = `http://localhost:54976/api/Questionnaire`;

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
                body: JSON.stringify(newAnswer) // body data type must match "Content-Type" header
            }).then(response =>
                this.clearForm()
            );

            this.handle();
        }
    }


    handle = () => {
        alert("Getting IN")

        const newUser = {
            Email: this.state.email,
            Password: this.state.password,
            Fname: this.state.fname,
            Lname: this.state.lname,
            Age: this.state.age
        }

        let apiUrl = `http://localhost:54976/api/User`;

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

    datafromgoogle = (d) => {
        alert(d);
    }

    render() {
        return (
            <div className={classes.NewBLogCard}>
                <Container>
                    <div className={classes.Container} >
                        <Button variant="secondary" size="sm" href="/" className="but"> BACK </Button>
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/7S6XfNZ/circle-cropped.png" style={{ width: '15vh', height: '15vh', marginTop: '10px' }} />
                        <h1 className="ExPa" > Create an Account </h1>
                        <form>
                            <div id="part1" >
                                Access with: <GoogleRegisterPage />
                                <TextField disabled={this.state.disabled} style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" onChange={(e) => this.setState({ email: e.target.value })} autoFocus />
                                <Row>
                                    <Col>
                                        <TextField disabled={this.state.disabled} style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="fname" label="First Name" name="fname" autoComplete="First Name" onChange={(e) => this.setState({ fname: e.target.value })} autoFocus />
                                    </Col>
                                    <Col>
                                        <TextField disabled={this.state.disabled} style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="lname" label="Last Name" name="lname" autoComplete="Last Name" onChange={(e) => this.setState({ lname: e.target.value })} autoFocus />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TextField disabled={this.state.disabled} style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={(e) => this.setState({ password: e.target.value })} />
                                    </Col>
                                    <Col>
                                        <TextField disabled={this.state.disabled} style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth name="Cpassword" label="Confirm" type="password" id="Cpassword" autoComplete="confirm-password" onChange={(e) => this.setState({ cPassword: e.target.value })} />
                                    </Col>
                                </Row>
                                <br></br>
                                <Button fullWidth variant="info" size="lg" onClick={this.goTO} disabled={this.state.disabled} >Let's GO !</Button>
                                <br></br><br></br><br></br><br></br>
                            </div>

                            {/* Questionnaire */}
                            <div id="part2" style={{ opacity: this.state.opacity }}>
                                <h4>What is Your Gender ?</h4>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                    <Button value="Male" onClick={(e) => this.setState({ q1: e.target.value })}>Male</Button>&nbsp;
                                    <Button value="Female" onClick={(e) => this.setState({ q1: e.target.value })}>Female</Button>
                                </ButtonGroup>
                                {/* <h4>{this.state.q1}</h4> */}

                                <br></br><br></br><br></br>

                                <h4>How Old Are You ?</h4>
                                <RangeSlider value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} />
                                <h2>{this.state.age}</h2>
                                <br></br>

                                <h4>What Type of Vehicle Do You Own ?</h4>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q3: e.target.value })}>
                                    <Button value="Jeep">Jeep</Button>&nbsp;&nbsp;
                                    <Button value="ATV">ATV</Button>&nbsp;&nbsp;
                                    <Button value="RZR">RZR</Button>&nbsp;&nbsp;
                                    <Button value="Motorcycle">Motorcycle</Button>&nbsp;&nbsp;
                                    <Button value="Other">Other</Button>
                                </ButtonGroup>
                                {/* <h2>{this.state.q3}</h2> */}

                                <br></br><br></br><br></br><br></br>
                                <h4>Would You Like To Travel With Other Friends ?</h4>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q4: e.target.value })}>
                                    <Button value="Sure">Sure !</Button>&nbsp;&nbsp;
                                    <Button value="By My Own">Only By My Own</Button>&nbsp;&nbsp;
                                    <Button value="Closest Friends">With My Closest Friends</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                {/* <h2>{this.state.q4}</h2> */}
                                <br></br><br></br>
                                <Button fullWidth variant="success" size="lg" onClick={this.postTosqlQues}>GET STARTED</Button>

                                {/* <DropdownButton as={ButtonGroup} title="Would You Like To Travel With Other Friends ?" id="bg-vertical-dropdown-1">
                                    <DropdownItem eventKey="1">Sure !</DropdownItem>
                                    <DropdownItem eventKey="2">Only By My Own</DropdownItem>
                                    <DropdownItem eventKey="3">With My Closest Friends</DropdownItem>
                                </DropdownButton> */}

                                {/* <Row>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Check aria-label="option 1" />
                                    <Form.Check aria-label="option 1" />
                                    <Form.Check aria-label="option 1" />
                                </Row> */}
                                <br></br>


                                {/* <div>
                                    <Chip className={classes.chip} label="Extra Soft" />
                                    <Chip className={classes.chip} label="Soft" />
                                    <Chip className={classes.chip} label="Medium" />
                                    <Chip className={classes.chip} label="Hard" />
                                </div> */}

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





// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Chip from '@material-ui/core/Chip';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         maxWidth: 360,
//         backgroundColor: theme.palette.background.paper,
//     },
//     chip: {
//         margin: theme.spacing(0.5),
//     },
//     section1: {
//         margin: theme.spacing(3, 2),
//     },
//     section2: {
//         margin: theme.spacing(2),
//     },
//     section3: {
//         margin: theme.spacing(3, 1, 1),
//     },
// }));

// export default function MiddleDividers() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <div className={classes.section1}>
//                 <Grid container alignItems="center">
//                     <Grid item xs>
//                         <Typography gutterBottom variant="h4">
//                             Toothbrush
//             </Typography>
//                     </Grid>
//                     <Grid item>
//                         <Typography gutterBottom variant="h6">
//                             $4.50
//             </Typography>
//                     </Grid>
//                 </Grid>
//                 <Typography color="textSecondary" variant="body2">
//                     Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
//                     hall.
//         </Typography>
//             </div>
//             <Divider variant="middle" />
//             <div className={classes.section2}>
//                 <Typography gutterBottom variant="body1">
//                     Select type
//         </Typography>
//                 <div>
//                     <Chip className={classes.chip} label="Extra Soft" />
//                     <Chip className={classes.chip} color="primary" label="Soft" />
//                     <Chip className={classes.chip} label="Medium" />
//                     <Chip className={classes.chip} label="Hard" />
//                 </div>
//             </div>
//             <div className={classes.section3}>
//                 <Button color="primary">Add to cart</Button>
//             </div>
//         </div>
//     );
// }
