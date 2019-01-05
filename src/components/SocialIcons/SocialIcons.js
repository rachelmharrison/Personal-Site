import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;


  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rachelmharrison" style={ { color: colorPrimary } }><FontAwesomeIcon icon={["fab","github"]} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rachel-harrison-32680a128" style={ { color: colorPrimary } }><FontAwesomeIcon icon={["fab","linkedin"]} /></a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;