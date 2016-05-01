import React from 'react';
import {Button} from 'react-bootstrap';

export default React.createClass({
  getInitialState () {
    return {
      rootSelector: this.props.rootSelector
    }
  },

  render () {
    return (
      <div
        style={{
          position: 'fixed',
          padding: '10px',
          //width: '100vw',
          //backgroundColor: 'rgba(255, 255, 255, 0.8'
        }}
      >
        <Button onClick={this.copyHtml}>Copy HTML</Button>
      </div>
    )
  },

  copyHtml () {
    window.prompt('Template HTML:', document.querySelector(this.state.rootSelector).outerHTML)
  }
});