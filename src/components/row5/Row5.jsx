import React from 'react';
import './Row5.css';

class Row5 extends React.Component {
  render() {
    return (
      <div id="row5" >
        <textarea id="textarea" value={this.props.value} onChange={(e) => { this.props.onChange(e); }} />
      </div>
    );
  }
}
export default Row5;
