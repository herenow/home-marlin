import styled from 'styled-components';
import Pattern from './pattern.svg';
import Logo from './logo.svg';
import { appColors } from 'utils';

const Footer = () => {

  return (
    <FOOTER>
      <div className="flex mw">
        <div>
          <Logo />
          <nav className="flex">
            {/* <a title="Home" href="#home">Home</a>
            <a title="Clientes" href="#clientes">Clientes</a>
            <a title="Produtos" href="#produtos">Produtos</a>
            <a title="Contato" href="#contato">Contato</a> */}
            <a title="API" target="_blank" href="http://api.marlim.co">API</a>
            <a title="Políticas de Privacidade" target="_blank" href="https://drive.google.com/file/d/1M0wzWKD40_8sjZeRjUyIPVSAtHis0TII/view?usp=sharing">Políticas de Privacidade</a>
            <a title="Política de Cookies" href="https://drive.google.com/file/d/10Q9cLAlZjcGpt8yHPYq9bPqde6Lb5gtE/view?usp=sharing" target="_blank">Política de Cookies</a>
            <a title="Canal de Atendimento ao Titular" href="https://share.teamforms.app/form/ODZjM2Y5MDktYmQ2My00YjRlLWJiYTUtMmMxZjg4Yzk1OGQwOjFhZmQzMzE3LTA5MzQtNGMyYS1iYTVkLTFiYTZhODY5YWE2NDo4NzFiMmMzYy1jNTZkLTQwYzYtODc0My1lYmYzNzgzNDkyNTM=" target="_blank">Canal de Atendimento ao Titular</a>
          </nav>
        </div>
        <div className='flex'>
          <img src="/images/footer/stone.png" alt="Stone Master Partner" />
          <img src="/images/footer/cubo.png" alt="Cubo Itau" />
          <img src="/images/footer/ab.png" alt="Ab Fintechs" />
          <img src="/images/footer/pci.png" alt="PCI DSS Compliant" />
        </div>
      </div>
      <Pattern />
    </FOOTER>
  )

}

export const FOOTER = styled.footer`

  padding: 136px 0 0;
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;

  > div {

    padding: 30px 0px;
    border-top: 1px solid rgba(59, 55, 68, .25);
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      :first-of-type {
        align-items: center;
        > svg {
          width: 109px;
          margin: 0 60px 0 0;
        }
        > nav {
          flex: 1;
          > a {
    
            font-size: 1.6rem;
            color: ${appColors.text};
            margin: 0 30px 0 0;
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
      }
      :last-of-type {
        gap: 0 30px;
        > img {
          width: 140px;
          height: auto;
          /* max-height: 60px; */
          /* :nth-child(2) {
            margin: 0 0 0 15px;
          } */
        }
      }
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

  @media (max-width: 576px) {
    /* padding: calc(100px + 520px) 0 0; */
    /* padding: 0;
    > div {
      padding: 16px 0;
      flex-direction: column;
      nav {
        margin: 32px 0;
        display: grid;
        grid-template-columns: repeat(3, 120px);
        grid-template-rows: repeat(2, 40px);
        align-items: center;
        justify-content: center;
        > a {
          :first-of-type {
            display: none;
          }
          margin: 0;
          text-align: center;
        }
      }
      > svg, > img {
        width: 105px;
      }
    }
    > svg {
      height: 50vh;
      right: -50%;
    } */
    > div {
      padding: 30px 0;
      flex-direction: column;
      gap: 20px 0;
      > div {
        :first-of-type {
          flex-direction: column;
          > svg {
            width: 105px;
            margin: 0 0 20px;
          }
        }
        :last-of-type {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
          justify-content: center;
          gap: 30px 0;
          > img {
            width: 105px;
            height: auto;
            margin: 0 auto;
          }
        }
      }
      nav {
        display: grid;
        grid-template-columns: repeat(2, 120px);
        align-items: center;
        justify-content: center;
        gap: 10px 0;
        > a {
          margin: 0!important;
          text-align: center;
        }
        /* 
        margin: 32px 0;
        grid-template-rows: repeat(2, 40px);
        > a {
          :first-of-type {
            display: none;
          }
          margin: 0;
          text-align: center;
        }
        }
        > svg, > img {
          width: 105px;
        } */
      }
    }
  }

`;

export default Footer;