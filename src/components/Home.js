import React, { createRef } from 'react';
import Header from './home/Header';
import Banner from './home/Banner';
import About from './home/About';
import Slider from './home/Slider';
import Payment from './home/Payment';
import Form from './home/Form';
import Footer from './home/Footer';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.aboutReference = createRef();
    this.servicesReference = createRef();
  }

  handleAnchor(reference) {
    window.scrollTo(0, reference.current.offsetTop);
  }

  setSectionMargin() {
    const autoMarginElements = document.getElementsByClassName('js-section-margin');
    const baseElement        = document.getElementById('js-base-margin');
    const style              = baseElement.currentStyle || window.getComputedStyle(baseElement);

    for (let i = 0; i < autoMarginElements.length; i++) {
      autoMarginElements[i].style.marginLeft = style.marginLeft;
    }
  }

  componentDidMount() {
    if (typeof window === "undefined") return null;
    this.setSectionMargin();
  }

  render() {
    return (
      <div className="home">
        <Header />
        <Banner />
        <About
          onAboutClick={ this.handleAnchor.bind(this, this.aboutReference) }
          onServicesClick={ this.handleAnchor.bind(this, this.servicesReference) }
        />
        <Slider aboutReference={ this.aboutReference } />
        <Payment servicesReference={ this.servicesReference } />
        <Form />
        <Footer />
      </div>
    );
  }
}
