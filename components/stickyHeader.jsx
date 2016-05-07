import '../css/stickyHeader.css';
import React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
//import * as juice from 'juice/client';

const juice  = require('juice/client')
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

let StickyHeader = React.createClass({
  getInitialState () {
    return {
      rootSelector : this.props.rootSelector,
      dialogOpacity: 0,
      copyText     : '',
      saveDropdown : {
        open: false
      },
      saveName: ''
    }
  },

  render () {
    return (
      <div id="navbarContainer">
        <Navbar fixedTop fluid>
          <Navbar.Header>
            <Navbar.Brand>
              Newsletters
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <Button bsStyle="primary" onClick={this.copyHtml}>Copy HTML</Button>
            </Navbar.Form>
            <Navbar.Form pullRight>
              <Button bsStyle="danger">
                Clear
              </Button>
            </Navbar.Form>
            <Nav pullRight bsStyle="pills" pullRight>
              <NavDropdown
                open={this.state.saveDropdown.open}
                onToggle={this.saveDropdownToggle}
                title="Save"
                id="nav-dropdown-save"
              >
                <MenuItem eventKey="4.1" ref="keepFocus">
                  <input type="text" value={this.state.saveName} placeholder="Name..." onChange={this.updateSaveName}></input>
                  <Button onClick={this.save}>Save</Button>
                </MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey="4.2">Some draft</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={5} title="Load" id="nav-dropdown-load">
                <MenuItem eventKey="5.1" onClick={this.load}>Some draft</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
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
        </Navbar>
      </div>
    )
  },

  saveDropdownToggle (open) {
    const keepFocusElement = findDOMNode(this.refs.keepFocus);
    const keepFocusChildren = [].slice.apply(keepFocusElement.children[0].children);
    const keepFocus = keepFocusChildren.some(e => {
      return document.activeElement === e
    });

    if (!keepFocus) this.setState({
      saveDropdown: {
        ...this.state.saveDropdown,
        open
      }
    });
  },

  updateSaveName (e) {
    this.setState({saveName: e.target.value})
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
    let wrapper = require('../templates/default/wrapper.html')
      ;

    return wrapper.replace(/.*?<!-- insert -->/, text);
  },

  save () {
    this.props.dispatch({
      type: 'SAVE_STATE',
      name: this.state.saveName
    })
  },

  load () {
    this.props.dispatch({
      type: 'LOAD_STATE',
      name: this.state.saveName
    })
  }
});

StickyHeader = connect(({ stickyHeader: {saves} }) => {
  return {saves};
})(StickyHeader);

export default StickyHeader;