import * as React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import config from '../config';

class Thumbnail extends React.Component {
  onClick = (e) => {
    const { uri, alt } = this.props;
    e.preventDefault();
    Router.push(`/photo?id=${uri}&title=${alt}`);
  }
  render() {
    const { uri, alt } = this.props;
    return (
      <a
        className="link"
        href={`/photo?id=${uri}&title=${alt}`}
        onClick={this.onClick}
      >
        <img
          src={`${config.imagePrefix}${uri}${config.smallSuffix}`}
          alt={alt}
        />
        <style jsx>
          {`
            .link {
              box-sizing: border-box;
              display: block;
              height: 136px;
              margin: 1rem;
            }
            .link:hover {
              border-bottom: 3px solid orange;
            }
          `}
        </style>
      </a>
    );
  }
}

Thumbnail.propTypes = {
  uri: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Thumbnail;
