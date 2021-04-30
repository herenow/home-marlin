import React from 'react';
import logo from '../../assets/images/logo.png';
import partnerLogo from '../../assets/images/partner_logo.png';
import stoneLogo from '../../assets/images/starter_member.png';

export default class Footer extends React.Component {
  renderIcons(forMobile) {
    const mainClass = 'footer__box__icons'
    const mobileClass = `${mainClass} ${mainClass}--mobile`

    return (
      <div className={forMobile ? mobileClass : mainClass}>
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
            <img className="footer__box__logo" src={logo} alt="marlim logo" />
            {this.renderIcons()}
          </div>
          <div className="footer__stone">
            <img src={stoneLogo} alt="stone logo" />
          </div>
          <div className="footer__partner">
            <img src={partnerLogo} alt="partner logo" />
          </div>
          <div className="footer__links">
            <ul>
              <li>About</li>
              <li>Service</li>
              <li>Clients</li>
              <li>Contact us</li>
              <li><a href="https://docs.google.com/document/u/1/d/e/2PACX-1vSyYThZ7u__rAxFd-bjMRamuFA-4myE3gTZweExO9AngNQTxFt1Wiu8osQwjjyhsIg8jSizSluasuPB/pub" target="_blank">Termos e condições</a></li>
              <li><a href="https://docs.google.com/document/u/1/d/e/2PACX-1vRG6AhZN04C8N75bD93etgdBDs8mdhSL9BzoopDulWkzjQDCb5AjF-oFTXJx1YoyCrcjhi17HY7ka-y/pub" target="_blank">Política de privacidade</a></li>
            </ul>
          </div>
          <div className="footer__decoration" />
          {this.renderIcons(true)}
        </div>
      </section>
    );
  }
}
