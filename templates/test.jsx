import React from 'react';

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

module.exports = React.createClass({
  render () {
    return (
      <div>
        <span style={{color: 'red'}}>testing 098</span>
        <MyImage src='http://placehold.it/100x100' alt="testing" />
      </div>
    )
  }
});