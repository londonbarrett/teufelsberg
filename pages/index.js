import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'next/router';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Modal from '../components/Modal';
import Picture from '../components/Picture';
import config from '../config';

class Index extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    router: PropTypes.object.isRequired,
  };
  static defaultProps = {
    images: [],
    title: '',
  };
  static async getInitialProps() {
    try {
      const req = await axios.get(config.endpoint);
      return {
        images: Array.from(new Set(req.data.images.map(value => value.uri))),
        title: req.data.title,
      };
    } catch (error) {
      throw error;
    }
  }
  render() {
    const { images, title, router } = this.props;
    return (
      <main>
        <article>
          <Header title={title} />
          <Gallery images={images} alt={title} />
          { router.query.photoId &&
            <Modal title={title}>
              <Picture uri={router.query.photoId} alt={title} />
            </Modal>
          }
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
  }
}

export default withRouter(Index);
