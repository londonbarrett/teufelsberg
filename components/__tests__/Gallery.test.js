/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from '../Gallery';

describe('Gallery Tests', () => {
  it('Renders correctly', () => {
    const images = [
      'image_01',
      'image_02',
      'image_03',
      'image_04',
    ];
    const component = renderer.create((
      <Gallery
        title="Image Gallery"
        images={images}
      />
    ));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
