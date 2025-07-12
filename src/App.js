import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Body from './components/Body';
function App() {
  return (
    <div>
      <Navbar />
      <Body/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
