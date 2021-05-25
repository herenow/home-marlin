import styled from 'styled-components';
import { appColors } from 'utils';

import Link from './icons/link.svg';
import Sale from './icons/sale.svg';
import Pix from './icons/pix.svg';
import Digital from './icons/digital.svg';
import Dashboard from './icons/dashboard.svg';
import Split from './icons/split.svg';
import Recurrence from './icons/recurrence.svg';
import Api from './icons/api.svg';

const Products = () => {

  return (
    <PRODUCTS id="produtos">
      <h2>Produtos</h2>
      <article className="flex">
        <aside>
          <h3>Te ajudamos a criar a melhor solução para a <span>sua empresa</span></h3>
          {/* <p>Deixe com a gente a parte burocrática, jurídica e etcs.<br /> Se preocupe apenas em aumentar o portifólio do seu negócio.</p> */}
          <p>Deixe com a gente toda a parte tecnológica, burocrática e jurídica.<br />Se preocupe apenas em aumentar o portfólio da sua empresa.</p>
          <ul className="flex">
            <li className="flex">
              <span className="flex"><Dashboard /></span>
              <strong>Dashboard de Métricas</strong>
            </li>
            <li className="flex">
              <span className="flex">
                <Api />
              </span>
              <strong>Integração com API</strong>
            </li>
            <li className="flex">
              <span className="flex">
                <Sale />
              </span>
              <strong>Venda com PIX</strong>
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
          <h3>Alguns produtos que já criamos com os <span>nossos clientes</span></h3>
          <p>Se você tem uma loja online, marketplace, é profissional autônomo ou liberal, temos diversas soluções para atendê-lo.</p>
          <ul className="flex">
            <li className="flex">
              <span className="flex"><Link /></span>
              <strong>Link de Pagamento</strong>
            </li>
            <li className="flex">
              <span className="flex">
                <Recurrence />
              </span>
              <strong>Pagamentos Recorrentes</strong>
            </li>
            <li className="flex">
              <span className="flex"><Digital /></span>
              <strong>Venda Digital</strong>
            </li>
            <li className="flex">
              <span className="flex">
                <Split />
              </span>
              <strong>Split de Pagamentos</strong>
            </li>
          </ul>
        </aside>
      </article>
      <article className="flex">
        <aside>
          <h3>E também temos as famosas <span>Maquininhas POS</span></h3>
          <p>Você pode personalizá-la do jeito que quiser, fidelizando ainda mais os seus clientes e fortalecendo a sua marca.</p>
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

          :nth-child(3), :last-of-type{
            margin: 16px 0 0;
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
      
      > aside > ul > li {
        /* :nth-child(3), :last-of-type{
          margin: 16px 0 0;
        } */
      }
      

    }

    :last-of-type > figure > img {
      max-width: 569px;
    }

  }

`;

export default Products;