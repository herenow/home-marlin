import styled from 'styled-components';

import Header from 'components/Header';
import Hero from 'components/Hero';
import OurClients from 'components/OurClients';
import Products from 'components/Products';
import Cta from 'components/Cta';
import Testimonials from 'components/Testimonials';
import Contact from 'components/Contact';
import Partnership from 'components/Partnership';
import Footer from 'components/Footer';

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
      <Cta />
      <Testimonials />
      <Contact />
      <Partnership />
      <Footer /> 
    </HOME>
  )

}

export const HOME = styled.main`
`;

export default Home;