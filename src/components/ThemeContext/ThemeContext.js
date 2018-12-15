import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getThemes } from './themes';

class ThemeContext extends Component {

  constructor(props) {
    super(props);
    const allThemes = getThemes();

    this.state = {
        theme: allThemes[Math.floor((Math.random() * (allThemes.length)))]
      }

  }
  
  getChildContext() {
    return {
      theme: this.state.theme
    };
  }
  render() {
    const { children } = this.props;
    const theme = this.state.theme;

    return (
      <div className="theme-context">
        <style jsx="true">
        {`
          body {
            background-color: ${theme.bgPrimary};
            body, h1, h2, h3, h4, h5, h6, p, ol, ul {
              color: ${theme.textPrimary}
            }
          }
        `}
        </style>
        { children }
      </div>
    );
  }
}

ThemeContext.propTypes = {
  children: PropTypes.node
}

ThemeContext.childContextTypes = {
  theme: PropTypes.any,
}

export default ThemeContext;