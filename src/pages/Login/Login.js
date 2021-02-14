import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [error, setError] = useState(false);
  const history = useHistory();
  const responseSuccess = (response) => {
    localStorage.setItem('authName', response.profileObj.givenName);
    history.push('/');
  };

  const responseFailure = (response) => {
    console.log(response);
    setError(true);
  };
  return (
    <div className="login-page">
      <h1 className="login__title">LogIn</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseSuccess}
        onFailure={responseFailure}
        isSignedIn={false}
        cookiePolicy="single_host_origin"
      />
      {error ? <div>Login Error, please try again</div> : null}
    </div>
  );
}
