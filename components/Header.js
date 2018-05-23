import * as React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header className="header">
    <h1 className="title">{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
