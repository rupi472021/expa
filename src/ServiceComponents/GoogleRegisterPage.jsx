import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Swal from 'sweetalert2'
//refresh token
//import { refreshTokenSetup } from '../utils/refreshTokenSetup';
const clientId = '337989254519-c3ucmom5f9ubap04mfmv76am274hivnm.apps.googleusercontent.com';
//const clientSecret = '4KEKfjaqldjasH0ntNzH26T2';
export default function GoogleRegisterPage() {

    const onSuccess = (res) => {

        console.log('[Login Success from google] currentUser:', res.profileObj);
        localStorage.setItem('user_fname', res.profileObj.givenName); //save first name from Google in LS
        localStorage.setItem('user_lname', res.profileObj.familyName); //save last name from Google in LS
        localStorage.setItem('user_email', res.profileObj.email); //save user's email from Google in LS
        localStorage.setItem('user_image', res.profileObj.imageUrl); //save profile image from Google in LS


    };

    const onFailure = (res) => {
        console.log('[Login Falied from google] res:', res);
    };

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
















