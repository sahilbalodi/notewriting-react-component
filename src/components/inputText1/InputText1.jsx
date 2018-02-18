import React from 'react';
import './InputText1.css';

class InputText1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="row3">
        <input type="text" value={this.props.value} onChange={(e) => { this.props.onChange(e); }} />
      </div>
    );
  }
}
export default InputText1;
