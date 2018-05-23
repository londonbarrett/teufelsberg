/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Photo from '../photo.js';

describe('Photo Page Snapshot Testing', () => {
  it('Renders Photo Page correctly', () => {
    const component = renderer.create(<Photo router={{ query: { id: 'image_01' } }} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
