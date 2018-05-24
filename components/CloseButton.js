import * as React from 'react';
import Router from 'next/router';

class CloseButton extends React.Component {
  onClick = (e) => {
    e.preventDefault();
    Router.push('/');
  }
  render() {
    return (
      <a
        className="link"
        href="/"
        onClick={this.onClick}
      >X
        <style jsx>
          {`
            .link {
              color: orange;
              display: block;
              height: 40px;
              right: 20px;
              overflow: hidden;
              position: absolute;
              text-indent: -9999px;
              top: 20px;
              width: 40px;
              transition: all .5s;
            }
            .link:hover {
              transform: rotate(180deg);
            }
            .link:before, .link:after {
              background: orange;
              content: '';
              height: 1px;
              left: 0;
              position: absolute;
              top: 50%;
              width: 100%;
            }
            .link:before {
              transform: rotate(45deg);
            }
            .link:after {
              transform: rotate(-45deg);
            }
          `}
        </style>
      </a>
    );
  }
}

export default CloseButton;
