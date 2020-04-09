import React from 'react';

export default class Banner extends React.Component {
  render () {
    return(
      <section className="banner">
        <div className="banner__intro">
          <div className="banner__intro__title">
            <h1>Aqui tudo é possível.</h1>
            <p>Somos a solução de meios de pagamentos para seu comércio, seja virtual ou físico</p>
          </div>
        </div>
      </section>
    );
  }
}
