import * as React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../components/CloseButton';

const Modal = ({ title, children }) => (
  <section>
    <h1>{title}</h1>
    <CloseButton />
    <div>
      { children }
    </div>
  </section>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
