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

        console.log("user facebook profile iamge is : " + response.picture.data.url)
        localStorage.setItem('user_full_name', response.name); //save first name in LS
        localStorage.setItem('user_email', response.email); //save user's email in LS
        localStorage.setItem('user_image', response.picture.data.url); //save profile image in LS
        localStorage.setItem('social_media_name', response.graphDomain); //save the name "FacceBook" in LS
        window.location.href = "http://localhost:3000/pick_user_page";
        
    }

    render() {
        return (
            this.setState.isLoggedIn ? 'Home' :
                (<div style={{ marginTop: 5 }}>
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

