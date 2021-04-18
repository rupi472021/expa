import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '@material-ui/core/Avatar';
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

    componentDidMount = () => {
        localStorage.clear();

    }

    handleShow = () => {
        Swal.fire({
            title: 'ExPa Founders',
            text: 'Ben Meshulam & Daniel Brand',
            imageUrl: 'https://i.ibb.co/2Pg5WtY/ben-daniel.png',
            imageWidth: 1000,
            imageHeight: 250,
            imageAlt: 'Custom image',
        })
    }

    Copyright = () => { // footer page in the LoginPage
        return (
            <Typography variant="body2" color="textSecondary" align="center" style={{ fontWeight: 'bold' }}>
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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "one detail or more are missing, please try again",
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                window.location.reload(false);
            })
        }
        else (this.handle());
    }

    handle = () => {

        console.log("in handle function");
        console.log(this.props.dataFromApptoLoginPage) // show all data from Users table in the SQL from parent

        if (this.props.dataFromApptoLoginPage.find((user => user.Email == this.state.email) && (user => user.Password == this.state.password))) {

            let index = this.props.dataFromApptoLoginPage.findIndex(obj => obj.Email === this.state.email);
            console.log(index);

            localStorage.setItem('user_email', this.state.email)
            localStorage.setItem('user_fname', this.props.dataFromApptoLoginPage[index].Fname)
            localStorage.setItem('user_lname', this.props.dataFromApptoLoginPage[index].Lname)
            //localStorage.setItem('social_media_name', this.state.social_media_name)
            if (this.props.dataFromApptoLoginPage[index].Image == 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg') {
                localStorage.setItem('user_image', "https://png.pngtree.com/png-clipart/20200701/original/pngtree-character-default-avatar-png-image_5407167.jpg")
            }
            else (localStorage.setItem('user_image', "http://proj.ruppin.ac.il/igroup47/prod/uploadedFiles/" + this.state.email + ".png"))

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Hi ' + this.props.dataFromApptoLoginPage[index].Fname + " " + this.props.dataFromApptoLoginPage[index].Lname + ' you loggin successfully to ExPa!',
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
            <div className={classes.NewBLogCard} >
                <Container>
                    <CssBaseline />
                    <div className={classes.Container} >
                        <br></br><br></br>
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/GF9rjsr/circle-cropped.png" style={{ width: '20vh', height: '20vh', marginTop: '10px' }} />
                        <br></br>
                        <form>
                            <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} />
                            <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={(a) => this.setState({ password: a.target.value })} />
                            {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
                            <br></br><br></br>
                            <Button variant="dark" style={{boxShadow:'0 0 10px  #141414',width: '100%', borderRadius: 10, borderWidth: 5, fontWeight: 'bold', fontSize: '20px' }} onClick={this.signinbtn} fullWidth size="lg" >Log In</Button><br></br><br></br><br></br>

                            <Grid container>
                                <Grid item xs>
                                <Button variant="warning" style={{width: '90%', borderRadius: 10, borderWidth: 5, fontWeight: 'bold', fontSize: '15px' }} href="/forget_password_page" fullWidth size="sm" > Forgot Password</Button>

                                    {/* <Link style={{ fontWeight: 'bold', fontSize: 15 }} href="/forget_password_page" variant="body2"> Forgot password? </Link> */}
                                </Grid>
                                <Grid item xs>
                                <Button variant="warning" style={{width: '90%', borderRadius: 10, borderWidth: 5, fontWeight: 'bold', fontSize: '15px' }} href="/Register" fullWidth size="sm" > Sign Up</Button><br></br>

                                    {/* <Link style={{ fontWeight: 'bold', fontSize: 15 }} variant="body2" href="/Register" > Don't have an account? Sign Up </Link><br></br><br></br> */}
                                </Grid>
                            </Grid>
                        </form>
                        <br></br><br></br><br></br>
                        <div style={{ width: '80%' }}>
                            {/* <p style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}> Quick access with: </p> */}
                            <p style={{width: '60%', fontWeight: 'bold', fontSize: '15px',marginLeft:'55px' }}> Quick Access With </p>

                        </div><br></br><br></br>
                        <div style={{ height: 70, width: '80%' }}>
                            <div style={{ marginRight: 100 }}>
                                <GoogleLoginn dataFromParent={this.props.dataFromApptoLoginPage} />
                            </div>
                            <div style={{ marginLeft: 120, marginTop: -50 }}>
                                <FaceBookLogin dataFromParent={this.props.dataFromApptoLoginPage} />
                            </div>
                            <Box style={{ marginLeft: 50 }} m={1}>{this.Copyright()}</Box>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}


