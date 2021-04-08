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
import GoogleRegisterPage from '../ServiceComponents/GoogleRegisterPage';

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
            password: '',
            cPassword: '',
            data_from_sql: '',
            dropdownOpen: false,
            setOpen: false,
            setValue: '50',
            value: '',
            q1: '',
            q2: '30',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: '',
            q11: '',
            btnColor1: 'primary',
            btnColor2: 'primary',
            disabled: false,
            visibilityt: 'hidden',
            answerList: [],
            image: "https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg",
            source: ''
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


    submitUserData = () => {
        //Validate Blank Fields
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
        //Validate Email is Available 
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
        //Validate Confirm Password 
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
        ///validate blank fields
        if (this.state.q1 == '' || this.state.q2 == '' || this.state.q3 == '' || this.state.q4 == '' || this.state.q5 == '' || this.state.q6 == '' || this.state.q7 == '' || this.state.q8 == '' || this.state.q9 == '' || this.state.q10 == '' || this.state.q11 == '') {
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
            this.state.answerList = [];
            this.state.answerList.push(this.state.q1, this.state.q2, this.state.q3, this.state.q4, this.state.q5, this.state.q6, this.state.q7, this.state.q8, this.state.q9, this.state.q10, this.state.q11);
            console.log("this answer for q1 q2 is");
            console.log(this.state.answerList);
            const newAnswer = {
                Email: this.state.email,
                LAnswer: this.state.answerList
            }
            ///post to questionnaire 
            let apiUrl = `http://localhost:54976/api/Questionnaire`;
            //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/Questionnaire`;

            console.log("New Answer const");
            console.log(newAnswer);
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
        const newUser = {
            Email: this.state.email,
            Fname: this.state.fname,
            Lname: this.state.lname,
            Password: this.state.password,
            Image: this.state.source,
        }

        let apiUrl = `http://localhost:54976/api/User`;
        //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/User`;


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
        }).then(
            // this.clearForm(),

            localStorage.setItem('user_lname', this.state.lname),
            localStorage.setItem('user_image', this.state.source),
            localStorage.setItem('user_email', this.state.email),
            localStorage.setItem('user_fname', this.state.fname),

            window.location.href = "http://localhost:3000/main_menu_page"

        );
    }
    // toggle = () => this.state.setOpen(!this.state.dropdownOpen);

    datafromgoogle = (d) => {
        alert(d);
    }


    OpenJoinOption = () => {
        alert("bling")
        this.setState(prevState => ({
            visibilityt: 'visible',
        }))
    }

    handleCapture = (target) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);
                this.setState({ source: newUrl });
            }
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: '#1d21243b', height: '100%' }} className={classes.NewBLogCard}>
                <Container>
                    <div className={classes.Container}>
                        <Button variant="secondary" size="sm" href="/" className="but"> BACK </Button>
                        <div><Avatar alt="Remy Sharp" src="https://i.ibb.co/7S6XfNZ/circle-cropped.png" style={{ width: '15vh', height: '15vh', marginTop: '10px' }} /></div>
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
                                <div>
                                    <h5>Upload your Profile Image:</h5>
                                    <img style={{ width: '30%' }} src={this.state.source} alt="" ></img>
                                    <Input style={{ marginLeft: 75}} accept="image/*" id="icon-button-file" type="file" capture="environment" onChange={(image) => this.handleCapture(image.target)} />
                                </div>
                                <br></br>
                                <Button fullWidth variant="info" size="lg" onClick={this.submitUserData} disabled={this.state.disabled} >Let's GO !</Button>
                                <br></br><br></br><br></br><br></br>
                            </div>
                            {/* Questionnaire */}
                            <div id="part2" /*style={{ opacity: this.state.opacity}}*/>
                                <h4>I am ...</h4>
                                <ButtonGroup aria-label="contained primary button group">
                                    <Button variant={this.state.btnColor1} value="Male" onClick={(e) => this.setState({ q1: e.target.value, btnColor1: 'secondary' })}>Male</Button>&nbsp;
                                    <Button variant={this.state.btnColor2} onClick={(e) => this.setState({ q1: e.target.value, btnColor2: 'secondary' })}>Female</Button>
                                </ButtonGroup>
                                <h4>{this.state.q1}</h4>
                                <br></br><br></br><br></br>



                                <h4>I am {this.state.q2} Years Old</h4>
                                <RangeSlider value={this.state.q2} onChange={(e) => this.setState({ q2: e.target.value })} />
                                <h4>{this.state.q2}</h4>
                                <br></br>


                                <h4>I have Kids </h4>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q3: e.target.value })}>
                                    <Button value="YES">YES</Button>&nbsp;&nbsp;
                                    <Button value="NO">NO</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                <h4>{this.state.q3}</h4>
                                <br></br><br></br><br></br>


                                <h4>I have ...</h4>
                                <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q4: e.target.value })}>
                                    <Button value="Jeep">Jeep</Button>&nbsp;&nbsp;
                                    <Button value="ATV">ATV</Button>&nbsp;&nbsp;
                                    <Button value="RZR">RZR</Button>&nbsp;&nbsp;
                                    <Button value="Motorcycle">Motorcycle</Button>&nbsp;&nbsp;
                                    <Button onClick={this.OpenJoinOption} value="None"> None </Button>
                                </ButtonGroup>
                                <h2>{this.state.q4}</h2>
                                <br></br><br></br><br></br>



                                <h4>I am Looking for...</h4>
                                <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q5: e.target.value })}>
                                    <Button value="oneTime">One-Time Partners Trip </Button>&nbsp;&nbsp;
                                    <Button value="short">Partners To Travel With in The Short Term</Button>&nbsp;&nbsp;
                                    <Button value="long">Partners To Travel With in The Long Term</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                <h4>{this.state.q5}</h4>
                                <br></br><br></br><br></br>


                                <h4>I'd love to Travel With Those Ages </h4>
                                <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q6: e.target.value })}>
                                    <Button value="16-21">16 - 21</Button>&nbsp;&nbsp;
                                    <Button value="22-30">22 - 30</Button>&nbsp;&nbsp;
                                    <Button value="31-40">31 - 40</Button>&nbsp;&nbsp;
                                    <Button value="41-55">41 - 55</Button>&nbsp;&nbsp;
                                    <Button value="56-65">56 - 65</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                <h4>{this.state.q6}</h4>
                                <br></br><br></br><br></br>


                                <div /*style={{ visibility: this.state.visibilityt }}*/>
                                    <h4>I have no problem being with other Partners in the same vehicle </h4>
                                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q7: e.target.value })}>
                                        <Button value="YES">Right! Sharing Is Caring </Button>&nbsp;&nbsp;
                                    <Button value="NO">Ahh Sorry... It's not for me</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                </div>
                                <h4>{this.state.q7}</h4>
                                <br></br><br></br><br></br>


                                {/* לשנות למד של 1-5 , 5 זה הכי גבוה מטייל בתדירות גבוהה */}
                                <h4>I Travel ...</h4>
                                <h4>(1 being the lowest frequency and 5 being the highest frequency) </h4>

                                <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q8: e.target.value })}>
                                    <Button value="1">1</Button>&nbsp;&nbsp;
                                    <Button value="2">2</Button>&nbsp;&nbsp;
                                    <Button value="3">3</Button>&nbsp;&nbsp;
                                    <Button value="4">4</Button>&nbsp;&nbsp;
                                    <Button value="5">5</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                <h4>{this.state.q8}</h4>
                                <br></br><br></br><br></br>


                                <h4>That Word Better Describes Me</h4>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q9: e.target.value })}>
                                    <Button value="affable ">Affable</Button>&nbsp;&nbsp;
                                    <Button value="troglodyte ">Troglodyte</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                <h4>{this.state.q9}</h4>
                                <br></br><br></br><br></br>


                                <h4>I like to talk about these issues</h4>
                                <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q10: e.target.value })}>

                                    <Row>
                                        <Col>
                                            <Button value="Politics ">Politics</Button>
                                            <h1></h1>
                                            <Button value="Sport">Sport</Button>
                                            <h1></h1>
                                            <Button value="FamilyLife">Family Life</Button>
                                            <h1></h1>
                                            <Button value="NightLife">NightLife</Button>
                                        </Col>
                                        <Col>
                                            <Button value="Economy">Economy</Button>
                                            <h1></h1>
                                            <Button value="Studying">Studying</Button>
                                            <h1></h1>
                                            <Button value="Workplace">Workplace</Button>
                                            <h1></h1>
                                            <Button value="Other">Other</Button>
                                        </Col>
                                    </Row>
                                </ButtonGroup>
                                <h4>{this.state.q10}</h4>
                                <br></br><br></br>


                                <h4>Cigarette ? </h4>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q11: e.target.value })}>
                                    <Button value="yes">I Smoke</Button>&nbsp;&nbsp;
                                    <Button value="no">Not For ME</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                <h4>{this.state.q11}</h4>
                                <br></br><br></br><br></br>


                                <Button fullWidth variant="success" size="lg" onClick={this.postTosqlQues}>GET STARTED</Button>

                            </div>
                        </form>
                    </div>
                </Container >
            </div>
        )
    }
}


