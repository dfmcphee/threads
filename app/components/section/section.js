import React from 'react';
import Component from '../component';

require('./section.scss');

export default class Section extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  render() {
    return (
      <section className="section">
        {this.props.children}
      </section>
    );
  }
}
