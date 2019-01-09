import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '../../components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Welcome to my site! My name is Rachel and I am currently a third year student in Software Engineering at the Univeristy of Ottawa. <br />
              <br />
              On my site you'll find stuff in two main areas: <br />
              1. <b>Software Development</b> Languages and tools I like, work experience, personal projects etc. <br />
              2. <b>Website Building:</b> Examples of my work building custom websites for people using tools like WordPress and Squarespace
            </p>
            <br/>
            {/* This semester (January-April 2019) I am working as a part-time developer at <a href="https://www.arioplatform.com/" target="_blank">Ario</a>. I completed a co-op placement with Ario last
            semester and I loved working there so much I came back for more! Working for a start-up is such a rewarding experience because I'm able to touch so many parts of the project.
            <br />
            <br />
            In previous semesters I've completed co-op placements at <a href="https://fokoretail.com/" target="_blank">Foko</a> and with the IT branch of the Canada Revenue Agency. */}
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
