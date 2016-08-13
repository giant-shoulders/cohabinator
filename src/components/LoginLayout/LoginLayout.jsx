import './LoginLayout.css';

import React, { PropTypes } from 'react';

const LoginLayout = ({ onUserLogin, onUserCreate }) => {
  let emailField;
  let passField;

  const onFormSubmit = e => {
    e.preventDefault();
    onUserLogin(emailField.value, passField.value);
  };

  const onCreateClick = () => {
    onUserCreate(emailField.value, passField.value);
  };

  return (
    <div className="flex-center">
      <div className="login-container">
        <h2 className="text-center">Cohabinator</h2>
        <form onSubmit={onFormSubmit}>
          <fieldset>
            <label htmlFor="emailField">Email</label>
            <input type="email" id="emailField" ref={node => { emailField = node; }} />
            <label htmlFor="passField">Password</label>
            <input type="password" id="passField" ref={node => { passField = node; }} />
            <input type="submit" className="button" value="Sign In" />
            <button className="button button-outline" onClick={onCreateClick}>Sign Up</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

LoginLayout.propTypes = {
  onUserLogin: PropTypes.func.isRequired,
  onUserCreate: PropTypes.func.isRequired,
};

export default LoginLayout;
