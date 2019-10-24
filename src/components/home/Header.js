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
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About us</li></a>
              <a href="#"><li>Services</li></a>
              <a href="#"><li>Portfolio</li></a>
              <a href="#"><li>Blog</li></a>
              <a href="#"><li>Contact us</li></a>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
