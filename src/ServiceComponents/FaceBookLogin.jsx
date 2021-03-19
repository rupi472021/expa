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
        this.saveUserDataInLocalStorge(response);
    }

    saveUserDataInLocalStorge = (data) => {

        console.log("user facebook profile iamge is : " + data.picture.data.url)
        localStorage.setItem('user_full_name', data.name); //save first name in LS
        localStorage.setItem('user_email', data.email); //save user's email in LS
        localStorage.setItem('user_image', data.picture.data.url); //save profile image in LS
        localStorage.setItem('social_media_name', data.graphDomain); //save the name "FacceBook" in LS
        this.checkIfUserExistsInSQL(data);
    }

    checkIfUserExistsInSQL = (data) => {

        if (this.props.dataFromParent.find((user => user.Email === data.email))) {
            alert("Hi " + data.name + " you loggin successfully to ExPa via FaceBook!")
            window.location.href = "http://localhost:3000/pick_user_page";
        }
        else (alert("Hi " + data.name + " it's your first time in ExPa - please Sign Up!"));
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
                        callback={this.responseFacebook}
                    // callback={this.responseFacebook}
                    />
                </div>)
        )
    }
}

