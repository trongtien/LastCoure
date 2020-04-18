import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { RouserRouter as Router } from 'react-router-dom';
import Menu from './components/menu';
import Slider from './components/slider';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import HomeComponent from './components/Pages/HomeCoponent';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Slider />
        <Container>
          <HomeComponent />
        </Container>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
