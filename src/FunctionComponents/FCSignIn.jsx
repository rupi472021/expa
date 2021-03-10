import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CCRegister from '../ClassComponents/CCRegister';

function Copyright() {
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



export default function FCSignIn() {

    const classes = useStyles();
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
            <Container component="main" /*maxWidth="s"*/ style={{ backgroundColor: "#ffdf80" }}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar alt="Remy Sharp" src="https://i.ibb.co/7S6XfNZ/circle-cropped.png" className={classes.large} />
                    <Typography className={classes.ExPa} > ExPa </Typography>
                    <form className={classes.form} noValidate>
                        <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                        <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button type="submit" fullWidth variant="contained" className={classes.submit}> Sign In </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2"> Forgot password? </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2"> Don't have an account? Sign Up </Link>
                            </Grid>
                        </Grid>
                    </form>
                    <div className={classes.Quick}>
                        <p className="fm-sns-title" data-spm-anchor-id="a2g0o.home.0.i6.654d2145siOtTC">Quick access with</p>
                        <GoogleLogin clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" buttonText onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={'single_host_origin'} />
                    </div>
                </div>
                <Box mt={15}>
                    <Copyright />
                </Box>
            </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    TextField: {
        backgroundColor: "white"
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#009900",
        fontWeight: 'bold',
    },
    large: {
        width: theme.spacing(16),
        height: theme.spacing(16),
    },
    ExPa: {
        fontSize: 80,
        fontWeight: 'bold',
    },
    Quick: {
        marginTop: 5,
    },
}));