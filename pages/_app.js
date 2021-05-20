import Head from 'next/head';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --transition: all .25s ease-in-out;
    --transition-bg: background .25s ease-in-out;
    --transition-color: color .25s ease-in-out;
    --transition-border: border .25s ease-in-out;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; 
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    text-shadow: 0 0 0 rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  body {
    background: #fff;
    overflow-x: hidden;
  } 

  main, .mw {
    max-width: 1300px;
    margin: 0 auto;
  }

  img {
    display: block;
  }

  a, a:hover {
    text-decoration: none;
  }

  a, button {
    cursor: pointer!important;
  }

  ul {
    list-style: none;
  }

  .flex {

    display: flex;
    align-items: center;
    justify-content: center;

    &.c {
      flex-direction: column;
    }

  }

`;

const App = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet" />

        {/* // TODO:  ADD OG TAGS Marlim
        <meta property="og:title" content="Resoluções Antirracistas para 2021" />
        <meta property="og:description" content="Não somos todos iguais e essa é a nossa maior força! As nossas diferenças, quem somos, como pensamos, o que vivenciamos são o que vão nos ajudar a tornar o mundo um lugar melhor, incluindo todos. Precisamos agir agora. Nesse clima de início de ano, não queremos que você se esqueça de incluir na sua lista de resoluções de ano novo alguns itens antirracistas." />
        <meta property="og:image" content="https://antirracistas.99jobs.com/images/ogimg.png" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="600" /> */}

        {/* // TODO:  ADD GA Marlim */}

        <title>Marlim.co | Taylor-Made Payments</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App;