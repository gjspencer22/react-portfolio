import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import './index.css';
import React, { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
// import ProfilePic from './assets/ProfilePic'



function App() {
  const [authenticated, setLogIn] = useState(true)

  return (
    <div>
      <Router>
        <Header />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
