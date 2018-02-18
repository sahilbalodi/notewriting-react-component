import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer id="footer">{this.props.value}</footer>
    );
  }
}

export default Footer;
