import * as React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../components/CloseButton';

const Modal = ({ title, children }) => (
  <section className="container">
    <div className="header">
      <span className="title">{title}</span>
      <CloseButton className="close" />
    </div>
    <div className="content">
      { children }
    </div>
    <style jsx>
      {`
        .container {
          align-items: center;
          background: black;
          display: flex;
          height: 100vh;
          position: fixed;
          top: 0;
          width: 100vw;
        }
        .header {
          position: fixed;
          top: 0;
          width: 100%;
        }
        .content {
          width: 100%;
        }
        .title {
          color: white;
          display: block;
          font-size: 2rem;
          font-weight: bold;
          line-height: 3rem;
          margin: 1rem;
          width: 80%;
        }
        .close {
          position: absolute;
        }
      `}
    </style>
  </section>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
