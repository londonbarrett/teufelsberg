import * as React from 'react';
import Router from 'next/router';

class CloseButton extends React.Component {
  onClick = (e) => {
    e.preventDefault();
    Router.push('/', '/');
  }
  render() {
    return (
      <a
        href="/"
        onClick={this.onClick}
      >X
      </a>
    );
  }
}

export default CloseButton;
