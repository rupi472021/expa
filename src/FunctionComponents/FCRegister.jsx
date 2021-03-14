import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import 'fontsource-roboto';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useScrollBy } from "react-use-window-scroll";
import Avatar from '@material-ui/core/Avatar';

// import{useWindowScroll} from "react-use";

import "bootstrap/dist/css/bootstrap.min.css";
// import UploadImages from '../Components/Image-Upload';
import PictureUploader from '../Components/PictureUploader';
import { Row } from 'reactstrap';
import { Col } from 'react-bootstrap';


export default function FCRegister() {
    const commentSection = useRef(null);
    const gotoCommentSection = () => window.scrollTo({ top: commentSection.current.offsetTop, behavior: "smooth" });

    const classes = useStyles();

    //  componentDidMount() {
    //     this.$el = $(this.el);
    //     this.$el.chosen();
    //   }


    return (

        <Container component="main" /*maxWidth="s"*/ style={{ backgroundColor: "#ffdf80" }}>
            <Button variant="primary" size="sm" href="/" className={classes.but} style={{ background: "red", }} /*onClick={() => HandleClick()}*/>Back</Button>
            {/* <CssBaseline /> */}
            <div className={classes.paper}>

                <Typography className={classes.ExPa} > Create an Account </Typography>
                <Form className={classes.form} noValidate>
                    {/* <Avatar alt="Remy Sharp" src="https://i.ibb.co/7S6XfNZ/circle-cropped.png" className={classes.large} /> */}
                    {/* <div className="container">
                        <h3>bezkoder.com</h3>
                        <h4>React Image Upload with Preview</h4>

                        <div className="content">
                            <UploadImages/>
                        </div>
                    </div> */}
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="../logo.svg/171x180" roundedCircle />
                        </Col>

                    </Row>
                    {/* <PictureUploader className={classes.ProfilePhoto} /> */}
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="email" label="Email address" name="email" autoComplete="Email" autoFocus />

                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                    {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
                    {/* <Button type="submit" fullWidth variant="contained" className={classes.submit}> lets keep going </Button> */}

                    {/* <input name="user[email]" autocapitalize="off" required="" class="form-control input py-1" value="" type="text" id="user_email" autocomplete="off" spellcheck="false" aria-describedby=" "></input> */}
                    <Button variant="primary" size="md" className={classes.but} onClick={gotoCommentSection}>Let's know you better </Button>

                </Form>

                <Form className={classes.que} /*ref={question}*/ noValidate>
                    <TextField ref={commentSection} className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="fName" label="Would you travel with another " name="fName" autoComplete="First Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="fName" label="Would you travel with another " name="fName" autoComplete="First Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="fName" label="Would you travel with another " name="fName" autoComplete="First Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
                    <TextField className={classes.TextField} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                </Form>
            </div>
        </Container >
    );
}

const useStyles = makeStyles((theme) => ({
    ProfilePhoto:{
        background:'red'
    },
    // container:{
    //     // width: 600px !important;
    //     // margin: 20px;
    //     width:800
    //   },

    //   content :{
    //     // margin: 20px 0;
    //     margin:20,
    //     height:200
    //   },

    //   preview :{
    //     // max-width: 200px;
    //     maxWidth:200
    // },



    que: {
        opacity: 0.5,
    },

    but: {
        marginTop: 10,
        opacity: 0.74,

    },

    paper: {
        marginTop: theme.spacing(0),
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
        borderRadius: 5,
        width: '100%',

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
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Quick: {
        marginTop: 5,
    },
}));


