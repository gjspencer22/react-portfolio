import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';



function App() {
  const [authenticated, setLogIn] = useState(false) 
  
  return (
    <div>
      <Router>
        <Header loggedIn = {authenticated} />
        <Switch>
          <Route exact path = '/' component = { About }/>
          <Route exact path = '/contact' component = { Contact }/>
          <Route exact path = '/work' component = { Work }/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  
  );
}

export default App;
