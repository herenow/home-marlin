import styled from 'styled-components';

import Header from 'components/Header';
import Hero from 'components/Hero';

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
    </HOME>
  )

}

export const HOME = styled.main``;

export default Home;