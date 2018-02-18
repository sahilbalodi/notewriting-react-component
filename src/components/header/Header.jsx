import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header id="header">{this.props.value}</header>
    );
  }
}
export default Header;
