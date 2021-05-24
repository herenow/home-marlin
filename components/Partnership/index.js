import styled from 'styled-components';
import Logo from './logo.svg';
import { } from 'utils';

const Partnership = () => {

  return (
    <PARTNERSHIP>
      <div className="flex">
        <header>
          <h2>Além disso</h2>
          <p>Nos preocupamos com nosso planeta. Doamos parte do nosso lucro de forma recorrente à Sea Shepherd, organização que trabalha em pról da proteção e conservação da vida marinha no planeta.</p>
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
      margin: 0 300px 0 0;
      > h2 {
        font-weight: 700;
        font-size: 4.8rem;
      }
      > p {
        margin: 16px 0 0;
        font-size: 1.6rem;
        line-height: 2.4rem;
        max-width: 300px;
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

  }

`;

export default Partnership;