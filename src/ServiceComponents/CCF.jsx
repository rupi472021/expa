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
    }

    componentClicked = () => {
        console.log("componentClicked")
    }


    render() {

         let fbContent = alert(this.state.name)

        if (this.setState.isLoggedIn == false) {
            fbContent = null;
        }
        else {
            fbContent = (<FacebookLogin
                appId="452917926124291"
                autoLoad={false}
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
