import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ScrollTop from './components/ScrollTop';
import ThemeContext from './components/ThemeContext';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <ThemeContext>
          <LandingPage />
          <AboutPage />
          <ScrollTop />
          <Footer />
        </ThemeContext>
      </div>
    );
  }
}

export default App;
