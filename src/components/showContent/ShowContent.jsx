import React from 'react';
import Header from '../header/Header';
import Button from '../button/Button';
import './ShowContent.css';

class ShowContent extends React.Component {
  constructor(props) {
    super(props);
  }
  displayComponents() {
    const array = this.props.saved;
    const display = [];
    for (let i = 0; i < array.length; i += 1) {
      display.push(<div className="box" id={i} onClick={(e) => { this.props.editPage(e); }}>{array[i]}</div>);
    }
    return display;
  }
  render() {
    return (
      <div id="outerbox">
        <Header value="Saved notes" />
        {this.displayComponents()}
        <button id="display-footer-button" onClick={() => { this.props.changePage(); }}>Create new note</button>
      </div>
    );
  }
}
export default ShowContent;
