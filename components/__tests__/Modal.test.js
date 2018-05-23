/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../Modal';

describe('Modal Tests', () => {
  it('Renders correctly', () => {
    const component = renderer.create((
      <Modal title="Modal Title">
        <p>Modal content</p>
      </Modal>
    ));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
