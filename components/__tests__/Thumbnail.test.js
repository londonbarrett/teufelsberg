/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Thumbnail from '../Thumbnail';
import config from '../../config';

describe('Thumbnail Tests', () => {
  const uri = 'image_uri';
  const alt = 'alternative text';
  const component = (
    <Thumbnail
      uri={uri}
      alt={alt}
    />
  );
  const wrapper = shallow(component);
  it('Renders correctly', () => {
    const render = renderer.create(component);
    const tree = render.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Request the right url', () => {
    expect(wrapper.find('img').prop('src'))
      .toBe(`${config.imagePrefix}${uri}${config.smallSuffix}`);
  });
  it('Has an alt attribute', () => {
    expect(wrapper.find('img').prop('alt')).toEqual(alt);
  });
});
