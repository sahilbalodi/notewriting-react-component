import React from 'react';
import Row6 from '../row6/Row6';
import Row5 from '../row5/Row5';

class Joined extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row5 onChange={(e) => { this.props.onChange(e); }} value={this.props.value} />
        <Row6 text1="save" characters={this.props.maxLength - this.props.noOfCharacters} onClick={() => { this.props.onClick(); }} />
      </div>
    );
  }
}
export default Joined;
