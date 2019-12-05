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
    const aboutHeight  = document.querySelector('.indexed-section').getBoundingClientRect().height

    dropdownContent.style.height = `${ bannerHeight + aboutHeight }px`
  }

  handleDropdown(element) {
    const dropdownTrigger = element.currentTarget
    const dropdownContent = document.getElementById('dropdown')

    dropdownContent.classList.toggle('active')
    dropdownTrigger.childNodes.forEach((triggerBar) => {
      triggerBar.classList.toggle('active')
    })
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      this.setState({ setHeight: true })
    }
  }

  render () {
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
          <nav id="dropdown" className="header__container__menu">
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
