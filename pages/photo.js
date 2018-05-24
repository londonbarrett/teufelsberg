import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Modal from '../components/Modal';
import Picture from '../components/Picture';

const Photo = ({ router }) => (
  <main>
    <article>
      <Modal title={router.query.title}>
        <Picture uri={router.query.id} alt={router.query.title} />
      </Modal>
    </article>
    <style jsx global>
      {`
        body {
          margin: 0;
        }
      `}
    </style>
  </main>
);

Photo.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(Photo);
