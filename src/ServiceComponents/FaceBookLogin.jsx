import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';



function FaceBook() {
  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <div>
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        buttonText="Login with"
        fields="name,email,picture"
        callback={responseFacebook} />
    </div>
  );
}

export default FaceBook;