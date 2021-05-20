import React from 'react'

export default class SliderBox extends React.Component {
  buildClass(index) {
    const classOptions = {
      0: 'first',
      1: 'second',
      2: 'third'
    }

    return classOptions[index]
  }

  buildTitle(index) {
    const titleOptions = {
      0: 'missão',
      1: 'visão',
      2: 'valores'
    }

    return titleOptions[index]
  }

  buildDescription(index) {
    const descriptionOptions = {
      0: 'Facilitar os meios de pagamento e fluxo de caixa das empresas. Com atendimento especializado e qualidade em nossos serviços, queremos que as empresas vendam cada vez mais.',
      1: 'Queremos crescer junto com nossos parceiros e clientes. Acreditamos nas relações de longo prazo para chegar o mais longe possível.',
      2: 'Fazer do mundo melhor, social e ambientalmente. Destinamos uma parte dos nossos lucros para organizações com causas pela natureza.'
    }

    return descriptionOptions[index]
  }

  renderSliderBox() {
    const index       = this.props.index,
          customClass = `slider-box__image--${ this.buildClass(index) }`,
          title       = this.buildTitle(index),
          description = this.buildDescription(index);

    return(
      <div className="slider-box">
        <div className={`slider-box__image ${ customClass }`} />
        <div className="slider-box__text">
          <div className="slider-box__legend">
            <h2>{ `0${ index + 1 }` }</h2>
            <span />
            <h3>{ title }</h3>
          </div>
          <p className="slider-box__description">
            { description }
          </p>
        </div>
      </div>
    )
  }

  render() {
    return(
      this.renderSliderBox()
    )
  }
}