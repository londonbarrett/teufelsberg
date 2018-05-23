import * as React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

const Gallery = ({ alt, images }) => {
  const imagesList = images.map(value => (
    <Thumbnail uri={value} alt={alt} key={value} />
  ));
  return (
    <section>
      <div>
        {imagesList}
      </div>
    </section>
  );
};

Gallery.propTypes = {
  alt: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
