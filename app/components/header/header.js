import React from 'react';
import Component from '../component';

require('./header.scss');

export default class Header extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  render() {
    return (
      <header className="header">
        {this.props.children}
      </header>
    );
  }
}
