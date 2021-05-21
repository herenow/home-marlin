import styled from 'styled-components';
import { appColors } from 'utils';

const Cta = () => {

  return (
    <CTA className="flex c">
      <div /> 
      <h2>Lorem ipsum dolor sit amet consetetur</h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
      <button className="flex">CTA Button</button>
      <div />
    </CTA>
  )

}

export const CTA = styled.section`

  width: 100vw;
  height: 552px;
  background: url('/images/cta/bg.png') no-repeat center center;
  background-size: cover;
  position: absolute;
  left: 0;
  color: #fff;
  text-align: center;
  z-index: 1;

  > h2 {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 6.2rem;
    max-width: 568px;
  }
  
  > p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    max-width: 544px;
    color: rgba(255, 255, 255, .5);
    margin: 24px 0;
  }

  > button {
    color: #fff;
    width: 152px;
    height: 40px;
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: 40px;
    border: 1px solid #fff;
    transition: var(--transition);
    background: transparent;
    :hover {
      background: #fff;
      border-color: ${appColors.pink};
      color: ${appColors.pink};
    }
  }

  > div {

    position: absolute;
    z-index: 1;
    
    :first-of-type {
      background: transparent url('/images/cta/pattern.png') repeat-x 0 0;
      background-repeat: round;
      width: 28%;
      height: 104px;
      top: 8%;
      left: 0;
    }
    
    :last-of-type {
      background: transparent url('/images/cta/pattern_vertical.png') repeat-y 0 0;
      background-repeat: round;
      width: 144px;
      height: 71%;
      bottom: -8px;
      right: 7%;
    }

  }

`;

export default Cta;