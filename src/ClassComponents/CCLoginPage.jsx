import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GoogleLoginn from '../ServiceComponents/GoogleLoginn';
import FaceBookLogin from '../ServiceComponents/FaceBookLogin';
import classes from './BlogCard.module.css';
import Box from '@material-ui/core/Box';
import Swal from 'sweetalert2';

export default class CCLoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            social_media_name: 'Login Page',
            image: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg',
            data_from_sql: '',
        }
    };

    componentDidMount = () => { //GET all Users from Users_expa (SQL) onload

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

    handleShow = () => {
        Swal.fire({
            title: 'ExPa Founders',
            text: 'Ben Meshulam & Daniel Brand',
            //imageUrl: 'https://lh3.googleusercontent.com/a-/AOh14Gh90aYoFoXYdOQd253DwvoPxqjuuyQxJh65nGz1GBE=s96-c',
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Custom image',
        })
    }

    Copyright = () => { // footer page in the LoginPage
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" onClick={this.handleShow}>
                    ExPa Application
          </Link>
                {new Date().getFullYear()}
                {' '}
            </Typography>
        );
    }

    signinbtn = () => {

        if (this.state.emaill == '' || this.state.password == '') {
            alert("please fill out all requireds fields")
        }
        else (this.handle());
    }

    handle = () => {

        console.log("in handle function");
        console.log(this.state.data_from_sql) // show all data from Users table in the SQL

        if (this.state.data_from_sql.find((user => user.Email == this.state.email) && (user => user.Password == this.state.password))) {
            localStorage.setItem('user_email', this.state.email)
            localStorage.setItem('user_image', this.state.image)
            localStorage.setItem('social_media_name', this.state.social_media_name)

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Hi you loggin successfully to ExPa!',
                imageHeight: 1500,
                showConfirmButton: true,
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                window.location.href = "http://localhost:3000/main_menu_page"
            })
        }
        else {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "one detail or more are wrong, if it's your first time in ExPa - Sign Up!",
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                window.location.reload(false)
            })
        }
    }

    render() {
        return (
            <div className={classes.NewBLogCard}>
                <Container>
                    <CssBaseline />
                    <div className={classes.Container} >
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/7S6XfNZ/circle-cropped.png" style={{ width: '20vh', height: '20vh', marginTop: '10px' }} />
                        <form>
                            <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} />
                            <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={(a) => this.setState({ password: a.target.value })} />
                            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                            <Button className={classes.ButtonSignIn} fullWidth variant="contained" color="Primary" size="large" onClick={this.signinbtn}> Sign IN </Button><br></br><br></br><br></br>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/forget_password_page" variant="body2"> Forgot password? </Link>
                                </Grid>
                                <Grid item>
                                    <Link variant="body2" href="/Register" > Don't have an account? Sign Up </Link><br></br><br></br>
                                </Grid>
                            </Grid>
                        </form>
                        <div style={{ width: '80%' }}>
                            <p style={{ marginLeft: 50 }}> Quick access with </p>
                        </div><br></br><br></br>
                        <div style={{ height: 70, width: '80%' }}>
                            <div style={{ marginRight: 100 }}>
                                <GoogleLoginn dataFromParent={this.state.data_from_sql} />
                            </div>
                            <div style={{ marginLeft: 120, marginTop: -50 }}>
                                <FaceBookLogin dataFromParent={this.state.data_from_sql} />
                            </div>
                            <Box style={{ marginLeft: 50 }} m={1}>{this.Copyright()}</Box>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}


