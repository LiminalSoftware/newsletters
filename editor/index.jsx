//require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
//import * as bs from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Old from '../templates/old.jsx'
//import Test from '../templates/test.jsx'

let MyImage = React.createClass({
  getInitialState() {
    return {
      src: this.props.src,
      alt: this.props.alt
    }
  },

  render() {
    return (
      <img src={this.state.src} alt={this.state.alt} />
    )
  }
});

let TextArea = React.createClass({
  getInitialState() {
    return {
      value: "<span style='color: purple;'>testing</span>"
      //value: require('html!../templates/old.html')
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
        {/*<div dangerouslySetInnerHTML={{__html: this.state.value}}></div>*/}
        {/*<div dangerouslySetInnerHTML={{__html: require('html!../templates/old.html')}}></div>*/}
        {/*<Test />*/}
        <Old />
      </div>
    );
  }
});

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <MyImage src="http://placehold.it/300x300" alt="test" />
          <TextArea />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));

console.log('testing 123');

