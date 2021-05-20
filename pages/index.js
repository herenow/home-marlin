import styled from 'styled-components';

import Header from 'components/Header';
import Hero from 'components/Hero';
import OurClients from 'components/OurClients';
import Products from 'components/Products';

export async function getStaticProps() {
  return {
    props: {}
  };
}

const Home = () => {

  return (
    <HOME>
      <Header />
      <Hero />
      <OurClients />
      <Products />
    </HOME>
  )

}

export const HOME = styled.main``;

export default Home;