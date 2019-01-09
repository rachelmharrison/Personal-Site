import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ScrollTop from './components/ScrollTop';
import ThemeContext from './components/ThemeContext';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

library.add(fab, faSortDown)


class App extends Component {



  render() {
    return (
      <div className="dev-landing-page">
        <ThemeContext>
          <LandingPage />
          <AboutPage />
          <ResumePage />
          <ScrollTop />
          <Footer />
        </ThemeContext>
      </div>
    );
  }
}

export default App;
