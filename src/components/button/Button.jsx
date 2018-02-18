import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button id="button">{this.props.value}</button>
    );
  }
}
export default Button;
