import React from 'react';
import { GoogleLogin } from 'react-google-login';

export default function Login() {
  const responseGoogle = () => {
    console.log('response');
  };
  return (
    <div>
      <GoogleLogin
        clientId="553606441993-nll3b3n2b7bv3jko9euss4kcbqnvaku1.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}
