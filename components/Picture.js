import * as React from 'react';
import PropTypes from 'prop-types';
import config from '../config';

const Picture = ({ uri, alt }) => (
  <img src={`${config.imagePrefix}${uri}${config.bigSuffix}`} alt={alt} />
);

Picture.propTypes = {
  uri: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Picture.defaultProps = {
  alt: 'Mobile.de',
};

export default Picture;
