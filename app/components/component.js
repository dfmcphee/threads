import React from 'react';

export default class Component extends React.Component {
  variants(base, availableOptions, options) {
    const classes = [base];
    availableOptions.forEach(function(option) {
      if (options[option]) {
        classes.push(`${base}--${option}`);
      }
    });
    return classes.join(' ');
  }
}
