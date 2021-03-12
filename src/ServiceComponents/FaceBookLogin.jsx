import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class FaceBookLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            name: '',
            email: '',
            picture: '',
        }
    }

    responseFacebook = (response) => {
        console.log('[Login Success from Facebook] currentUser:', response)
        this.setState({
            isLoggedIn: true,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
        console.log("user facebook profile iamge is : " + response.picture.data.url )
    }

    render() {
        return (
            this.setState.isLoggedIn ? 'Home' :
                (<div style={{marginTop: 5}}>
                    <FacebookLogin
                        appId="452917926124291"
                        autoLoad={false}
                        textButton='Login'
                        fields="name,email,picture"
                        icon="fa-facebook"
                        //onClick={this.responseFacebook}
                        callback={this.responseFacebook}
                    />
                </div>)
        )
    }
}

