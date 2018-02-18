import React from 'react';
import ReactDOM from 'react-dom';
import './Form.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SaveContent from '../saveContent/SaveContent';
import ShowContent from '../showContent/ShowContent';

function display() {
  class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        key: 0,
        savePage: true,
        saved: Array(0).fill(),
        noOfCharacters: null,
        value: null,
        maxLength: 150,
        inputText: null,
      };
    }
    changeText(e) {
      const inputText = e.target.value;
      this.setState({ inputText });
    }

    changeContent(e) {
      const { value } = e.target;
      this.setState({ value });
      if (value.length > 12) {
        e.target.style.color = 'red';
        e.target.maxLength = 12;
        e.target.value = e.target.value.slice(0, 12);
        const noOfCharacters = e.target.value.length;
        this.setState({ maxLength: 12, noOfCharacters, value });
      } else {
        e.target.style.color = 'black';
        e.target.maxLength = 150;
        e.target.value = e.target.value.slice(0, 12);
        const noOfCharacters = e.target.value.length;
        this.setState({ maxLength: 150, noOfCharacters, value });
      }
    }

    saveContent() {
      const saved = this.state.saved.slice();
      saved.push(this.state.inputText);
      saved.push(this.state.value);
      this.setState({
        noOfCharacters: null,
        value: '',
        maxLength: 150,
        saved,
        inputText: '',
        savePage: false,
      }, () => { console.log(this.state.saved); });
    }
    changePage() {
      const savePage = true;
      this.setState({ savePage });
    }
    editPage(e) {
      const savePage = true;
      const unique = ((e.target.id) % 2 === 0) ? 0 : 1;
      const id = Math.floor(e.target.id / 2);
      const inputText = this.state.saved[id * 2];
      const value = this.state.saved[(id * 2) + 1];
      console.log(id);
      this.setState({ savePage, inputText, value });
    }
    render() {
      if (this.state.savePage) {
        return (
          <div id="form">
            <Header value="Start taking notes" />
            <SaveContent
              inputText={this.state.inputText}
              changeText={(e) => { this.changeText(e); }}
              changeContent={(e) => { this.changeContent(e); }}
              saveContent={(e) => { this.saveContent(e); }}
              value={this.state.value}
              maxLength={this.state.maxLength}
              noOfCharacters={this.state.noOfCharacters}
            />
            <Footer value="About us" />
          </div>
        );
      }
      return (
        <div >
          <ShowContent saved={this.state.saved} changePage={() => this.changePage()} editPage={(e) => { this.editPage(e); }} />
        </div>

      );
    }
  }

  ReactDOM.render(<Form />, document.getElementById('root'));
}
export default display;
