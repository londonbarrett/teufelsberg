/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Picture from '../Picture';

describe('Picture Tests', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<Picture uri="picture_01" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
