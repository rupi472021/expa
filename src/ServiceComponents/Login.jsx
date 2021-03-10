import React from 'react';
import { GoogleLogin } from 'react-google-login';
//refresh token
//import { refreshTokenSetup } from '../utils/refreshTokenSetup';

const clientId = '337989254519-c3ucmom5f9ubap04mfmv76am274hivnm.apps.googleusercontent.com';
//const clientSecret = '4KEKfjaqldjasH0ntNzH26T2';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);

        //initializing the setup
       // refreshTokenSetup(res);
    };


    const onFailure = (res) => {
        console.log('[Login Falied] res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;


