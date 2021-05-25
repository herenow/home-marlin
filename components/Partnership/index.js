import styled from 'styled-components';
import Logo from './logo.svg';
import { } from 'utils';

const Partnership = () => {

  return (
    <PARTNERSHIP>
      <div className="flex">
        <header>
          <h2>Além disso</h2>
          <p>Parte do nosso lucro é doado de forma recorrente para a <b>Sea Shepherd</b>, organização que trabalha em prol da proteção e conservação da vida marinha no planeta.</p>
        </header>
        <aside>
          <strong>Parceria</strong>
          <div className="flex">
            <Logo />
            <hr />
            <img src="/images/partnership/logo-shepherd.png" alt="Logo Shepherd" />
          </div>
        </aside>
      </div>
    </PARTNERSHIP>
  )

}

export const PARTNERSHIP = styled.section`

  width: 100vw;
  height: 520px;
  background: url('/images/partnership/bg.jpeg') no-repeat center center;
  background-size: cover;
  position: absolute;
  left: 0;
  color: #fff;
  z-index: 1;

  > div {

    height: 100%;

    > header {
      margin: 0 280px 0 0;
      > h2 {
        font-weight: 700;
        font-size: 4.8rem;
      }
      > p {
        margin: 16px 0 0;
        font-size: 1.6rem;
        line-height: 2.4rem;
        max-width: 320px;
        > b {
          font-weight: 700;
        }
      }
    }
    
    > aside {
      > strong {
        font-size: 1.6rem;
        position: relative;
        left: calc(50% + 6px);
      }
      > div {
        > svg {
          width: 206px;
        }
        > hr {
          width: 2px;
          background: #fff;
          height: 93px;
          margin: 0 60px;
        }
        > img {
          width: 127px;
          height: auto;
        }
      }
    }

    @media (max-width: 576px) {
      flex-direction: column;

      > header {
        margin: 0;
        order: 2;
        text-align: center;
      }  
      > aside {
        order: 2;
        margin: 32px 0 0;
        > strong  {
          display: none;
        }
        > div {
          > svg, hr {
            display: none;
          }
        }
      }  
    }

  }

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

`;

export default Partnership;