import React from 'react';
import { GoogleLogin } from 'react-google-login';
//refresh token
//import { refreshTokenSetup } from '../utils/refreshTokenSetup';

const clientId = '337989254519-c3ucmom5f9ubap04mfmv76am274hivnm.apps.googleusercontent.com';
//const clientSecret = '4KEKfjaqldjasH0ntNzH26T2';

function GoogleLoginn() {
    const onSuccess = (res) => {
        console.log('[Login Success from google] currentUser:', res.profileObj);
        
        alert("Hi : " + res.profileObj.name + " You connected with Google")
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

export default GoogleLoginn;


