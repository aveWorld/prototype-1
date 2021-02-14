import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const name = localStorage.getItem('authName');
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('authName');
    history.push('/login');
  };
  return (
    <header className="header">
      <span>{name}</span>
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={logout}
      />
    </header>
  );
}
