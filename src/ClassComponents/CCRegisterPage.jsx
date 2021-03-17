import React, { Component } from 'react'
//import Form from 'react-bootstrap/Form'
import { Button, Form, Image } from 'react-bootstrap';
//import Image from 'react-bootstrap/Image';
import 'fontsource-roboto';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
import classes from './BlogCard.module.css';
import '../MyStyle.css';
import { CssBaseline } from '@material-ui/core';
import { Opacity } from '@material-ui/icons';


export default class CCRegisterPage extends Component {
    // const classes=useStyle();
    commentSection = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            opacity: 0.4,
        }

    }

    componentDidMount() {
        alert("hey");
        window.scrollTo(0, 0);

    }

    scrolltotop = () => {
        // window.querySelector('body').scrollTo(0,0)
        document.getElementById("scroller").scroll(0, 0)

    }

    goTO = () => {
        window.scrollTo({ top: 500, behavior: 'smooth' });
        // document.getElementsByClassName("part2").style.backgroundColor='blue';
        this.setState(prevState => ({
            opacity: 1
        }))

    }


    render() {
        // const { classes } = this.props;
        // const commentSection = useRef(null);
        // const gotoCommentSection = () => window.scrollTo({ top: commentSection.current.offsetTop, behavior: "smooth" });
        return (
            // <div className={classes.NewBLogCard}>
            //     <Container>
            //         {/* <Container component="main" maxWidth="s" style={{ backgroundColor: "#ffdf80" }}> */}
            //         <CssBaseline />
            //         <div className={classes.Container}>
            //             <Button variant="primary" size="sm" href="/" className="but" style={{ background: "green", }} /*onClick={() => HandleClick()}*/>Back</Button>

            //             {/* <div className="paper"> */}
            //             <form>
            //                 <h1 className="ExPa" > Create an Account </h1>
            //                 {/* <Form className="form" noValidate> */}
            //                 {/* <Avatar alt="Remy Sharp" src="https://i.ibb.co/7S6XfNZ/circle-cropped.png" className={classes.large} /> */}
            //                 {/* <div className="container">
            //             <h3>bezkoder.com</h3>
            //             <h4>React Image Upload with Preview</h4>

            //             <div className="content">

            //                 <UploadImages/>
            //             </div>
            //         </div> */}
            //                 <Row>
            //                     <Col xs={6} md={4}>
            //                         <Image src="../logo.svg/171x180" roundedCircle />
            //                     </Col>

            //                 </Row>
            //                 <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />

            //                 {/* <PictureUploader className={classes.ProfilePhoto} /> */}
            //                 <TextField size="small" className="TextField" variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
            //                 <TextField size="small" className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
            //                 <TextField size="small" className="TextField" variant="outlined" margin="normal" required fullWidth id="email" label="Email address" name="email" autoComplete="Email" autoFocus />

            //                 <TextField size="small" className="TextField" variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            //                 {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
            //                 {/* <Button type="submit" fullWidth variant="contained" className="submit"> lets keep going </Button> */}

            //                 {/* <input name="user[email]" autocapitalize="off" required="" class="form-control input py-1" value="" type="text" id="user_email" autocomplete="off" spellcheck="false" aria-describedby=" "></input> */}
            //                 {/* <Button id="scroller" variant="primary" size="md" className="but" onClick={this.scrolltotop}>Let's know you better </Button> */}
            //                 <Button fullWidth variant="primary" size="large" onClick={this.goTO}> Let's know you better </Button>
            //             </form>
            //             {/* </Form> */}

            //             {/* <Form className="que" noValidate>
            //                 <TextField ref={this.commentSection} className="TextField" variant="outlined" margin="normal" required fullWidth id="fName" label="Would you travel with another " name="fName" autoComplete="First Name" autoFocus />
            //                 <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
            //                 <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
            //                 <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
            //                 <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
            //                 <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
            //                 <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
            //                 <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />
            //                 <TextField className="TextField" variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Last Name" autoFocus />

            //             </Form> */}
            //             {/* </div> */}
            //         </div>
            //     </Container >
            // </div>


            <div className={classes.NewBLogCard}>
                <Container>
                    {/* <CssBaseline /> */}
                    <div className={classes.Container} >

                        <Button variant="secondary" size="sm" href="/" className="but" /*onClick={() => HandleClick()}*/>BACK</Button>
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/7S6XfNZ/circle-cropped.png" style={{ width: '15vh', height: '15vh', marginTop: '10px' }} />
                        <h1 className="ExPa" > Create an Account </h1>


                        <form>
                            <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                            <Row>
                                <Col>
                                    <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                                </Col>
                                <Col>
                                    <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth name="Cpassword" label="Confirm Password" type="password" id="Cpassword" autoComplete="cunfirm-password" />
                                </Col>
                            </Row>
                            <br></br>
                            <Button fullWidth variant="primary" size="lg" onClick={this.goTO}>GET STARTED</Button>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>


                            <div id="part2" style={{ opacity: this.state.opacity }}>
                                <p>hey</p>
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
                                <p>hey</p>
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Lirst Name" autoFocus />
                                <p>hey</p>


                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />

                            </div>
                        </form>
                    </div>
                </Container >
            </div>
        )
    }
}




