import styled from 'styled-components';

export async function getStaticProps() {
  return {
    props: {}
  };
}

const Home = () => {

  return (
    <HOME>
      <h1>Marlim</h1>
    </HOME>
  )

}

export const HOME = styled.main``;

export default Home;