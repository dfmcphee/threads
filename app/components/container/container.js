import React from 'react';
import Component from '../component';

require('./container.scss');

export default class Container extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  render() {
    return (
      <main className="container">
        {this.props.children}
      </main>
    );
  }
}
