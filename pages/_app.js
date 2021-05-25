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
        <meta property="og:url" content="https://marlim.co" />
        <meta property="og:site_name" content="Marlim.co | Taylor-Made Payments" />
        <meta property="og:title" content="Marlim.co | Taylor-Made Payments" />
        <meta property="og:description" content="Pagamentos sob medida para você. Aqui, sua empresa é que diz o que precisa. Nada de produtos de prateleiras." />
        <meta property="og:type" content="website" />
        <meta property="og:image" itemProp="image" content="https://marlim.co/images/ogimg.jpg" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Pagamentos sob medida para você. Aqui, sua empresa é que diz o que precisa. Nada de produtos de prateleiras." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3142EY41"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-RX3142EY41');
            `
          }}
        />
        <title>Marlim.co | Taylor-Made Payments</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App;