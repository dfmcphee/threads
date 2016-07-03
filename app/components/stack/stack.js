import React from 'react';
import Component from '../component';

require('./stack.scss');

export default class Stack extends Component {
  static defaultProps = {
    wrap: true
  }

  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  classes() {
    return this.variants('stack', [
      'wrap',
      'vertical',
      'distribution-leading',
      'distribution-trailing'
    ],
    this.props);
  }

  render() {
    return (
      <div className={this.classes()}>
        {this.props.children}
      </div>
    );
  }
}
