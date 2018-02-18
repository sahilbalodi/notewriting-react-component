import React from 'react';
import Row2 from '../row2/Row2';
import InputText1 from '../inputText1/InputText1';
import Row4 from '../row4/Row4';
import Joined from '../joinedComponent/Joined';

class SaveContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row2 />
        <InputText1 value={this.props.inputText} onChange={(e) => { this.props.changeText(e); }} />
        <Row4 />
        <Joined
          onChange={(e) => { this.props.changeContent(e); }}
          value={this.props.value}
          onClick={() => { this.props.saveContent(); }}
          maxLength={this.props.maxLength}
          noOfCharacters={this.props.noOfCharacters}
        />
      </div>
    );
  }
}
export default SaveContent;
