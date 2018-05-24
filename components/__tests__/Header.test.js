/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header Tests', () => {
  const title = 'Header title';
  const component = <Header title={title} />;
  const wrapper = shallow(component);
  it('Renders correctly', () => {
    const render = renderer.create(component);
    const tree = render.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Renders the title', () => {
    expect(wrapper.find('h1').text()).toBe(title);
  });
});
