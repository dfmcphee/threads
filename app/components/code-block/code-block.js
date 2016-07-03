import React from 'react';
import Component from '../component';
import beautify from 'js-beautify';

export default class CodeBlock extends Component {
  static propTypes = {
    children: React.PropTypes.isRequired
  }

  beautify(code) {
    return beautify.js_beautify(code, { indent_size: 2 });
  }

  render() {
    return (
      <pre>
      <code>{this.beautify(this.props.children)}</code>
      </pre>
    );
  }
}
