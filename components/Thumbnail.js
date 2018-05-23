import * as React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import config from '../config';

class Thumbnail extends React.Component {
  onClick = (e) => {
    const { uri } = this.props;
    e.preventDefault();
    Router.push(`/?photoId=${uri}`, `/photo?id=${uri}`);
  }
  render() {
    const { uri, alt } = this.props;
    return (
      <a
        href={`/photo?id=${uri}`}
        onClick={this.onClick}
      >
        <img
          src={`${config.imagePrefix}${uri}${config.smallSuffix}`}
          alt={alt}
        />
      </a>
    );
  }
}

Thumbnail.propTypes = {
  uri: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Thumbnail;
