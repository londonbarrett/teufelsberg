/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Gallery from '../Gallery';

describe('Gallery Tests', () => {
  const alt = 'car image';
  const images = [
    'image_01',
    'image_02',
    'image_03',
    'image_04',
  ];
  const component = (
    <Gallery
      alt={alt}
      images={images}
    />
  );
  const wrapper = shallow(component);
  it('Renders correctly', () => {
    const render = renderer.create(component);
    const tree = render.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('images have the alt attribute', () => {
    wrapper.find('Thumbnail').forEach((node) => {
      expect(node.prop('alt')).toBe(alt);
    });
  });
  it('Renders the thumbnails', () => {
    expect(wrapper.find('Thumbnail')).toHaveLength(4);
  });
});
