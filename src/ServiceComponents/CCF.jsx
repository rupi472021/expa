import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';


export default class CCF extends Component {

    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: "",
    }

    responseFacebook = (response) => {
        console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
        alert("Hi: " + response.name + " Email : " + response.email)
    }

    componentClicked = () => {
        console.log("componentClicked")
    }


    render() {

         let fbContent;

        if (this.setState.isLoggedIn === false) {
            fbContent = null;
        }
        else {
            fbContent = (<FacebookLogin
                appId="452917926124291"
                autoLoad={true}
                textButton='FaceBook'
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }
        return (
            <div >
                {fbContent}
            </div>
        )
    }
}
