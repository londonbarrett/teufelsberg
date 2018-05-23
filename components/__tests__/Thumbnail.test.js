/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Thumbnail from '../Thumbnail';

describe('Thumbnail Tests', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<Thumbnail
      uri="image_uri"
      alt="alternative text"
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
