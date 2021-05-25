import styled from 'styled-components';
import { appColors } from 'utils';

const Cta = () => {

  return (
    <CTA className="flex c">
      <div /> 
      <h2>Pioneiros no mercado de Câmbio Online</h2>
      <p>Fomos os primeiros a desenvolver soluções exclusivas para o mercado de câmbio online, possibilitando que clientes pudessem comprar moeda estrangeira em até 12x no cartão.</p>
      <a href="#contato" className="flex">Venda em até 12x</a>
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
    color: rgba(255, 255, 255, .8);
    margin: 24px 0;
  }

  > a {
    color: #fff;
    padding: 0 20px;
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

export default Cta;