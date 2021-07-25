import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Swal from 'sweetalert2'
//refresh token
//import { refreshTokenSetup } from '../utils/refreshTokenSetup';
const clientId = '692650076345-58cr403pevv5uuetdgpdv45as54v0s4p.apps.googleusercontent.com';
//const clientSecret = '4KEKfjaqldjasH0ntNzH26T2';


export default function GoogleRegisterPage(props) {

    const onSuccess = (res) => {

        console.log('[Login Success from google] currentUser:', res.profileObj);
        localStorage.setItem('user_fname', res.profileObj.givenName); //save first name from Google in LS
        localStorage.setItem('user_lname', res.profileObj.familyName); //save last name from Google in LS
        localStorage.setItem('user_email', res.profileObj.email); //save user's email from Google in LS
        localStorage.setItem('user_image', res.profileObj.imageUrl); //save profile image from Google in LS

        checkIfUserExistsInSQL(res.profileObj)

    };



    const onFailure = (res) => {
        console.log('[Login Falied from google] res:', res);
    };


    const checkIfUserExistsInSQL = (data) => {


        if (props.dataFromParent.find((user => user.Email === data.email))/* && props.queDatafromParent.find((user => user.Email === data.email))*/) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Hi ' + data.givenName + ' you loggin successfully to ExPa via Google!',
                imageHeight: 1500,
                showConfirmButton: true,
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                window.location.href = "http://localhost:3000/main_menu_page"
            })
        }
        // else if (props.dataFromParent.find((user => user.Email === data.email))) {
        //     alert("should fill up ques");


        // }

        else {
            alert("should sign up")

            window.scrollTo({ top: 530, behavior: 'smooth' });
         
        }
    }
    // const googlepushed = () => {
    //     window.scrollTo({ top: 530, behavior: 'smooth' })
    //     this.setState(prevState => ({
    //         opacity: 1,
    //         disabled: true,
    //         backgroundColor: 'green'


    //     }))
    // }
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText='Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={false}
            // render={renderProps => (
            //     <button onClick={alert("jsadihjas")} >Google</button>
            //   )}
            //  render={onclick=>(() => alert("heyhey"))}

            />
            {/* <CCRegisterPage googlepushed={localStorage.getItem('user_fname')}/> */}
        </div>
    );
}
















