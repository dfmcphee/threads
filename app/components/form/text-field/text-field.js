import React from 'react';

require('./text-field.scss');

export default class TextField extends React.Component {
  static defaultProps = {
    label: '',
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
  }

  state = {
    label: this.props.label,
  }

  render() {
    return (
      <div className="text-field">
        <label htmlFor={this.props.id} className="text-field__label">{this.state.label}</label>
        <input className="text-field__input" type="text" id={this.props.id} />
      </div>
    );
  }
}
