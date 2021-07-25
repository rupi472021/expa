import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Swal from 'sweetalert2'
import { Switch, Route, withRouter } from 'react-router-dom';
//refresh token
//import { refreshTokenSetup } from '../utils/refreshTokenSetup';
const clientId = '692650076345-58cr403pevv5uuetdgpdv45as54v0s4p.apps.googleusercontent.com';
//const clientSecret = '4KEKfjaqldjasH0ntNzH26T2';

function GoogleLoginn(props) {

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

        if (props.dataFromParent.find((user => user.Email === data.email))) {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Hi ' + data.givenName + ' you loggin successfully to ExPa via Google!',
                imageHeight: 1500,
                showConfirmButton: true,
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {

                //window.location.href = "http://localhost:3000/main_menu_page"
                props.history.push('/main_menu_page');
                // window.location.href = "https://adoring-curran-14d8ac.netlify.app/main_menu_page"

            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Hi " + data.givenName + " if it's your first time in ExPa - please Sign Up!",
                Onclick: () => { Swal.clickConfirm() }
            }).then(() => {
                window.location.reload(false)
                localStorage.clear();
            })
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

//export default GoogleLoginn;
export default withRouter(GoogleLoginn);










