import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';

export default class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props);

        // bound functions
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);

        // component state
        this.state = {
            email: '',
        };
    }

    // update state as email value changes
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    // catch enter clicks
    handleKeyPress(target) {
        if (target.charCode === 13) {
            this.handleValidSubmit();
        }
    }

    // Handle submission once all form data is valid
    handleValidSubmit() {
        const { resetPasswordFunction } = this.props;
        const formData = this.state;
        resetPasswordFunction(formData.email);
    }

    render() {
        return (
            <div style={{
                borderTopColor: 'red',
                borderLeftColor: 'red',
                borderRightColor: 'red',
                borderBottomColor: 'red',
                borderWidth: 5,
                fontWeight: 'bold',
                alignItems: 'center',
                backgroundColor: "#ffdf80",
                position: 'absolute',
                height: "100vh",
            }}>
                <div>
                    <div>
                        <p>
                            If you‘d like to reset your password, please enter your email here
                            and a link to do so will be sent to the address you enter.
                        </p>
                        <AvForm onValidSubmit={this.handleValidSubmit}>
                            <AvGroup>
                                <Label for="userEmail">Email </Label>
                                <AvInput
                                    id="userEmail"
                                    name="email"
                                    onChange={this.handleEmailChange}
                                    onKeyPress={this.handleKeyPress}
                                    placeholder="noreply@example.com"
                                    required
                                    type="email"
                                    value={this.state.email}
                                />
                                <AvFeedback>A valid email is required to reset your password</AvFeedback>
                            </AvGroup>
                            <Button>Reset Password</Button>
                        </AvForm>
                    </div>
                </div>
            </div>
        );
    }
}

