import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const
  clientsData = Array.from({ length: 11 }, (_, i) => i).map((i) => i + 1),
  resetImg = (imgToReset) => setTimeout(() => imgToReset.classList.add('reset'), 1000),
  replaceImg = (imgToReplaceSrc, imgToReplace) => imgToReplaceSrc.src = `/images/clients/new_logos/${imgToReplace}.png`,
  updateClasses = (imgToHide, imgToShow) => {
    imgToHide.classList.remove('hide', 'reset')
    imgToHide.classList.add('show')
    imgToShow.classList.remove('show')
    imgToShow.classList.add('hide');
  };

const Clients = () => {

  const clientsListRef = useRef(null)
  const appearedClientsRef = useRef(null)
  const [clients, setClients] = useState([])

  useEffect(() => {
    const newClients = clientsData.sort(() => Math.random() - 0.5);
    appearedClientsRef.current = newClients.slice(0, 4);
    setClients(newClients)
  }, [])

  useEffect(() => {
    if (!clients.length) return;
    const interval = setInterval(() => randomizeNewClient(), 2500)
    return () => clearInterval(interval)
  }, [clients])

  const randomizeNewClient = () => {

    if (!clientsListRef.current) return;

    const
      appearedClients = appearedClientsRef.current,
      nextClientsToShow = clients.filter((i) => !appearedClients.includes(i)),
      randomPickFromAppearedClientsToRemove = Math.floor(Math.random() * appearedClients.length),
      randomPickFromNextClientsToShow = Math.floor(Math.random() * nextClientsToShow.length);

    appearedClients[randomPickFromAppearedClientsToRemove] = nextClientsToShow[randomPickFromNextClientsToShow];
    appearedClientsRef.current = appearedClients;

    updateClients(randomPickFromAppearedClientsToRemove, nextClientsToShow[randomPickFromNextClientsToShow])

  }

  const updateClients = (indexToChange, imgToReplace) => {

    if (!clientsListRef.current) return;

    const
      getClientsListRef = clientsListRef.current,
      imageToHide = getClientsListRef?.childNodes[indexToChange]?.childNodes[0],
      imageToUpdate = getClientsListRef?.childNodes[indexToChange]?.childNodes[1];

    if (imageToHide && imageToUpdate) {

      if (imageToUpdate.classList.contains('show')) {
        replaceImg(imageToHide, imgToReplace)
        updateClasses(imageToHide, imageToUpdate)
        resetImg(imageToUpdate)
        return;
      }

      if (imageToUpdate.classList.contains('hide')) {
        replaceImg(imageToUpdate, imgToReplace)
        updateClasses(imageToUpdate, imageToHide)
        resetImg(imageToHide)
        return;
      }

      replaceImg(imageToUpdate, imgToReplace)
      imageToHide.classList.add('hide')
      imageToUpdate.classList.add('show')
      resetImg(imageToHide)

    }

  }

  return (
    <CLIENTS className='flex c mw'>
      <strong>Confiada pelas principais marcas do mercado</strong>
      <ul ref={clientsListRef}>
        {clients.map((i, index) => {
          return (
            <li key={i}>
              <img src={`/images/clients/new_logos/${i}.png`} />
              {
                index < 4 &&
                <img src={`/images/clients/new_logos/${i}.png`} />
              }
            </li>
          )
        })}
      </ul>
    </CLIENTS>
  )

}

export const CLIENTS = styled.footer`

  position: absolute;
  bottom: 70px;
  align-items: flex-start!important;
  width: 100%;
  z-index: 1;

  > strong {
    font-size: 1.4rem;
    line-height: 1.1rem;
    color: rgba(59,55,68,.5);
    display: inline-block;
    margin: 0 0 10px;
  }

  > ul {

    display: grid;
    width: calc(125px * 4);
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    height: 88px;

    > li {

      padding: 0 10px;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: none;
      position: relative;

      > img {
        width: 100%;
        height: auto;
        position: absolute;
        transition: var(--transition-animation);
        :last-of-type {
          transform: translateY(135%);
          opacity: 0;
        }
        &.hide {
          transform: translateY(-135%);
          opacity: 0;
        }
        &.show {
          transform: translateY(0);
          opacity: 1;
        }
        &.reset {
          transform: translateY(135%)!important;
          opacity: 0
        }
      }

      :nth-child(-n+4) {
        display: flex;
      }

    }

  }

  @media (max-width: 576px) {

    bottom: 50px;
    
    > ul {
      width: calc(100%);
    }

  }

`;

export default Clients;