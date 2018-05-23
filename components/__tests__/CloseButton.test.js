/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import CloseButton from '../CloseButton';

describe('CloseButton Tests', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<CloseButton />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
