import React, { Component } from 'react'
//import Form from 'react-bootstrap/Form'
import { Button, Form, Image } from 'react-bootstrap';
//import Image from 'react-bootstrap/Image';
import 'fontsource-roboto';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

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

import '../MyStyle.css';


export default class CCRegisterPage extends Component {
    // const classes=useStyle();
    commentSection = React.createRef();

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // alert("hey");
    }

     scrolltotop = () => {
        // window.querySelector('body').scrollTo(0,0)
        document.getElementById("scroller").scroll(0, 0)

    }


    render() {
        const { classes } = this.props;
        // const commentSection = useRef(null);
        // const gotoCommentSection = () => window.scrollTo({ top: commentSection.current.offsetTop, behavior: "smooth" });
        return (
            
            <Container component="main" /*maxWidth="s"*/ style={{ backgroundColor: "#ffdf80" }}>
                <Button variant="primary" size="sm" href="/" className="but" style={{ background: "green", }} /*onClick={() => HandleClick()}*/>Back</Button>
                {/* <CssBaseline /> */}
                <div className="paper">

                    <h1 className="ExPa" > Create an Account </h1>
                    <Form className="form" noValidate>
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
                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="email" label="Email address" name="email" autoComplete="Email" autoFocus />

                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                        {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
                        <Button type="submit" fullWidth variant="contained" className="submit"> lets keep going </Button>

                        {/* <input name="user[email]" autocapitalize="off" required="" class="form-control input py-1" value="" type="text" id="user_email" autocomplete="off" spellcheck="false" aria-describedby=" "></input> */}
                        <Button id="scroller" variant="primary" size="md" className="but" onClick={this.scrolltotop}>Let's know you better </Button>

                    </Form>

                    <Form className="que" noValidate>
                        <TextField ref={this.commentSection} className="TextField" variant="outlined" margin="normal" required fullWidth id="fName" label="Would you travel with another " name="fName" autoComplete="First Name" autoFocus />
                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
                        <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />

                    </Form>
                </div>
            </Container >
        )
    }
}

// const useStyles=makeStyles(theme=>({



