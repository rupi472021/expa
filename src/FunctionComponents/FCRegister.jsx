import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontsource-roboto';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import FormControl from '@material-ui/core/FormControl';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';



export default function FCRegister() {

    const classes = useStyles();

    return (
        <div>
            <h3>Create Your Account</h3>
            <Form>
                <Form.Group controlId="formBasicEmail" className={classes.lines}>
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter first name" />
                    {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className={classes.lines}>
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter last name" />
                    {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
                </Form.Group>


                <Form.Group controlId="formBasicEmail" className={classes.lines}>
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className={classes.lines}>
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    lines:{
        paddingTop :15,
        // height:100
        

    }
}));

