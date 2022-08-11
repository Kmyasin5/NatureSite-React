import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destiny from './components/Destiny';
import View from './components/View';
import ImgCarousel from './components/ImgCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Destiny />
      <View />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
