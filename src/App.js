import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ScrollTop from './components/ScrollTop';
import ThemeContext from './components/ThemeContext';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faSortDown)


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
