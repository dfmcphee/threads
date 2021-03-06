import React from 'react';
import Component from '../../component';
import Icon from '../../icon/icon';

require('./checkbox.scss');

export default class Checkbox extends Component {
  static defaultProps = {
    label: '',
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  }

  state = {
    label: this.props.label,
  }

  render() {
    return (
      <div className="checkbox">
        <input className="checkbox__input" type="checkbox" id={this.props.id}/>
        <span className="checkbox__box">
          <Icon name="checkmark" />
        </span>

        <label htmlFor={this.props.id} className="checkbox__label">
          {this.state.label}
        </label>
      </div>
    );
  }
}
