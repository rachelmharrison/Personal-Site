import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '../../components/SocialIcons';
import Nav from '../../components/Nav';
import ScrollToNext from '../../components/ScrollToNext';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <div className="intro-wrapper">
        <img className="rachel-photo" src={require('../../images/IMG_5260.jpg')} />
          <div className="intro-name">Rachel Harrison</div>
          <div className="tagline">
            uOttawa Student | Software Developer | Website Builder
          </div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
