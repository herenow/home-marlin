import React from 'react'
import Slider from 'react-slick'
import SliderBox from './SliderBox'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: this.verifyIsMobile()
    }
  }

  buildSlides() {
    const indexes = this.state.isMobile ? [1,2,3] : [1,2,3,4,5,6];
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

  verifyIsMobile() {
    const windowWidth = window.innerWidth

    return windowWidth >= 1024 ? false : true
  }

  defineSlider() {
    if (this.verifyIsMobile() && !this.state.isMobile) this.setState({ isMobile: true })
    else if (!this.verifyIsMobile() && this.state.isMobile) this.setState({ isMobile: false }) 
  }

  renderMobileCarousel() {
    const NextArrow = (props) => {
      const { className, onClick } = props;

      return (
        <div 
          className={`${ className } slider__carousel__next-arrow`}
          onClick={ onClick }        
        />
      )
    }

    const PrevArrow = (props) => {
      const { className, onClick } = props;

      return (
        <div 
          className={`${ className } slider__carousel__prev-arrow`}
          onClick={ onClick }        
        />
      )
    }

    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      dotsClass: 'slider__carousel__dots',
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }

    return (
      <Slider className="slider__carousel--mobile" { ...settings } >
        { this.buildSlides() }
      </Slider>
    )
  }

  renderDesktopCarousel() {
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
      <Slider className="slider__carousel" { ...settings }>
        { this.buildSlides() }
      </Slider>
    )
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.defineSlider())
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', () => this.defineSlider())
    } 
  }

  render() {
    return (
      <section className="slider">
        <div className="slider__container">
          <div className="slider__header" ref={ this.props.aboutReference }>
            <h2>Missão, visão, valores.</h2>
          </div>
          { this.renderDesktopCarousel() }
          { this.renderMobileCarousel() }
        </div>
      </section>
    );
  }
}
