import React from 'react';
import Component from '../../component';

require('./radio-button.scss');

export default class RadioButton extends Component {
  static defaultProps = {
    label: '',
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  }

  state = {
    label: this.props.label,
  }

  render() {
    return (
      <div className="radio-button">
        <input className="radio-button__input" type="radio" id={this.props.id} name={this.props.name} />
        <span className="radio-button__target">
          <span className="radio-button__indicator"></span>
        </span>
        <label htmlFor={this.props.id} className="radio-button__label">{this.state.label}</label>
      </div>
    );
  }
}
