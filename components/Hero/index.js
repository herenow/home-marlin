import styled from 'styled-components';
import Ilustra from './ilustra.svg';
import { appColors } from 'utils';

const Hero = () => {

 return (
   <HERO className="flex">
     <div className="flex c mw">
        <strong>Nós somos a Marlim.co</strong>
        <h1>Pagamentos <span>sob medida</span> para você</h1>
        <p>Aqui, sua empresa é que diz o que precisa.<br />Nada de produtos de prateleiras.</p>
        <a href="#contato" className="flex">Saiba Mais</a>
     </div>
     <Ilustra />
   </HERO>
 )

}

export const HERO = styled.section`

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  > div {

    width: 100%;
    align-items: flex-start;
    position: relative;
    z-index: 1;

    > strong {
      display: inline-block;
      width: 227px;
      height: 40px;
      line-height: 42px;
      text-align: center;
      font-size: 1.6rem;
      color: ${appColors.pink};
      border-radius: 28px;
      background: rgba(255, 195, 223, .25);
      margin: 0 0 23px;
    }

    > h1 {
      font-weight: 700;
      font-size: 4.8rem;
      color: ${appColors.text};
      max-width: 568px;
      line-height: 6.2rem;
      > span {
        color: ${appColors.pink};
        font-weight: 700;
      }
    }

    > p {
      color: rgba(59, 55, 68, .5);
      font-size: 1.6rem;
      max-width: 544px;
      margin: 8px 0 40px;
    }

    > a {
      color: #fff;
      width: 152px;
      height: 40px;
      font-size: 1.6rem;
      font-weight: 700;
      border-radius: 40px;
      border: 1px solid transparent;
      transition: var(--transition);
      background: ${appColors.blue};
      :hover {
        border-color: ${appColors.blue};
        background: transparent;
        color: ${appColors.blue};
      }
    }
  
  }

  > svg {
    position: absolute;
    top: 0;
    right: 0;
    height: 95vh;
  }
  
  @media (max-width: 576px) {
    
    flex-direction: column;
    align-items: flex-start!important;
    /* padding: 104px 0 0; */
    
    > div {
      order: 2;
      margin: 50px 0 0;
      > h1 {
        font-size: 3.6rem;
        line-height: 4.8rem;
      }
    }

    > svg {
      
      position: unset;
      height: 50vw;
      transform: scaleX(-1);
      align-self: center;
      order: 1;
      display: none;

      > g {
        > g:first-of-type {
          display: none;
        }
      }

    }
  
  }

`;

export default Hero;