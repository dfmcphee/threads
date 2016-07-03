import React from 'react';
import Component from '../component';

require('./list.scss');

export default class List extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    type: React.PropTypes.string
  }

  renderUnorderedList() {
    return (
      <ul className="list list--unordered">
        {this.props.children}
      </ul>
    );
  }

  renderOrderedList() {
    return (
      <ol className="list list--ordered">
        {this.props.children}
      </ol>
    );
  }

  render() {
    let list;
    if (this.props.type === 'ordered') {
      list = this.renderOrderedList();
    } else {
      list = this.renderUnorderedList();
    }
    return list;
  }
}
