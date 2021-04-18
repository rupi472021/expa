import React, { Component } from 'react';
import { Form, Table } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { GrCamera } from 'react-icons/gr';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';


export default class CCMyprofile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile_email: localStorage.getItem('user_email'),
            selectedFile: '',
            urlimg: '',
            imgURL: '',
            profile_image: localStorage.getItem('user_image'),
            password: '',
            confirm_password: '',
            q: [{ LAnswer: '1' }],
            rows: [],
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: '',
            q11: '',
        }
    };

    componentDidMount = () => {

        Swal.fire('Hi ' + localStorage.getItem('user_fname') + " " + localStorage.getItem('user_lname') + "!", 'In this section you can change your password OR view and edit your Questionnaire', 'question')

        console.log("in componentDidMount function");

        let apiUrl = `http://localhost:54976/api/Questionnaire?email=` + localStorage.getItem('user_email');
        //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/Questionnaire/getSpecificQuestionnaire`;

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

                    this.setState({
                        q: result,
                        q1: result[0].LAnswer[0],
                        q3: result[0].LAnswer[2],
                        q4: result[0].LAnswer[3],
                        q5: result[0].LAnswer[4],
                        q6: result[0].LAnswer[5],
                        q7: result[0].LAnswer[6],
                        q8: result[0].LAnswer[7],
                        q9: result[0].LAnswer[8],
                        q10: result[0].LAnswer[9],
                        q11: result[0].LAnswer[10],
                    })
                },
                (error) => {
                    console.log("err GET=", error);
                });
    }

    checkValidation = () => {

        console.log("in checkValidation function")

        if (this.state.password == '' && this.state.confirm_password == '' && (this.state.q1 != '' || this.state.q3 != '' || this.state.q4 != '' || this.state.q5 != '' || this.state.q6 != '' || this.state.q7 != '' || this.state.q8 != '' || this.state.q9 != '' || this.state.q10 != '' || this.state.q11 != '')) {

            console.log("changeQuestionnairePUT")
            this.changeQuestionnairePUT(); //this function PUT the Questionnaire only

        }

        else if (this.state.password == this.state.confirm_password && this.state.password != '') {

            console.log("changePasswordPUT")

            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Save`,
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    this.changePasswordPUT();  //this function PUT the Password only
                }
                else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
        }

        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please try again!',
            })
        }
    }

    changePasswordPUT = () => {

        let apiUrl = `http://localhost:54976/api/User/` + localStorage.getItem('user_email') + "/" + this.state.password;

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
        Swal.fire('Saved!', '', 'success',).then((result) => {
            if (result.isConfirmed) {
                window.location.reload(false);
            }
        })
    }

    changeQuestionnairePUT = () => {

        console.log("in changeQuestionnairePUT function")
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                console.log("you click on Save Button")

                //PUT to Questionnaire:
                let apiUrl = `http://localhost:54976/api/Questionnaire/` + localStorage.getItem('user_email') + "/" + this.state.q1 + "/" + this.state.q3 + "/" + this.state.q4 + "/" + this.state.q5 + "/" + this.state.q6 + "/" + this.state.q7 + "/" + this.state.q8 + "/" + this.state.q9 + "/" + this.state.q10 + "/" + this.state.q11;
                //let apiUrl = `http://localhost:54976/api/Questionnaire/benmshulam@gmail.com/1/3/4/5/6/7/8/9/10/11`;
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
                })
                Swal.fire('Saved!', '', 'success')
            }
            else if (result.isDenied) {
                console.log("you click on Don't save Button")
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
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

    fileSelectedHandler = (event) => {

        console.log("in editProfileImage function");
        console.log(event.target.files[0]);
        console.log(event.target.value.length);

        var data = new FormData();

        if (event.target.value.length > 0) {

            let email = localStorage.getItem('user_email');

            const file = event.target.files[0];
            console.log(file);
            const newUrl = URL.createObjectURL(file);
            console.log(newUrl);
            this.setState({ imgURL: newUrl, profile_image: newUrl })

            data.append("UploadedImage", file);
            data.append("name", email);

            console.log("in post img function");

            //this.apiUrl = `http://localhost:54976/api/User/uploadedFiles`;

            this.apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/User/uploadedFiles`;
            //src={this.state.imgURL}

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
                        this.setState({
                            urlimg: result,
                            selectedFile: imgNameInServer,
                        })
                    },
                    (error) => {
                        console.log("err post=", error);
                    });
            console.log('end');

            //setSource(newUrl);
        }
        else {
            this.setState({ selectedFile: null })
        }
    }

    render() {
        return (

            <div style={{ backgroundColor: '#1d21243b', height: '100%' }}><br></br>
                        <Button color="secondary" size="sm" onClick={this.backbtn}> Main Menu </Button><br></br><br></br>
                {/* <div><Button variant="secondary" size="sm" onClick={this.backbtn} className="but"> Main Menu </Button></div><br></br> */}
                <img src={this.state.profile_image} alt={true} style={{ width: '45%', borderRadius: 100, borderWidth: 2, borderStyle: 'solid' }} /><br></br><br></br>
                <input style={{ display: 'none' }} type="file" id="icon-button-file" accept="image/*" id="icon-button-file" capture="environment" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput} />
                <h2><GrCamera style={{ marginRight: -120, marginTop: -120, marginLeft: 5 }} onClick={() => this.fileInput.click()} /></h2>
                <Form style={{ marginTop: -40 }} >
                    <Form.Group controlId="formBasicEmail" style={{ width: '75%', marginLeft: 50 }} >
                        <TextField className="TextField" disabled={this.state.disabled} style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="New Passowrd" label="Please Enter New Passowrd" name="Password" autoComplete="New Passowrd" onChange={(e) => this.setState({ email: e.target.value })} autoFocus />
                        {/* <Button style={{ width: '70%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold', fontSize: '20px' }} fullWidth variant="warning" size="sm" disabled='false' >New Password </Button><br></br> */}
                        {/* <Form.Label style={{ fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline' }} > New Password </Form.Label> */}
                        {/* <Form.Control style={{ borderRadius: 20, borderWidth: 2 }} type="password" placeholder="Enter your New Password" onChange={(ee) => this.setState({ password: ee.target.value })} /> */}
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" style={{ width: '75%', marginLeft: 50 }} >
                        <TextField className="TextField" disabled={this.state.disabled} style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="confirm" label="Please Confirm Password" name="confirmPassword" autoComplete="Confirm Password" onChange={(e) => this.setState({ email: e.target.value })} autoFocus />
                        {/* <Button style={{ width: '70%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold', fontSize: '20px' }} fullWidth variant="warning" size="sm" disabled='false' >Confirm Password </Button><br></br> */}
                        {/* <Form.Label style={{ fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline' }} >Confirm Password</Form.Label> */}
                        {/* <Form.Control style={{ borderRadius: 20, borderWidth: 2 }} type="password" placeholder="Confirm Password" onChange={(e) => this.setState({ confirm_password: e.target.value })} /> */}
                    </Form.Group>
                </Form>
                <h6>Edit your Questionnaire Answers Below:</h6>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Questions</th>
                            <th>Answers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>I am...</td>
                            <td>
                                <select id="dropdown" onChange={(e) => this.setState({ q1: e.target.value })} >
                                    <option value={this.state.q[0].LAnswer[0]}>{this.state.q[0].LAnswer[0]}</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>My Age</td>
                            <td>{this.state.q[0].LAnswer[1]}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Have Kids ?</td>
                            <td>
                                <select id="dropdown" onChange={(e) => this.setState({ q3: e.target.value })} >
                                    <option value={this.state.q[0].LAnswer[2]}>{this.state.q[0].LAnswer[2]}</option>
                                    <option value="YES">YES</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>I have...</td>
                            <td>
                                <select id="dropdown" onChange={(e) => this.setState({ q4: e.target.value })} >
                                    <option value={this.state.q[0].LAnswer[3]}>{this.state.q[0].LAnswer[3]}</option>
                                    <option value="Jeep">Jeep</option>
                                    <option value="ATV">ATV</option>
                                    <option value="RZR">RZR</option>
                                    <option value="Motorcycle">Motorcycle</option>
                                    <option value="None">None</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>I am Looking for...</td>
                            <td>
                                <select id="dropdown" onChange={(e) => this.setState({ q5: e.target.value })} >
                                    <option value={this.state.q[0].LAnswer[4]}>{this.state.q[0].LAnswer[4]}</option>
                                    <option value="oneTime">One-Time</option>
                                    <option value="short">Short Term</option>
                                    <option value="long">Long Term</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>I'd love to Travel With Those Ages</td>
                            <td>
                                <select id="dropdown" onChange={(e) => this.setState({ q6: e.target.value })} >
                                    <option value={this.state.q[0].LAnswer[5]}>{this.state.q[0].LAnswer[5]}</option>
                                    <option value="16-21">16 - 21</option>
                                    <option value="22-30">22 - 30</option>
                                    <option value="31-40">31 - 40</option>
                                    <option value="41-55">41 - 55</option>
                                    <option value="56-65">56 - 65</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>with other Partners in the same vehicle</td>
                            <td>
                                <select id="dropdown" onChange={(e) => this.setState({ q7: e.target.value })} >
                                    <option value={this.state.q[0].LAnswer[6]}>{this.state.q[0].LAnswer[6]}</option>
                                    <option value="YES">YES</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>I Travel (1- lowest frequency and 5- the highest)...</td>
                            <td>
                                <select id="dropdown" onChange={(e) => this.setState({ q8: e.target.value })} >
                                    <option value={this.state.q[0].LAnswer[7]}>{this.state.q[0].LAnswer[7]}</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>That Word Better Describes Me</td>
                            <td>
                                <select id="dropdown" onChange={(e) => this.setState({ q9: e.target.value })} >
                                    <option value={this.state.q[0].LAnswer[8]}>{this.state.q[0].LAnswer[8]}</option>
                                    <option value="affable">Affable</option>
                                    <option value="troglodyte">Troglodyte</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>I like to talk about these issues</td>
                            <td>
                                <select id="dropdown" onChange={(e) => this.setState({ q10: e.target.value })} >
                                    <option value={this.state.q[0].LAnswer[9]}>{this.state.q[0].LAnswer[9]}</option>
                                    <option value="Politics">Politics</option>
                                    <option value="Sport">Sport</option>
                                    <option value="FamilyLife">Family Life</option>
                                    <option value="NightLife">Night Life</option>
                                    <option value="Economy">Economy</option>
                                    <option value="Studying">Studying</option>
                                    <option value="Workplace">Workplace</option>
                                    <option value="Other">Other</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Cigarette ?</td>
                            <td>
                                <select id="dropdown" onChange={(e) => this.setState({ q11: e.target.value })} >
                                    <option value={this.state.q[0].LAnswer[10]}>{this.state.q[0].LAnswer[10]}</option>
                                    <option value="yes">I smoke</option>
                                    <option value="no">Not For ME</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                {/* <Button color="success" type="button" onClick={this.checkValidation}> Update </Button> {''} */}
                <Button style={{ marginBottom:'10px',width: '80%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold' }} fullWidth color="success" size="lg" onClick={this.checkValidation}>Update</Button>

            </div >
        )
    }
}
