/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Picture from '../Picture';
import config from '../../config';

describe('Picture Tests', () => {
  const uri = 'picture_01';
  const component = <Picture uri={uri} />;
  const wrapper = shallow(component);
  it('Renders correctly', () => {
    const render = renderer.create(component);
    const tree = render.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Request the right image', () => {
    expect(wrapper.find('img').prop('src'))
      .toEqual(`${config.imagePrefix}${uri}${config.bigSuffix}`);
  });
});
