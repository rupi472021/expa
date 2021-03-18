import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GoogleLoginn from '../ServiceComponents/GoogleLoginn';
import FaceBookLogin from '../ServiceComponents/FaceBookLogin';
import classes from './BlogCard.module.css';
import { Redirect } from 'react-router-dom';

export default class CCLoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            data_from_sql: '',
        }
    };

    componentDidMount = () => { //GET all Users from Users_expa (SQL) onload

        localStorage.clear(); //clear local storge onload

        console.log("in componentDidMount function");
        let apiUrl = `http://localhost:54976/api/User`;

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
                    this.setState({data_from_sql: result});
                },
                (error) => {
                    console.log("err GET=", error);
                });
    }

    Copyright = () => { // footer page in the LoginPage
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit">
                    ExPa Application
          </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    signinbtn = () => {
        console.log("in signinbtn function");

    }

    render() {
        return (
            <div className={classes.NewBLogCard}>
                <Container>
                    <CssBaseline />
                    <div className={classes.Container} >
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/7S6XfNZ/circle-cropped.png" style={{ width: '20vh', height: '20vh', marginTop: '10px' }} />
                        <form>
                            <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                            <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                            <Button className={classes.ButtonSignIn} fullWidth variant="contained" color="Primary" size="large" onClick={this.signinbtn}> Sign In </Button><br></br><br></br><br></br>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/forget_password_page" variant="body2"> Forgot password? </Link>
                                </Grid>
                                <Grid item>
                                    <Link variant="body2" href="/Register" > Don't have an account? Sign Up </Link><br></br><br></br>
                                </Grid>
                            </Grid>
                        </form>
                        <div>
                            <p> Quick access with </p>
                            <GoogleLoginn dataFromParent ={this.state.data_from_sql}/>
                            <FaceBookLogin />
                        </div><br></br>
                    </div>
                    <Box>{this.Copyright}</Box>
                </Container>
            </div>
        )
    }
}


