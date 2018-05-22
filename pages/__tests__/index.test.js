/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Index from '../index.js';

describe('Index Unit Enzyme', () => {
  it('Home shows "Index Page"', () => {
    const index = shallow(<Index />);

    expect(index.find('h1').text()).toEqual('Index Page');
  });
});

describe('Index Snapshot Testing', () => {
  it('Renders Index Page correctly', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
