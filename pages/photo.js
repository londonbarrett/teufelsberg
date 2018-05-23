import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Picture from '../components/Picture';
import CloseButton from '../components/CloseButton';

const Photo = ({ router }) => (
  <div>
    <CloseButton />
    <Picture uri={router.query.id} />
  </div>
);

Photo.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(Photo);
