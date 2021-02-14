import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom';

export default function Login() {
  const [error, setError] = useState(false);
  const responseSuccess = () => {
    localStorage.setItem('auth', 'true');
    return <Redirect to={{ pathname: '/' }} />;
  };

  const responseFailure = () => {
    setError(true);
  };
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseSuccess}
        onFailure={responseFailure}
        cookiePolicy="single_host_origin"
      />
      {error ? <div>Login Error, please try again</div> : null}
    </div>
  );
}
