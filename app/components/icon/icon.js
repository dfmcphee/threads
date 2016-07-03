import React from 'react';
import Component from '../component';

require('./icon.scss');

export default class Icon extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
  }

  href() {
    return `#${this.props.name}`;
  }

  classes() {
    return this.variants('icon', ['large', 'danger'], this.props);
  }

  render() {
    return (
      <svg className={this.classes()}>
        <use xlinkHref={this.href()} />
      </svg>
    );
  }
}
