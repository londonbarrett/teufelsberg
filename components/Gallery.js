import * as React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

const Gallery = ({
  title, images,
}) => {
  const imagesList = images.map(value => (
    <Thumbnail uri={value} alt={title} key={value} />
  ));
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {imagesList}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
