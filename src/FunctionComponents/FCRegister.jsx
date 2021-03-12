import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'fontsource-roboto';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { makeStyles } from '@material-ui/core/styles';



import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



export default function FCRegister() {

    const classes = useStyles();

    return (
        <Container component="main" /*maxWidth="s"*/ style={{ backgroundColor: "#ffdf80" }}>
            <CssBaseline />
            <div className={classes.paper}>
                {/* <Avatar alt="Remy Sharp" src="https://i.ibb.co/7S6XfNZ/circle-cropped.png" className={classes.large} /> */}
                <Typography className={classes.ExPa} > Create an Account </Typography>
                <form className={classes.form} noValidate>
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="email" label="Email address" name="email" autoComplete="Email" autoFocus />

                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                    {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
                    <Button type="submit" fullWidth variant="contained" className={classes.submit}> lets keep going </Button>

                    {/* <input name="user[email]" autocapitalize="off" required="" class="form-control input py-1" value="" type="text" id="user_email" autocomplete="off" spellcheck="false" aria-describedby=" "></input> */}

            
                </form>
            </div>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(8),
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
        backgroundColor: "white",
        // borderRadius:15
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#009900",
        fontWeight: 'bold',
    },
    // large: {
    //     width: theme.spacing(16),
    //     height: theme.spacing(16),
    // },
    ExPa: {
        marginTop:30,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Quick: {
        marginTop: 5,
    },
}));














//     const classes = useStyles();

//     return (
//         <div>
//             <h3>Create Your Account</h3>
//             <Form>
//                 <Form.Group controlId="formBasicEmail" className={classes.lines}>
//                     {/* <Form.Label>Email address</Form.Label> */}
//                     <Form.Control type="email" placeholder="Enter first name" />
//                     {/* <Form.Text className="text-muted">
//         We'll never share your email with anyone else.
//       </Form.Text> */}
//                 </Form.Group>

//                 <Form.Group controlId="formBasicEmail" className={classes.lines}>
//                     {/* <Form.Label>Email address</Form.Label> */}
//                     <Form.Control type="email" placeholder="Enter last name" />
//                     {/* <Form.Text className="text-muted">
//         We'll never share your email with anyone else.
//       </Form.Text> */}
//                 </Form.Group>


//                 <Form.Group controlId="formBasicEmail" className={classes.lines}>
//                     {/* <Form.Label>Email address</Form.Label> */}
//                     <Form.Control type="email" placeholder="Enter email" />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//                 </Form.Text>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword" className={classes.lines}>
//                     {/* <Form.Label>Password</Form.Label> */}
//                     <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//                 {/* <Form.Group controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group> */}
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     )
// }


// const useStyles = makeStyles((theme) => ({
//     lines:{
//         paddingTop :15,
//         // height:100
        

//     }
// }));