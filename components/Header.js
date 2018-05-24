import * as React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header className="header">
    <h1 className="title">{title}</h1>
    <style jsx>
      {`
        .header {
          background: black;
          color: white;
          overflow: auto;
          width: 100%;
        }
        .title {
          font-size: 2rem;
          line-height: 3rem;
          margin: 1rem;
        }
      `}
    </style>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
