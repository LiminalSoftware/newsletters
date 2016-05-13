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
            binStr[ i ] = String.fromCharCode(arr[ i ]);
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
      saveName     : ''
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
                  <input type="text" value={this.state.saveName} placeholder="Name..."
                         onChange={this.updateSaveName}></input>
                  <Button onClick={this.save(this.state.saveName)}>Save</Button>
                </MenuItem>
                <MenuItem divider/>
                { Object.keys(this.props.saves).map((name) => {
                  return <MenuItem key={name} onClick={this.save(name)}>{name}</MenuItem>
                }) }
              </NavDropdown>
              <NavDropdown eventKey={5} title="Load" id="nav-dropdown-load">
                { Object.keys(this.props.saves).map((name) => {
                  return <MenuItem key={name} onClick={this.load(name)}>{name}</MenuItem>
                }) }
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
    const keepFocusChildren = [].slice.apply(keepFocusElement.children[ 0 ].children);
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
    this.setState({ saveName: e.target.value })
  },

  copyHtml () {
    let cssUrl   = document.querySelector('link').href
      , copyArea = this.refs.copyArea
      , that     = this
      ;

    download(cssUrl, (css) => {
      const html = this.html4ize(document.querySelector(
        that.state.rootSelector
      ).outerHTML);
      const styleElements = [].slice.apply(document.querySelectorAll('style'));
      const styles = styleElements.reduce((previous, current) => {
        return previous.innerHTML + '\n\n' + current.innerHTML;
      });
      const text = juice.inlineContent(
        html,
        styles + '\n\n' + css
      );

      that.setState({
        copyText     : that.wrap(text),
        dialogOpacity: 1
      }, () => {
        setTimeout(() => {
          that.setState({ dialogOpacity: 0 });
        }, 5000);
      });

      copyArea.select();
      //let result = document.execCommand('copy');
      //console.log(result);
    })
  },

  wrap (text) {
    let wrapper = require('../templates/default/wrapper.html');

    return wrapper.replace(/.*?<!-- insert -->/, text);
  },

  html4ize (html) {
    const attributes = [ 'align' ];
    let result;

    attributes.forEach(attribute => {
      debugger;
      result = html.replace(new RegExp(`data-${attribute}\\s*?=\\s*?['"](\\w+)['"]`, 'g'), (match, value) => {
        debugger;
        return `${attribute}="${value}"`
      })
    });

    return result;
  },

  save (name) {
    return () => {
      this.props.dispatch({
        type: 'SAVE_STATE',
        name
      })
    }
  },

  load (name) {
    return () => {
      this.props.dispatch({
        type: 'LOAD_STATE',
        name
      })
    }
  }
});

StickyHeader = connect(({ stickyHeader: { saves } }) => {
  return { saves };
})(StickyHeader);

export default StickyHeader;