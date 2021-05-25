import styled from 'styled-components';
import Logo from './logo.svg';

import { appColors } from 'utils';

const Header = () => {

  return (
    <HEADER id="home" className="flex mw">
      <Logo />
      <nav className="flex">
        <a title="Home" href="#home">Home</a>
        <a title="Clientes" href="#clientes">Clientes</a>
        <a title="Produtos" href="#produtos">Produtos</a>
        <a title="Contato" href="#contato">Contato</a>
      </nav>
      <nav className="flex">
        <a className="flex" target="_blank" href="http://api.marlim.co">API</a>
        {/* <a className="flex" href="#">Login</a> */}
      </nav>
    </HEADER>
  )

}

export const HEADER = styled.header`

  padding: 32px 0;
  justify-content: space-between!important;
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;

  > svg {
    width: 140px;
  }
  
  > nav {

    :first-of-type {
      
      flex: 1;

      > a {

        font-size: 1.6rem;
        color: ${appColors.text};
        margin: 0 44px 0 0;
        position: relative;
        
        :last-of-type {
          margin: 0
        }
        
        :hover {
          font-weight: 700 
        }
        
        ::before {
          display: block;
          content: attr(title);
          font-weight: bold;
          height: 0;
          overflow: hidden;
          visibility: hidden;
        }
      
      }

      @media (max-width: 576px) {
        display: none;
      }

    }
    
    :last-of-type {

      > a {

        width: 128px;
        height: 40px;
        border: 1px solid;
        font-size: 1.6rem;
        font-weight: 700;
        border-color: ${appColors.pink};
        background: #fff;
        border-radius: 40px;
        transition: var(--transition);
        color: ${appColors.pink};
        
        :first-of-type {
          :hover {
            color: #fff;
            background: ${appColors.pink};
          }
        }
        
      }

    }

  }

  @media (max-width: 576px) {
    background: #fff;
  }

`;

export default Header;