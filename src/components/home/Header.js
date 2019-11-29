import React from 'react';
import logo from '../../assets/images/logo.png';

export default class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <div id="js-base-margin" className="header__container">
          <img className="header__container__logo" src={logo} alt="marlim logo"/>
          <nav className="header__container__menu">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
