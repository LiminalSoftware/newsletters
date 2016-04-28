//require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
//import * as bs from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import FormGroup from 'react-bootstrap/lib/FormGroup'

let TextArea = React.createClass({
  getInitialState() {
    return {
      //value: "<span style='color: purple;'>testing</span>"
      value: require('html!../templates/old.html')
    };
  },

  handleChange(e) {
    this.setState({value: e.target.value});
  },

  render() {
    return (
      <div>
        <textarea
          value={this.state.value}
          placeholder="Testing..."
          onChange={this.handleChange}
        />
        <div dangerouslySetInnerHTML={{__html: this.state.value}}></div>
      </div>
    );
  }
});

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <TextArea />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));

console.log('testing 123');

