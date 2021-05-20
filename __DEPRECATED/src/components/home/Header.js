import React from 'react'
import logo from '../../assets/images/logo.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      setHeight: false
    }
  }

  setDropdownHeight(dropdownContent) {
    const bannerHeight = document.querySelector('.banner').getBoundingClientRect().height
    const aboutHeight  = document.querySelector('.about').getBoundingClientRect().height

    dropdownContent.style.height = `${ bannerHeight + aboutHeight }px`
  }

  handleDropdown(element) {
    const dropdownTrigger = element.currentTarget
    const dropdownContent = document.getElementById('dropdown')

    this.setDropdownHeight(dropdownContent)

    dropdownContent.classList.toggle('active')
    dropdownTrigger.childNodes.forEach((triggerBar) => {
      triggerBar.classList.toggle('active')
    })
  }

  componentDidMount() {
    // After component mount, change state for the height to be set
    this.setState({ setHeight: true })
  }

  render () {
    // Only set dropdown height if component was rendered
    if (this.state.setHeight) {
      const dropdownContent = document.getElementById('dropdown')

      this.setDropdownHeight(dropdownContent)
    }

    return (
      <header className="header">
        <div className="header__container">
          <img className="header__container__logo" src={logo} alt="marlim logo"/>
          <div 
            className="header__container__dropdown-trigger"
            onClick={ (triggerElement) => this.handleDropdown(triggerElement) }
          >
            <span />
            <span />
            <span />
          </div>
          <nav className="header__container__menu">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </nav>
          <nav id="dropdown" className="header__container__menu header__container__menu--mobile">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
