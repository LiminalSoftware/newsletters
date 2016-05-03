import '../css/stickyHeader.css';
import React from 'react';
import {Button} from 'react-bootstrap';
//import * as juice from 'juice/client';

let juice    = require('juice/client')
  , download = (url, callback) => {
      let xhr = new XMLHttpRequest
        ;

      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = function (e) {
        var arr = new Uint8Array(this.response);
        var i = arr.length;
        var binStr = new Array(i);

        while (i--) {
          binStr[i] = String.fromCharCode(arr[i]);
        }

        var data = binStr.join('');

        callback(data);
      };

      xhr.send();
    }
  ;

export default React.createClass({
  getInitialState () {
    return {
      rootSelector : this.props.rootSelector,
      dialogOpacity: 0,
      copyText     : ''
    }
  },

  render () {
    return (
      <div
        id="stickyHeader"
        style={{
          position: 'fixed',
          padding: '10px',
          //width: '100vw',
          //backgroundColor: 'rgba(255, 255, 255, 0.8'
        }}
      >
        <Button bsStyle="primary" onClick={this.copyHtml}>Copy HTML</Button>
        <div
          className="dialog"
          style={{
            opacity: this.state.dialogOpacity
          }}
        >
        <textarea
          ref="copyArea"
          value={this.state.copyText}
        ></textarea>
          <div className="message">Hit "Ctrl + C" to copy now</div>
        </div>
      </div>
    )
  },

  copyHtml () {
    let cssUrl   = document.querySelector('link').href
      , copyArea = this.refs.copyArea
      , that     = this
      ;

    download(cssUrl, (css) => {
      let styleElements = [].slice.apply(document.querySelectorAll('style'))
        , styles        = styleElements.reduce((previous, current) => {
            return previous.innerHTML + '\n\n' + current.innerHTML;
          })
        , text          = juice.inlineContent(
        document.querySelector(
          that.state.rootSelector
        ).outerHTML,
            styles + '\n\n' + css
          )
        ;

      that.setState({
        copyText     : that.wrap(text),
        dialogOpacity: 1
      }, () => {
        setTimeout(() => {
          that.setState({dialogOpacity: 0});
        }, 5000);
      });

      copyArea.select();
      //let result = document.execCommand('copy');
      //console.log(result);
    })
  },

  wrap (text) {
    let wrapper = require('../../templates/default/wrapper.html')
      ;

    return wrapper.replace(/.*?<!-- insert -->/, text);
  }
});