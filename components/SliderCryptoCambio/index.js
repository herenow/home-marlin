import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { appColors } from 'utils';

const SliderCryptoCambio = () => {

  const intervalRef = useRef(null);
  const [active, setActive] = useState(0);

  const activeInterval = () => {
    if (active === 2) return;
    intervalRef.current = setInterval(() => {
      setActive(active => active === 1 ? 0 : 1);
    }, 10000);
  }

  useEffect(() => {

    let browserSize = window.innerWidth;

    if (browserSize <= 576) {
      setActive(2)
      clearInterval(intervalRef.current);
    }

    window.addEventListener('resize', () => {
      browserSize = window.innerWidth;
      if (browserSize <= 576) {
        if (active === 2) return;
        setActive(2)
        clearInterval(intervalRef.current);
        return
      } else {
        setActive(0)
        return
      }
    })

    return () => window.removeEventListener('resize', () => false)

  }, [])

  useEffect(() => {
    
    activeInterval();
    return () => clearInterval(intervalRef.current);

  }, [active])

  return (
    <SLIDERCRYPTOCAMBIO className='mw'>
      <section>
        <div data-active={active === 2 ? true : active === 0} className='flex'>
          <figure>
            <img src="/images/sliderCryptoCambio/ilustra_cambio.png" alt="Câmbio" />
          </figure>
          <aside>
            <strong>Câmbio</strong>
            <h3>Remessas internacionais e aquisição de papel moeda no <span>cartão de crédito</span></h3>
            <p>Processamos os pagamentos das principais corretoras de câmbio do mercado. Com tecnologia de ponta, permitimos que os clientes das corretoras consigam comprar moeda estrangeira em até 12x através no cartão de crédito.</p>
          </aside>
        </div>
        <div data-active={active === 2 ? true : active === 1} className='flex'>
          <aside>
            <strong>Criptomoedas</strong>
            <h3>Aquisição de <span>criptomoedas</span> e criptoativos no cartão de crédito</h3>
            <p>Atuamos também neste promissor e crescente mercado, encurtando o acesso das pessoas ao universo de criptoativos através do pagamento via cartão de crédito nas principais corretoras de criptomoedas do mercado.</p>
          </aside>
          <figure>
            <img src="/images/sliderCryptoCambio/ilustra_cripto.png" alt="Criptomoedas" />
          </figure>
        </div>
      </section>
      <nav className='flex'>
        <button data-active={active === 0} onClick={() => setActive(0)} />
        <button data-active={active === 1} onClick={() => setActive(1)} />
      </nav>
    </SLIDERCRYPTOCAMBIO>
  )

}

export const SLIDERCRYPTOCAMBIO = styled.section`

  margin: calc(100vh + 136px) 0 90px; 

  > section {
    height: 407px;
    position: relative;
    overflow: hidden;
    > div {

      position: absolute;
      width: 100%;
      height: 100%;
      background: #fff;
      transition: var(--transition-opacity);
      justify-content: space-between;

      > figure {
        margin: 0 70px 0 0;
        /* max-width: 500px; */
        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        } 
      }
      
      > aside {
        flex: 1;
        > strong {
          background: #FFC3DF;
          border-radius: 20px;
          font-size: 1.6rem;
          color: #E0076C;
          line-height: 2.4rem;
          text-align: center;
          display: inline-block;
          margin: 0 0 16px;
          padding: 8px 26px;
        }
        > h3 {
          font-size: 3.2rem;
          font-weight: 700;
          color: ${appColors.text};
          line-height: 4.8rem;
          /* max-width: 570px; */
          > span {
            font-weight: 700;
            color: ${appColors.pink};
          }
        } 
        
        > p {
          font-size: 1.6rem;
          color: rgba(59, 55, 68, .5);
          line-height: 2.4rem;
          margin: 20px 0;
          /* max-width: 550px; */
        } 
      }

      &[data-active='true'] {opacity: 1; visibility: visible;}
      &[data-active='false'] {opacity: 0; visibility: hidden;}

      :last-of-type {
        > aside {
          margin: 0 0 0 45px;
          > h3 {
            max-width: 550px;
          }
        }
        > figure {margin: 0 45px 0 0}
      }
    
    }
  }
  
  > nav {
    
    margin: 100px 0 0;

    > button {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: rgba(59, 55, 68, 1);
      transition: var(--transition-opacity);
      :first-of-type {
        margin: 0 16px 0 0;
      }
      &[data-active='true'] {
        background: transparent linear-gradient(180deg, #E0076C 0%, #373286 100%) 0% 0% no-repeat padding-box;
        opacity: 1;
      }
      &[data-active='false'] {
        opacity: .16;
        :hover {
          opacity: .4;
        }
      }
      
    }  
  
  }

  @media (max-width: 576px) {

    margin: calc(100vh) 0 90px;

    > nav {
      display: none;
    }

    > section {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;
      > div {
        position: relative;
        flex-direction: column;
        > figure {
          margin: 0 0 60px!important;
          width: 50vw;
        }
        > aside {
          margin: 0!important;
          > h3 {
            font-size: 2.4rem;
            line-height: 3.6rem;
          }
          > p {
            margin: 20px 0 0;
          }
        }
        :last-of-type {
          margin: 60px 0 0!important;
          > figure {
            order: 0;
          }
          > aside {
            order: 1;
          }
        }
      }
    }

  }

`;

export default SliderCryptoCambio;