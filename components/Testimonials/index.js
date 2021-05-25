import styled from 'styled-components';
import { appColors } from 'utils';

import One2 from './icons/one.svg';
import Two from './icons/two.svg';
import Three from './icons/three.svg';
import Quotes from './icons/quotes.svg';

const testimonials = [
  {
    fill: '#373286',
    icon: <Three />,
    name: 'Débora',
    job: 'Grupo Travelex Confidence',
    content: 'A parceria com a Marlim foi uma decisão certeira. O fator determinante foi o serviço antifraude, mas hoje eu indicaria a Marlim pela equipe sensacional, parceira e pró negócio.'
  },
  {
    fill: '#e0076c',
    icon: <Two />,
    name: 'Gabriela',
    job: 'Tag ID',
    content: 'Utilizei a Marlim-Go para um cliente, gerei um link de pagamento e foi super simples. O cliente parcelou em 12x e eu recebi no dia seguinte na minha conta, ótimo para os dois.'
  },
  {
    fill: '#1de08f',
    icon: <One2 />,
    name: 'Francisco',
    job: 'QBE Consultoria Financeira',
    content: 'A Marlim possibilitou ao mercado de contabilidade a questão dos pagamentos recorrentes, e isso fez com que nossa inadimplencia diminuisse a quase zero.'
  }
]

const Testimonials = () => {

  return (
    <TESTIMONIALS>
      <strong>Comunidade de Clientes</strong>
      <h5>O que os nossos parceiros dizem...</h5>
      <section className="flex">
        {
          testimonials.map(({ icon, name, job, content, fill }, index) => {
            return (
              <article key={index} className="flex c">
                <figure className="flex" style={{ borderColor: fill }}>
                  {icon}
                  {/* <img src={avatar} alt={name} /> */}
                </figure>
                <h2>{name}</h2>
                <strong>{job}</strong>
                <Quotes />
                <p>{content}</p>
              </article>
            )
          })
        }
        <div />
      </section>
      <div />
    </TESTIMONIALS>
  )

}

export const TESTIMONIALS = styled.section`

  padding: calc(552px + 136px) 0 calc(136px + 140px);
  text-align: center;
  position: relative;

  > strong {
    font-size: 1.6rem;
    color: rgba(59, 55, 68, .5);
  }
  
  > h5 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${appColors.text};
    margin: 8px auto 180px;
    max-width: 650px;
  }
  
  > section {

    position: relative;

    > article {

      background: red;
      width: 360px;
      height: 359px;
      border-radius: 24px;
      background: #fff;
      box-shadow: 0 16px 32px rgba(0, 0, 0, .08);
      position: relative;
      z-index: 1;

      > figure {
        position: absolute;
        width: 104px;
        height: 104px;
        border-radius: 180%;
        overflow: hidden;
        top: 0;
        transform: translateY(-50%);
        border: 2px solid;
        background: #fff;
        > svg {
          min-height: 36px;
          max-height: 36px;
        }
      }

      > h2 {
        font-weight: 700;
        font-size: 1.6rem;
        color: ${appColors.text};
        margin: 20px 0 4px;
      }
      
      > strong {
        font-weight: 300;
        font-size: 1.4rem;
        color: rgba(59, 55, 68, .5);
      }

      > svg {
        height: 20px;
        margin: 22px 0 18px;
      }

      > p {
        font-weight: 300;
        font-size: 1.6rem;
        color: rgba(59, 55, 68, .5);
        max-width: 85%;
      }

      :first-of-type {
        top: 100px;
      }
      
      :nth-child(2) {
        margin: 0 37px;
      }
      
      :last-of-type {
        top: 140px;
      }

      @media (max-width: 576px) {
        :first-of-type, :last-of-type {
          top: unset;
        }
        :nth-child(2) {
          margin: 120px 0;
        }
      }

    }

    > div {
      position: absolute;
      background: transparent url('/images/fakes/pattern1.png') 0 0;
      background-repeat: round;
      width: 120px;
      height: 128px;
      top: 80px;
      right: 50px;
      z-index: -1;
    }

  }

  > div {
    position: absolute;
    width: 100vw;
    height: 80px;
    background: url("/images/products/pattern.png") repeat-x 0 0;
    transform: scaleX(-1);
    top: 55%;
    left: calc(-100vw + 352px);
  }

  @media (max-width: 576px) {
    padding: calc(552px + 100px) 0 100px;
    > h5 {
      margin: 8px auto 100px;
    }
    > section {
      flex-direction: column;
      svg {
        min-width: 36px;
      }
    }
  }

`;

export default Testimonials;