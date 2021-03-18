import React from 'react';
import { GoogleLogin } from 'react-google-login';
//refresh token
//import { refreshTokenSetup } from '../utils/refreshTokenSetup';
const clientId = '337989254519-c3ucmom5f9ubap04mfmv76am274hivnm.apps.googleusercontent.com';
//const clientSecret = '4KEKfjaqldjasH0ntNzH26T2';
export default function GoogleLoginn(props) {

    const onSuccess = (res) => {

        console.log('[Login Success from google] currentUser:', res.profileObj);
        localStorage.setItem('user_fname', res.profileObj.givenName); //save first name in LS
        localStorage.setItem('user_lname', res.profileObj.familyName); //save last name in LS
        localStorage.setItem('user_email', res.profileObj.email); //save user's email in LS
        localStorage.setItem('user_image', res.profileObj.imageUrl); //save profile image in LS

        checkIfUserExistsInSQL(res.profileObj)
    };
    const onFailure = (res) => {
        console.log('[Login Falied from google] res:', res);
    };
    const checkIfUserExistsInSQL = (data) => {

        for (let index = 0; index < props.dataFromParent.length; index++) {
            if(props.dataFromParent[index].email == data.email){
            alert("Hi " + data.givenName + " you loggin successfully to ExPa!")
            window.location.href = "http://localhost:3000/pick_user_page";
            }else(window.location.href = "http://localhost:3000/Register");
        }
        //  if (props.dataFromParent.filter((n) => n.Email == data.email)) {
        //      alert("Hi " + data.givenName + " you loggin successfully to ExPa!")
        //      window.location.href = "http://localhost:3000/pick_user_page";
        //  }
        //  else (alert("this is your first time in ExPA - Please fill out the form below"))
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

//export default GoogleLoginn;










