import React from 'react';

export default class Banner extends React.Component {
  render () {
    return (
      <div className="indexed-section">
        <div className="about">
          <div className="about__content">
            <h2 className="about__content__title">Sobre nós</h2>
            <div className="about__content__text">
              <span />
              <div>
                <p>
                  A Marlim.co é uma facilitadora de pagamentos, ou um PSP no jargão comercial (Payment Service Provider).
                  Somos a solução de meios de pagamentos para seu comércio, seja virtual ou físico.
                  <br />
                  <br />
                  Cuidamos de todo o processo com segurança, transparência e agilidade.
                  Entregamos uma maior conversão para o seu negócio, operando com as principais formas de pagamento disponíveis no mercado.
                  <br />
                  <br />
                  Conheça nossas soluções, a Marlim.co está aqui para tornar tudo possível.
                </p>
                <button onClick={ () => this.props.onAboutClick() }>
                  See More →
                </button>
              </div>
            </div>
          </div>
          <div className="about__image" />
        </div>
        <div
          className="indexed-section__index"
          onClick={ () => this.props.onServicesClick() }
          >
          <p className="indexed-section__index__section">services</p>
          <span />
          <p className="indexed-section__index__number">02</p>
        </div>
      </div>
    );
  }
}
