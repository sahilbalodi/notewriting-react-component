import React from 'react';
import './Row6.css';

class Row6 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button id="span1" onClick={() => { this.props.onClick(); }} >{this.props.text1}</button>
        <span id="span2">{this.props.characters} characters</span>
      </div>
    );
  }
}
export default Row6;
