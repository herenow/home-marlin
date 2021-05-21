import styled from 'styled-components';
import { appColors } from 'utils';
import Quotes from './quotes.svg';

const testimonials = [
  {
    avatar: '/images/fakes/testimonials.png',
    name: 'Maria Luiza',
    job: 'Empreendedora',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
  },
  {
    avatar: '/images/fakes/testimonials.png',
    name: 'Maria Luiza',
    job: 'Empreendedora',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
  },
  {
    avatar: '/images/fakes/testimonials.png',
    name: 'Maria Luiza',
    job: 'Empreendedora',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
  }
]

const Testimonials = () => {

  return (
    <TESTIMONIALS>
      <strong>Clients community</strong>
      <h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h5>
      <section className="flex">
        {
          testimonials.map(({ avatar, name, job, content }, index) => {
            return (
              <article key={index} className="flex c">
                <figure>
                  <img src={avatar} alt={name} />
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
      width: 328px;
      height: 359px;
      border-radius: 24px;
      background: #fff;
      box-shadow: 0 16px 32px rgba(0, 0, 0, .08);
      position: relative;

      > figure {
        position: absolute;
        width: 104px;
        height: 104px;
        border-radius: 180%;
        overflow: hidden;
        top: 0;
        transform: translateY(-50%);
        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
        height: 36px;
        margin: 22px 0 18px;
      }

      > p {
        font-weight: 300;
        font-size: 1.6rem;
        color: rgba(59, 55, 68, .5);
        max-width: 200px;
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
    /* top: -60px; */
    /* left: -60px; */
    position: absolute;
    width: 100vw;
    height: 80px;
    background: url("/images/products/pattern.png") repeat-x 0 0;
    transform: scaleX(-1);
    top: 55%;
    left: calc(-100vw + 352px);
  }

`;

export default Testimonials;