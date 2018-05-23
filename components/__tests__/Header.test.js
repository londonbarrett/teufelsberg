/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Header Tests', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<Header title="Header title" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
