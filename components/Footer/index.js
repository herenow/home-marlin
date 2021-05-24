import styled from 'styled-components';
import Pattern from './pattern.svg';
import Logo from './logo.svg';
import { appColors } from 'utils';

const Footer = () => {

  return (
    <FOOTER>
      <div className="flex mw">
        <Logo />
        <nav className="flex">
          <a title="Home" href="#home">Home</a>
          <a title="Clientes" href="#clientes">Clientes</a>
          <a title="Produtos" href="#produtos">Produtos</a>
          <a title="Contato" href="#contato">Contato</a>
          <a title="Termos" href="https://docs.google.com/document/u/1/d/e/2PACX-1vSyYThZ7u__rAxFd-bjMRamuFA-4myE3gTZweExO9AngNQTxFt1Wiu8osQwjjyhsIg8jSizSluasuPB/pub" target="_blank">Termos</a>
          <a title="Privacidade" href="#" target="_blank">Privacidade</a>
        </nav>
        <img src="/images/selo_stone.png" alt="Stone PatternShip Program" />
      </div>
      <Pattern />
    </FOOTER>
  )

}

export const FOOTER = styled.footer`

  padding: calc(136px + 520px) 0 0;
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;

  > div {

    padding: 30px 0px;
    border-top: 1px solid rgba(59, 55, 68, .25);

    > svg {
      width: 109px;
    }
    > nav {
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
    }
    > img {
      height: 48px;
    }
  }

  > svg {
    height: 792px;
    position: absolute;
    bottom: 0;
    transform: translateY(20%);
    right: -12%;
    z-index: -1;
  }

`;

export default Footer;