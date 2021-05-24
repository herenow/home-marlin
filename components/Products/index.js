import styled from 'styled-components';
import { appColors } from 'utils';

import Link from './icons/link.svg';
import Sale from './icons/sale.svg';
import Digital from './icons/digital.svg';

const Products = () => {

  return (
    <PRODUCTS id="produtos">
      <h2>Produtos</h2>
      <article className="flex">
        <aside>
          <h3>Lorem ipsum dolor sit amet, consetetur <span>sadipscing</span> elitr, sed</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</p>
          <ul className="flex">
            <li className="flex">
              <span className="flex"><Link /></span>
              <strong>Link de Pagamento</strong>
            </li>
            <li className="flex">
              <span className="flex"><Sale /></span>
              <strong>Venda por Mensalidade</strong>
            </li>
          </ul>
        </aside>
        <figure>
          <img src="/images/products/one.png" alt="Link de Pagamento" />
          <div />
        </figure>
      </article>
      <article className="flex">
        <figure>
          <img src="/images/products/two.png" alt="Dashboards" />
          <div />
        </figure>
        <aside>
          <h3>Lorem ipsum dolor sit amet, consetetur <span>sadipscing</span> elitr, sed</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</p>
          <ul className="flex">
            <li className="flex">
              <span className="flex"><Link /></span>
              <strong>Link de Pagamento</strong>
            </li>
            <li className="flex">
              <span className="flex"><Sale /></span>
              <strong>Venda por Mensalidade</strong>
            </li>
            <li className="flex">
              <span className="flex"><Digital /></span>
              <strong>Venda digitalizada</strong>
            </li>
          </ul>
        </aside>
      </article>
      <article className="flex">
        <aside>
          <h3>Lorem ipsum dolor sit amet, consetetur <span>sadipscing</span> elitr, sed</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</p>
        </aside>
        <figure>
          <img src="/images/products/three.png" alt="Maquininhas Tef" />
        </figure>
      </article>
    </PRODUCTS>
  )

}

export const PRODUCTS = styled.section`
  
  margin: 136px 0; 

  > h2 {
    margin: 0 0 136px; 
    text-align: center;
    font-weight: 700;
    color: ${appColors.text};
    font-size: 3.2rem;
  }

  > article {

    justify-content: space-between;
    margin: 0 0 100px;

    > aside {

      max-width: 568px;
      
      > h3 {
        font-size: 3.2rem;
        font-weight: 700;
        color: ${appColors.text};
        line-height: 4.8rem;
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
        max-width: 95%;
      } 
      
      > ul {

        justify-content: flex-start;
        flex-wrap: wrap;

        > li {
          
          width: 50%;
          justify-content: flex-start;

          > span {
            width: 56px;
            height: 56px;
            border-radius: 20px;
            background: rgba(224, 7, 108, .24);
            margin: 0 16px 0 0;
            > svg {
              height: 24px;
            }
          }

          > strong {
            font-size: 1.6rem;
            color: ${appColors.text};
          }

        }

      } 
    
    }
    
    > figure {

      position: relative;

      > img {
        width: 100%;
        max-width: 509px;
        position: relative;
        z-index: 1;
      }

      > div {
        top: -60px;
        left: -60px;
        position: absolute;
        width: 100vw;
        height: 136px;
        background: url('/images/products/pattern.png') repeat-x 0 0;
      }

    }

    :nth-child(3) {

      > figure {

        > img {
          max-width: 601px;
        }

        > div {
          top: 60px;
          right: 0;
          left: unset;
          height: 104px;
          transform: scaleX(-1);
        }
      }
      
      > aside > ul > li:last-of-type {
        margin: 16px 0 0;
      }

    }

    :last-of-type > figure > img {
      max-width: 569px;
    }

  }

`;

export default Products;