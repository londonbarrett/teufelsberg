import * as React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };
  state = {
    error: null,
    info: null,
  };
  componentDidCatch(error, info) {
    this.setState({ error, info });
  }
  render() {
    const { children } = this.props;
    const { error, info } = this.state;
    if (info) {
      console.log('XXXZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
      return (
        <div>
          <h1>ERROR {error}</h1>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
