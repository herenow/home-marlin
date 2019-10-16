import React from 'react';
import logo from '../../assets/images/logo.png';

export default class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="marlim logo"/>
        </div>
        <div className="header__links">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
      </header>
    );
  }
}
