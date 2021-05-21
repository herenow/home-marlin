import styled from 'styled-components';
import Ilustra from './ilustra.svg';
import { appColors } from 'utils';

const Hero = () => {

 return (
   <HERO className="flex">
     <div className="flex c mw">
        <strong>Welcome to Marlim.co</strong>
        <h1>Lorem ipsum dolor <span>sit amet</span> consetetur</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
        <button className="flex">CTA Button</button>
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

    > button {
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

`;

export default Hero;