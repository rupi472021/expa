import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import Swal from 'sweetalert2';

export default class CCResetPasswordPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: 'ben',
            message: '123'
        }
        this.sendMail = this.sendMail.bind(this);
    }

    Check = () => {
        console.log(this.props.dataFromApptoResetPasswordPage) // show all data from Users table in the SQL from parent

        if (this.props.dataFromApptoResetPasswordPage.find((user => user.Email == this.state.email))) {
            var index = this.props.dataFromApptoResetPasswordPage.findIndex(user => user.Email == this.state.email)
            console.log(index);
            this.sendMail(index);
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This email does not exist in our Data Base!',
                showConfirmButton: true,
                position: 'center',
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                //window.location.href = "http://localhost:3000"
            })
        }
    }

    sendMail = (index) => {

        window.Email.send({
            Host: "smtp.google.com",
            Username: "expaapp2021@gmail.com",
            Password: "095391DC1421931213BDE94909369A63964C",
            To: this.state.email,
            From: "expaapp2021@gmail.com",
            Subject: "Password for ExPa App",
            Body: "Hi " + this.props.dataFromApptoResetPasswordPage[index].Fname + " your password to ExPa App is: " + this.props.dataFromApptoResetPasswordPage[index].Password
        }).then((message) => {
            console.log(message)
            if (message == "OK") {

                Swal.fire({
                    title: 'Password has sent!',
                    text: 'Your Password is wating for you in your mail',
                    imageUrl: 'https://previews.123rf.com/images/ratoca/ratoca1212/ratoca121200313/16970362-fly-email.jpg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    showConfirmButton: true,
                    position: 'center',
                    Onclick: () => { Swal.clickConfirm() }
                }).then(() => {
                    window.location.href = "http://localhost:3000"
                })
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Your Password is wating for you in your mail :)',
                //     showConfirmButton: true,
                //     position: 'center',
                //     Onclick: () => { Swal.clickConfirm() }
                // }).then(() => {
                //     //window.location.href = "http://localhost:3000"
                // })
            }
        }
        )
    }

    render() {
        return (
            <div style={{ backgroundImage: `url("https://image.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg")`, height: '100vh' }}>
                <div><br></br><br></br>
                    <h5 style={{ position: 'absolute', marginTop: -25 }}>
                        Please enter your login email address and your password will wait for you in your inbox/spam
                    </h5><br></br><br></br>
                    <Form style={{ width: '75%', marginLeft: 50 }}>
                        <FormGroup><br></br>
                            <Label for="email"> <h4>Email:</h4> </Label>
                            <Input type="email" name="email" onChange={(e) => this.setState({ email: e.target.value })}></Input>
                        </FormGroup>
                    </Form>
                    <div style={{}}>
                        <Button style={{ marginLeft: 140, marginTop: 250 }} color="success" onClick={this.Check}> Send </Button><br></br><br></br>
                        <Button style={{ marginRight: 40, marginTop: -112 }} color="info" href="/" > Back </Button>
                    </div>
                </div>
            </div>
        )
    }
}
