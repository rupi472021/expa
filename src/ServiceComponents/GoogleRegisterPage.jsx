import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Swal from 'sweetalert2'
//refresh token
//import { refreshTokenSetup } from '../utils/refreshTokenSetup';
const clientId = '337989254519-c3ucmom5f9ubap04mfmv76am274hivnm.apps.googleusercontent.com';
//const clientSecret = '4KEKfjaqldjasH0ntNzH26T2';
export default function GoogleRegisterPage(props) {

    const onSuccess = (res) => {

        // console.log('[Login Success from google] currentUser:', res.profileObj);
        // localStorage.setItem('user_fname', res.profileObj.givenName); //save first name from Google in LS
        // localStorage.setItem('user_lname', res.profileObj.familyName); //save last name from Google in LS
        // localStorage.setItem('user_email', res.profileObj.email); //save user's email from Google in LS
        // localStorage.setItem('user_image', res.profileObj.imageUrl); //save profile image from Google in LS

        checkIfUserExistsInSQL(res.profileObj)

    };

    const onFailure = (res) => {
        console.log('[Login Falied from google] res:', res);
    };


    const checkIfUserExistsInSQL = (data) => {

        localStorage.setItem('user_fname', data.givenName); //save first name from Google in LS
        localStorage.setItem('user_lname', data.familyName); //save last name from Google in LS
        localStorage.setItem('user_email', data.email); //save user's email from Google in LS
        localStorage.setItem('user_image', data.imageUrl); //save profile image from Google in LS

        if (props.dataFromParent.find((user => user.Email === data.email))) {
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
        else {
            alert("sign me up");

            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: "Hi " + data.givenName + " if it's your first time in ExPa - please Sign Up!",
            //     Onclick: () => { Swal.clickConfirm() }
            // }).then(() => {
            //     window.location.reload(false)
            //     localStorage.clear();
            // })
        }
    }

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
            />
        </div>
    );
}
















