import React from 'react';
import Component from '../../component';

require('./button.scss');

export default class Button extends Component {
  static defaultProps = {
    label: '',
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.string,
  }

  state = {
    label: this.props.label,
  }

  classes() {
    return this.variants('button', ['primary', 'danger'], this.props);
  }

  render() {
    return (
      <button type="button" className={this.classes()} id={this.props.id}>
        <div className="button__container">
          {this.state.label}
        </div>
      </button>
    );
  }
}
