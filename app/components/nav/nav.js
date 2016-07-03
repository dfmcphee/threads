import React from 'react';
import Component from '../component';

require('./nav.scss');

export default class Nav extends Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    title: React.PropTypes.object
  }

  renderTitle() {
    let title;
    if (this.props.title) {
      title = (
        <span className="nav__title">
          <a href={this.props.title.link}>{this.props.title.name}</a>
        </span>
      );
    }
    return title;
  }

  renderItems() {
    return this.props.items.map((item) => {
      return (
        <li className="nav__item">
          <a href={item.link}>{item.name}</a>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="nav">
        {this.renderTitle()}
        <ul className="nav__list">
          {this.renderItems()}
        </ul>
      </nav>
    );
  }
}
