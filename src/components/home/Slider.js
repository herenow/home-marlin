import React from 'react';

export default class Slider extends React.Component {
  render() {
    return (
      <section className="slider">
        <div className="slider__container js-section-margin">
          <div className="slider__header" ref={ this.props.aboutReference }>
            <h2>Missão, visão, valores.</h2>
          </div>
          <ul id="image-slider" className="slider__carousel">
            <li className="slider__carousel__box">
              <div id="carousel1" className="slider__carousel__box__image" />
              <div className="slider__carousel__box__legend">
                <h2>01</h2>
                <span />
                <h3>missão</h3>
              </div>
              <p className="slider__carousel__box__description">
                Facilitar os meios de pagamento e fluxo de caixa das empresas.
                Com atendimento especializado e qualidade em nossos serviços,
                queremos que as empresas vendam cada vez mais.
              </p>
            </li>
            <li className="slider__carousel__box">
              <div id="carousel2" className="slider__carousel__box__image" />
              <div className="slider__carousel__box__legend">
                <h2>02</h2>
                <span />
                <h3>visão</h3>
              </div>
              <p className="slider__carousel__box__description">
                Queremos crescer junto com nossos parceiros e clientes.
                Acreditamos nas relações de longo prazo para chegar o mais longe possível.
              </p>
            </li>
            <li className="slider__carousel__box">
              <div id="carousel3" className="slider__carousel__box__image" />
              <div className="slider__carousel__box__legend">
                <h2>03</h2>
                <span />
                <h3>valores</h3>
              </div>
              <p className="slider__carousel__box__description">
                Fazer do mundo melhor, social e ambientalmente.
                Destinamos uma parte dos nossos lucros para organizações com causas pela natureza.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
