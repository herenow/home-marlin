import React from 'react'
import Slider from 'react-slick'
import SliderBox from './SliderBox'

export default class Carousel extends React.Component {
  buildSlides() {
    const indexes = new Array(6);
    const slides  = [...indexes].map((_value, index) => {
      let indexProp = index <= 2 ? index : (index - 3);

      return(
        <SliderBox key={ index } index={ indexProp } />
      )
    })

    return(
      slides
    )
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
      pauseOnHover: false,
      speed: 2000,
      cssEase: 'linear'
    }

    return (
      <section className="slider">
        <div className="slider__container">
          <div className="slider__header" ref={ this.props.aboutReference }>
            <h2>Missão, visão, valores.</h2>
          </div>

          <Slider className="slider__carousel" { ...settings }>
            { this.buildSlides() }
          </Slider>
        </div>
      </section>
    );
  }
}
