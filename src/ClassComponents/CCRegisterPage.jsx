import React, { Component } from 'react'
import { Button, ButtonGroup, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { Row } from 'reactstrap';
import classes from './BlogCard.module.css';
import '../MyStyle.css';
import Swal from 'sweetalert2';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import GoogleRegisterPage from '../ServiceComponents/GoogleRegisterPage';
import { GrCamera } from 'react-icons/gr';

export default class CCRegisterPage extends Component {


    commentSection = React.createRef();

    constructor(props) {
        super(props);
        this.datafromgoogle = this.datafromgoogle.bind(this);
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
            disabled: false,
            visibilityt: 'hidden',
            answerList: [],
            image: "https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg",
            source: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg',
            imgURL: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg',
            selectedFile: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg',
            urlimg: '',
            btnColor1: 'primary',


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
        if (this.state.emaill === '' || this.state.password === '') {

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
        else if (this.props.dataFromApptoRegisterPage.find((user => user.Email === this.state.email))) {
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
        else if (this.state.password !== this.state.cPassword) {
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

            window.scrollTo({ top: 750, behavior: 'smooth' })
            this.setState(prevState => ({
                opacity: 1,
                disabled: true,
            }))
        }
    }

    postTosqlQues = (event) => {
        ///validate blank fields
        if (this.state.q1 === '' || this.state.q2 === '' || this.state.q3 === '' || this.state.q4 === '' || this.state.q5 === '' || this.state.q6 === '' || this.state.q7 === '' || this.state.q8 === '' || this.state.q9 === '' || this.state.q10 === '' || this.state.q11 === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Some Details Are Missing",
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                // window.location.reload(false)
                event.preventDefault();

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
            let apiUrl = `http://localhost:51566/api/Questionnaire`;
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

        var data = new FormData();
        const newUser = {
            Email: this.state.email,
            Fname: this.state.fname,
            Lname: this.state.lname,
            Password: this.state.password,
            Image: this.state.selectedFile,
        }

        let apiUrl = `http://localhost:51566/api/User`;
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

            // localStorage.setItem('user_lname', this.state.lname),
            // localStorage.setItem('user_image', this.state.selectedFile),
            // localStorage.setItem('user_email', this.state.email),
            // localStorage.setItem('user_fname', this.state.fname),

        );
        this.MovingToMenu()

    }

    MovingToMenu = () => {

        if (this.state.selectedFile === 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg') {
            localStorage.setItem('user_lname', this.state.lname);
            localStorage.setItem('user_image', this.state.selectedFile);
            localStorage.setItem('user_email', this.state.email);
            localStorage.setItem('user_fname', this.state.fname);
        }
        else {
            localStorage.setItem('user_lname', this.state.lname);
            localStorage.setItem('user_image', 'http://proj.ruppin.ac.il/igroup47/prod/uploadedFiles/' + this.state.email + ".png");
            localStorage.setItem('user_email', this.state.email);
            localStorage.setItem('user_fname', this.state.fname);
        }

        Swal.fire({
            position: 'center',
            title: 'First time in the Best APP in all time - have FUN!',
            imageUrl: 'data:image/png;base64,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',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showConfirmButton: true,
            Onclick: () => { Swal.clickConfirm() }
        }).then(() => {
            window.location.href = "http://localhost:3000/main_menu_page"
        })

    }

    datafromgoogle = (d) => {
        alert(d);
    }

    btnFile = (event) => {

        Swal.fire({
            title: 'Sweet!',
            text: "It's Getting Better!",
            imageUrl: 'https://clipart-best.com/img/smiley/smiley-clip-art-60.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })

        console.log(event.target.files[0]);
        var data = new FormData();
        if (event.target.value.length > 0) {

            let email = localStorage.getItem(this.state.email);
            email = JSON.parse(email);

            //this.setState({ selectedFile: event.target.files[0].name });
            const file = event.target.files[0];
            console.log(file);
            const newUrl = URL.createObjectURL(file);
            console.log(newUrl);
            this.setState({ imgURL: newUrl })

            data.append("UploadedImage", file);
            data.append("name", this.state.email);
            console.log(data);

            console.log("in post img function");

            //this.apiUrl = `http://localhost:51566/api/User/uploadedFiles`;

            this.apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/User/uploadedFiles`;

            fetch(this.apiUrl,
                {
                    method: 'POST',
                    body: data,
                    // headers: new Headers({
                    //   // 'Content-Type': 'application/json; charset=UTF-8',
                    //   // 'Accept': 'application/json; charset=UTF-8'
                    // })
                })
                .then(res => {
                    console.log('res=', res);

                    if (res.status === 201) {
                        console.log('uploadedFile created:)');
                    }
                    console.log('res.ok', res.ok);

                    if (res.ok) {
                        console.log('post succeeded');
                    }

                    return res.json()
                })
                .then(
                    (result) => {
                        console.log("fetch btnFetchuploadedFile= ", result);
                        let imgNameInServer = result.split('\\').pop();
                        console.log(imgNameInServer);
                        this.setState({ urlimg: result, selectedFile: imgNameInServer })

                    },
                    (error) => {
                        console.log("err post=", error);
                    });
            console.log('end');
        }
        else {
            this.setState({ selectedFile: null })
        }
    }




    render() {

        return (
            <div style={{ backgroundColor: '#1d21243b', height: '100%' }} className={classes.NewBLogCard}>
                <Container>
                    <div className={classes.Container}>
                        <Button variant="secondary" size="sm" href="/" className="but"> BACK </Button><br></br>
                        <div><Avatar alt="Remy Sharp" src="https://i.ibb.co/GF9rjsr/circle-cropped.png" style={{ width: '20vh', height: '20vh', marginTop: '10px' }} /></div>
                        <h1 style={{ marginLeft: 7, width: '90%', borderRadius: 10, borderWidth: 5, fontWeight: 'bold', fontSize: '35px' }} className="ExPa"> Create an Account </h1><br></br>
                        {/* <Button style={{ boxShadow:'0 0 50px 10px #141414',marginLeft: 7,width: '90%', borderRadius: 10, borderWidth: 5, fontWeight: 'bold', fontSize: '22px' }} fullWidth color="info" size="sm" disabled='false' >Create an Account</Button> */}

                        <form>
                            <div id="part1" style={{ marginTop: -35 }}>
                                <p style={{ width: '40%', fontWeight: 'bold', fontSize: '15px', marginLeft: '115px' }}>Access With </p><br></br><br></br><br></br>
                                <GoogleRegisterPage queDatafromParent={this.props.QuesDatafromApptoRegisterPage} dataFromParent={this.props.dataFromApptoRegisterPage}/* {...this.state.fname=localStorage.getItem('user_fname')} {...this.state.lname=localStorage.getItem('user_lname')}{...this.state.email=localStorage.getItem('user_email')}{...this.state.source=localStorage.getItem('user_image')} */ />
                                <br></br>
                                <TextField className="TextField" disabled={this.state.disabled} style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" onChange={(e) => this.setState({ email: e.target.value })} autoFocus />
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
                                <br></br><br></br>

                                <Button style={{ width: '80%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold', marginTop: -60 }} fullWidth variant="warning" size="lg" onClick={this.submitUserData} disabled={this.state.disabled} >Let's GO !</Button>
                                <br></br><br></br><br></br><br></br>
                                <h5>Choose Your Profile Picture</h5>
                                <div>
                                    <img style={{ width: '40%', borderRadius: 70, borderWidth: 5 }} src={this.state.imgURL} alt="" ></img>
                                </div>
                                <br></br>
                                <input style={{ display: 'none' }} type="file" accept="image/*" id="icon-button-file" capture="environment" onChange={this.btnFile} ref={fileInput => this.fileInput = fileInput} />
                                <h2><GrCamera style={{ marginRight: -100, marginTop: -120, marginLeft: 5 }} onClick={() => this.fileInput.click()} /></h2>
                            </div>
                            <div id="part2" style={{ opacity: this.state.opacity }} >
                                <h4>I am...</h4>
                                <ButtonGroup aria-label="contained primary button group" onClick={(e) => this.setState({ q1: e.target.value })} >
                                    <Button disabled={!this.state.disabled} value="Male" >Male</Button>&nbsp;
                                    <Button disabled={!this.state.disabled} value="Female">Female</Button>
                                </ButtonGroup>
                                {/* <h4>{this.state.q1}</h4> */}
                                <br></br><br></br><br></br>
                                <h4>I am {this.state.q2} Years Old</h4>
                                <RangeSlider disabled={!this.state.disabled} value={this.state.q2} onChange={(e) => this.setState({ q2: e.target.value })} />
                                {/* <h4>{this.state.q2}</h4> */}
                                <br></br>
                                <h4>I have Kids </h4>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q3: e.target.value })}>
                                    <Button disabled={!this.state.disabled} value="YES">YES</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="NO">NO</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                {/* <h4>{this.state.q3}</h4> */}
                                <br></br><br></br><br></br>


                                <h4>I have ...</h4>
                                <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q4: e.target.value })}>
                                    <Button disabled={!this.state.disabled} value="Jeep">Jeep</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="ATV">ATV</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="RZR">RZR</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="Motorcycle">Motorcycle</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="None"> None </Button>
                                </ButtonGroup>
                                {/* <h2>{this.state.q4}</h2> */}
                                <br></br><br></br><br></br>



                                <h4>I am Looking for...</h4>
                                <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q5: e.target.value })}>
                                    <Button disabled={!this.state.disabled} value="oneTime">One-Time Partners Trip </Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="short">Partners To Travel With in The Short Term</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="long">Partners To Travel With in The Long Term</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                {/* <h4>{this.state.q5}</h4> */}
                                <br></br><br></br><br></br>


                                <h4>I'd love to Travel With Those Ages </h4>
                                <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q6: e.target.value })}>
                                    <Button disabled={!this.state.disabled} value="16-21">16 - 21</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="22-30">22 - 30</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="31-40">31 - 40</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="41-55">41 - 55</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="56-65">56 - 65</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                {/* <h4>{this.state.q6}</h4> */}
                                <br></br><br></br><br></br>


                                <div /*style={{ visibility: this.state.visibilityt }}*/>
                                    <h4>I have no problem being with other Partners in the same vehicle </h4>
                                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q7: e.target.value })}>
                                        <Button disabled={!this.state.disabled} value="YES">Right! Sharing Is Caring </Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="NO">Ahh Sorry... It's not for me</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                </div>
                                {/* <h4>{this.state.q7}</h4> */}
                                <br></br><br></br><br></br>


                                {/* לשנות למד של 1-5 , 5 זה הכי גבוה מטייל בתדירות גבוהה */}
                                <h4>I Travel ...</h4>
                                <h4>(1 being the lowest frequency and 5 being the highest frequency) </h4>

                                <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q8: e.target.value })}>
                                    <Button disabled={!this.state.disabled} value="1">1</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="2">2</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="3">3</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="4">4</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="5">5</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                {/* <h4>{this.state.q8}</h4> */}
                                <br></br><br></br><br></br>


                                <h4>That Word Better Describes Me</h4>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q9: e.target.value })}>
                                    <Button disabled={!this.state.disabled} value="affable ">Affable</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="troglodyte ">Troglodyte</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                {/* <h4>{this.state.q9}</h4> */}
                                <br></br><br></br><br></br>


                                <h4>I like to talk about these issues</h4>
                                <ButtonGroup size="sm" variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q10: e.target.value })}>
                                    <Row>
                                        <Col>
                                            <Button disabled={!this.state.disabled} value="Politics ">Politics</Button>
                                            <h1></h1>
                                            <Button disabled={!this.state.disabled} value="Sport">Sport</Button>
                                            <h1></h1>
                                            <Button disabled={!this.state.disabled} value="FamilyLife">Family Life</Button>
                                            <h1></h1>
                                            <Button disabled={!this.state.disabled} value="NightLife">NightLife</Button>
                                        </Col>
                                        <Col>
                                            <Button disabled={!this.state.disabled} value="Economy">Economy</Button>
                                            <h1></h1>
                                            <Button disabled={!this.state.disabled} value="Studying">Studying</Button>
                                            <h1></h1>
                                            <Button disabled={!this.state.disabled} value="Workplace">Workplace</Button>
                                            <h1></h1>
                                            <Button disabled={!this.state.disabled} value="Other">Other</Button>
                                        </Col>
                                    </Row>
                                </ButtonGroup>
                                {/* <h4>{this.state.q10}</h4> */}
                                <br></br><br></br>


                                <h4>Cigarette ? </h4>
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ q11: e.target.value })}>
                                    <Button disabled={!this.state.disabled} value="yes">I Smoke</Button>&nbsp;&nbsp;
                                    <Button disabled={!this.state.disabled} value="no">Not For ME</Button>&nbsp;&nbsp;
                                </ButtonGroup>
                                {/* <h4>{this.state.q11}</h4> */}
                                <br></br><br></br><br></br>

                                <Button style={{ width: '80%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold' }} disabled={!this.state.disabled} fullWidth variant="success" size="lg" onClick={this.postTosqlQues}>GET STARTED</Button>

                            </div>
                        </form>
                    </div>
                </Container >
            </div>
        )
    }
}


