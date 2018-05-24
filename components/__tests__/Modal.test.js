/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Modal from '../Modal';

describe('Modal Tests', () => {
  const title = 'Modal Title';
  const content = <p>Modal content</p>;
  const component = (
    <Modal title={title}>
      {content}
    </Modal>
  );
  const wrapper = shallow(component);
  const render = renderer.create(component);
  const tree = render.toJSON();
  it('Renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
  it('Renders title', () => {
    expect(wrapper.find('.title').text()).toBe(title);
  });
});
