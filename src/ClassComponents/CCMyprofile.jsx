import React, { Component } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
//import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Swal from 'sweetalert2';
import { Dropdown } from 'semantic-ui-react'

function createData(Questions, Answers) {
    return { Questions, Answers };
}

export default class CCMyprofile extends Component {


    constructor(props) {
        super(props);
        this.state = {
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

        Swal.fire('Change Password Section', 'In this section you can change your password and view your Questionnaire', 'question')
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

                    this.setState({ q: result })

                    //   result.map(st => console.log(st.Name)); // all Fname in Users_Expa
                    // this.setState({
                    //     rows:
                    //         [
                    //             createData('I am...',
                    //                 <select id="dropdown" onChange={(e) => this.setState({ q1: e.target.value })} >
                    //                     <option value={result[0].LAnswer[0]} >{result[0].LAnswer[0]}</option>
                    //                     <option value="Female" >Female</option>
                    //                 </select>),
                    //             createData('My Age', result[0].LAnswer[1]), ///q2
                    //             createData('I have Kids',
                    //                 <select id="dropdown" onChange={(e) => this.setState({ q3: e.target.value })} >
                    //                     <option value={result[0].LAnswer[2]} >{result[0].LAnswer[2]}</option>
                    //                     <option value="YES" >YES</option>
                    //                 </select>),
                    //             createData('I have...',
                    //                 <select id="dropdown" onChange={(e) => this.setState({ q4: e.target.value })} >
                    //                     <option value={result[0].LAnswer[2]} >{result[0].LAnswer[2]}</option>
                    //                     <option value="YES" >YES</option>
                    //                 </select>),
                    //             createData('I am Looking for...',
                    //                 <select id="dropdown" onChange={(e) => this.setState({ q5: e.target.value })} >
                    //                     <option value={result[0].LAnswer[2]} >{result[0].LAnswer[2]}</option>
                    //                     <option value="YES" >YES</option>
                    //                 </select>),
                    //             createData("I'd love to Travel With Those Ages",
                    //                 <select id="dropdown" onChange={(e) => this.setState({ q6: e.target.value })} >
                    //                     <option value={result[0].LAnswer[2]} >{result[0].LAnswer[2]}</option>
                    //                     <option value="YES" >YES</option>
                    //                 </select>),
                    //             createData('Being with other...',
                    //                 <select id="dropdown" onChange={(e) => this.setState({ q7: e.target.value })} >
                    //                     <option value={result[0].LAnswer[2]} >{result[0].LAnswer[2]}</option>
                    //                     <option value="YES" >YES</option>
                    //                 </select>),
                    //             createData('I Travel...',
                    //                 <select id="dropdown" onChange={(e) => this.setState({ q8: e.target.value })} >
                    //                     <option value={result[0].LAnswer[2]} >{result[0].LAnswer[2]}</option>
                    //                     <option value="YES" >YES</option>
                    //                 </select>),
                    //             createData('That Word Better Describes Me',
                    //                 <select id="dropdown" onChange={(e) => this.setState({ q9: e.target.value })} >
                    //                     <option value={result[0].LAnswer[2]} >{result[0].LAnswer[2]}</option>
                    //                     <option value="YES" >YES</option>
                    //                 </select>),
                    //             createData('I like to talk about these issues',
                    //                 <select id="dropdown" onChange={(e) => this.setState({ q10: e.target.value })} >
                    //                     <option value={result[0].LAnswer[2]} >{result[0].LAnswer[2]}</option>
                    //                     <option value="YES" >YES</option>
                    //                 </select>),
                    //             createData('Cigarette ?',
                    //                 <select id="dropdown" onChange={(e) => this.setState({ q11: e.target.value })} >
                    //                     <option value={result[0].LAnswer[2]} >{result[0].LAnswer[2]}</option>
                    //                     <option value="YES" >YES</option>
                    //                 </select>)
                    //         ]
                    // })
                },
                (error) => {
                    console.log("err GET=", error);
                });
    }

    checkPasswordValid = () => {

        console.log("in checkPasswordValid function")

        if (this.state.password == this.state.confirm_password && this.state.password != '') {
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Save`,
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    this.changePasswordPUT();
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
        Swal.fire('Saved!', '', 'success')
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
            <div style={{ backgroundColor: '#1d21243b', height: '100%' }}><br></br>
                <div><Button variant="secondary" size="sm" onClick={this.backbtn} className="but"> Main Menu </Button></div><br></br>
                <img src={localStorage.getItem('user_image')} alt={true} style={{ width: '40%', borderRadius: 70, borderWidth: 5, borderStyle: 'solid' }} /><br></br><br></br>
                <Form>
                    <Form.Group controlId="formBasicEmail" style={{ width: '75%', marginLeft: 50 }} >
                        <Form.Label style={{ fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline' }} > New Password </Form.Label>
                        <Form.Control style={{ borderRadius: 20, borderWidth: 5, borderStyle: 'solid' }} type="password" placeholder="Enter your New Password" onChange={(ee) => this.setState({ password: ee.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" style={{ width: '75%', marginLeft: 50 }} >
                        <Form.Label style={{ fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline' }} >Confirm Password</Form.Label>
                        <Form.Control style={{ borderRadius: 20, borderWidth: 5, borderStyle: 'solid' }} type="password" placeholder="Confirm Password" onChange={(e) => this.setState({ confirm_password: e.target.value })} />
                    </Form.Group>
                </Form>
                <h5>Watch your Questionnaire Below:</h5>
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
                            <td>{this.state.q[0].LAnswer[0]}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>My Age</td>
                            <td>{this.state.q[0].LAnswer[1]}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Have Kids ?</td>
                            <td>{this.state.q[0].LAnswer[2]}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>I have...</td>
                            <td>{this.state.q[0].LAnswer[3]}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>I am Looking for...</td>
                            <td>{this.state.q[0].LAnswer[4]}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>I'd love to Travel With Those Ages</td>
                            <td>{this.state.q[0].LAnswer[5]}</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>with other Partners in the same vehicle</td>
                            <td>{this.state.q[0].LAnswer[6]}</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>I Travel...</td>
                            <td>{this.state.q[0].LAnswer[7]}</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>That Word Better Describes Me</td>
                            <td>{this.state.q[0].LAnswer[8]}</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>I like to talk about these issues</td>
                            <td>{this.state.q[0].LAnswer[9]}</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Cigarette ?</td>
                            <td>{this.state.q[0].LAnswer[10]}</td>
                        </tr>
                    </tbody>
                </Table>
                {/* <TableContainer component={Paper}>
                        <Table style={{ minWidth: 200 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold', fontSize: 18, textDecorationLine: 'underline' }} > Questions </TableCell>
                                    <TableCell style={{ fontWeight: 'bold', fontSize: 18, textDecorationLine: 'underline' }} align="right" > Answers </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.rows.map((row) => (
                                    <TableRow key={row.Questions}>
                                        <TableCell component="th" scope="row"> {row.Questions} </TableCell>
                                        <TableCell align="right">{row.Answers}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer> */}
                <Button variant="primary" type="button" onClick={this.checkPasswordValid}> Update </Button> {''}
            </div >
        )
    }
}
