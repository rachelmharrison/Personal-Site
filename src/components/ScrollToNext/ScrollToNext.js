import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '../../utils/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.scss';

class ScrollToNext extends Component {

  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const { theme: { colorPrimary } } = this.context;
    return (
      <div className="scroll-to-next animate-icons" onClick={(e) => this.scrollToNext()}>
        <div className="arrow bounce" style={{ color: colorPrimary }}>
          <div className="scroll-text">Click Me</div>
          <FontAwesomeIcon icon="sort-down" className="arrow" size='4x'/>
        </div>
      </div>
    );
  }
}

ScrollToNext.propTypes = {
  pageSelector: PropTypes.string
};

ScrollToNext.contextTypes = {
  theme: PropTypes.any
};

export default ScrollToNext;
