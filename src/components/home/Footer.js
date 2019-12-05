import React from 'react';
import logo from '../../assets/images/logo.png';
import partnerLogo from '../../assets/images/partner_logo.png';

export default class Footer extends React.Component {
  renderIcons(forMobile) {
    const mainClass = 'footer__box__icons'
    const mobileClass = `${ mainClass } ${ mainClass }--mobile`

    return (
      <div className={ forMobile ? mobileClass : mainClass }>
        <i className="mdi mdi-facebook" />
        <i className="mdi mdi-twitter" />
        <i className="mdi mdi-dribbble" />
        <i className="mdi mdi-behance" />
        <i className="mdi mdi-instagram" />
      </div>
    )
  }

  render() {
    return (
      <section className="footer">
        <div className="footer__limiter">
          <div className="footer__box">
            <img className="footer__box__logo" src={logo} alt="marlim logo"/>
            { this.renderIcons() }
          </div>
          <div className="footer__links">
            <ul>
              <li>About</li>
              <li>Service</li>
              <li>Clients</li>
              <li>Contact us</li>
              <li>Termos e condições</li>
              <li>Políticas de privacidade</li>
            </ul>
          </div>
          <div className="footer__partner">
            <img src={partnerLogo} alt="partner logo"/>
          </div>
          <div className="footer__decoration" />
          { this.renderIcons(true) }
        </div>
      </section>
    );
  }
}
