import * as React from 'react';
import PropTypes from 'prop-types';
import config from '../config';

const Picture = ({ uri, alt }) => (
  <div>
    <img
      className="image"
      src={`${config.imagePrefix}${uri}${config.bigSuffix}`}
      alt={alt}
    />
    <style jsx>
      {`
        .container {
          width: 100%;
        }
        .image {
          width: 100%;
        }
      `}
    </style>
  </div>
);

Picture.propTypes = {
  uri: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Picture.defaultProps = {
  alt: 'Mobile.de',
};

export default Picture;
