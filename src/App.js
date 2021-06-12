import './App.css';
import React from 'react';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';



function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <About></About>
        <Work></Work>
      </main>
    </div>
  );
}

export default App;
