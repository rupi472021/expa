import React, { Component } from 'react'
import { Button, Form, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import "bootstrap/dist/css/bootstrap.min.css";
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
        return (
            //                 {/* <PictureUploader className={classes.ProfilePhoto} /> */}
                      

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
                                <h4>oeuwfhwoeuh</h4>
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="fName" label="First Name" name="fName" autoComplete="First Name" autoFocus />
                                <h4>oeuwfhwoeuh</h4>
                                <TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="lName" label="Last Name" name="lName" autoComplete="Lirst Name" autoFocus />
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




