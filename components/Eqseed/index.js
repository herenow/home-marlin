import ReactGA from 'react-ga';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { appColors } from 'utils';
import Logo from './logo.svg';

const Eqseed = ({ set_showModal }) => {

  const modalRef = useRef(null);

  useEffect(() => {

    const modal = modalRef.current;

    setTimeout(() => {
      modal.setAttribute('data-show-modal', 'true')
      ReactGA.event({
        category: "Modal",
        action: "Show",
      });
    }, 2000)

  }, [])

  const closeButton = () => {
    ReactGA.event({
      category: "Modal",
      action: "Close",
    });
    set_showModal(false)
  }

  return (
    <EQSEED id="modal" className="flex" ref={modalRef}>
      <div className="flex">
        {/* <section>
          <div />
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qeh9Tfb2mTs"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section> */}
        <aside className="flex c">
          <h1 className="flex">
            <hr />
            <span>Rodada Aberta</span>
          </h1>
          <Logo />
          <p>Estamos com uma rodada de investimento aberta pela plataforma <strong>EqSeed</strong> (CrowdFunding de Investimento).</p>
          <a onClick={() => ReactGA.event({ category: "Modal", action: "Click" })} className="flex" href="https://eqseed.com/investir/marlimco/?utm_source=site&utm_company=marlim" target="_blank">Quero Investir</a>
        </aside>
        <button onClick={() => closeButton()} className="flex">X</button>
      </div>
    </EQSEED>
  )

}

export const EQSEED = styled.section`
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, .7);
  z-index: 100;
  visibility: hidden;
  opacity: 0;
  transition: var(--transition-opacity);

  &[data-show-modal] {
    visibility: visible;
    opacity: 1;
  }
  
  > div {
    
    /* border-radius: 8px; */
    height: 400px;
    position: relative;

    > section {

      width: 712px;
      height: 100%;
      position: relative;
      
      > div {
        width: 100%;
        padding: 0px 0px 63.9%;
        height: 0px;
        background: transparent;
        z-index: -1;
      }

      > iframe {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        border-radius: 8px 0 0 8px;
      }

    }

    > aside {

      background: #fff;
      height: 100%;
      border-radius: 8px;
      
      > h1 {

        display: flex;
        align-items: center;
        align-self: flex-start;
        margin: 24px 0 0;

        > hr {
          width: 34px;
          height: 2px;
          background: ${appColors.blue};
          margin: 0 11px 0 0;
        }
        
        > span {
          font-size: 1.6rem;
          font-weight: 700;
          color: ${appColors.text};
        }
      
      }

      > svg { 
        width: 167px;
        height: 79px;
        margin: 36px 0;
      }

      > p {
        color: ${appColors.text};
        font-size: 1.6rem;
        line-height: 2.4rem;
        max-width: 380px;
        text-align: center;
        padding: 0 24px;
        > strong {
          font-weight: 700;
          color: #229222;
        }
      }

      > a {
        margin: 36px 0;
        color: #fff;
        width: 240px;
        height: 40px;
        font-size: 1.6rem;
        font-weight: 700;
        border-radius: 40px;
        transition: var(--transition-bg);
        background: ${appColors.blue};
        :hover {
          background: #229222;
        }
      }
    
    }
    
    > button {
      position: absolute;
      top: 0;
      right: 0;
      width: 36px;
      height: 36px;
      border-radius: 36px;
      background: #000;
      color: #fff;
      font-size: 1.6rem;
      font-weight: bold;
      transform: translate(18px, -18px);
      transition: var(--transition-bg);
      :hover {
        background: ${appColors.blue};
      }
    }
  
  }

  @media (max-width: 576px) {

    > div {
      flex-direction: column;
      max-width: 92%;
      height: unset;
      /* min-height: 400px; */
      > section {
        width: 100%;
        > iframe {
          border-radius: 8px 8px 0 0;
        }
        > div {
          width: 100%;
          padding: 0px 0px 56.25%;
          height: 0px;
          background: transparent;
          z-index: -1;
        }
      }
      > aside {
        > svg {
          width: auto;
          height: 70px;
          margin: 20px 0;
        }
        > p {
          font-size: 1.5rem;
          max-width: unset;
          padding: 0 12px;
        }
      }
      > button {
        /* transform: translate(10px, -10px); */
        /* bottom: 0; */
      }
    }
    

  }

`;

export default Eqseed;