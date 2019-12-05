import React from 'react';

export default class Banner extends React.Component {
  setBannerPadding() {
    const windowWidth = window.innerWidth
    let   padding = windowWidth * 0.2986

    if (window.innerWidth <= 600) {
      padding = windowWidth * 0.34
    }

    document.querySelector('.banner').style.paddingBottom = `${ padding }px`
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setBannerPadding()
      window.addEventListener('resize', this.setBannerPadding)
    } 
  }
  
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.setBannerPadding)
    } 
  }

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
