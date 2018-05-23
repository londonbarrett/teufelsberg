/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../index.js';

describe('Index Snapshot Testing', () => {
  it('Renders Index Page Correctly', () => {
    const component = renderer.create(<Index router={{ query: { photoId: 'image_01' } }} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
