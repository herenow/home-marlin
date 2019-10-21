import React from 'react';
import Header from './home/Header';
import Banner from './home/Banner';
import About from './home/About';
import Slider from './home/Slider';
import Payment from './home/Payment';
import Form from './home/Form';
import Footer from './home/Footer';
import '../assets/styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Slider />
      <Payment />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
