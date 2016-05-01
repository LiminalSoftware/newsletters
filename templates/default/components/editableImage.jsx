import React from 'react';

export default React.createClass({
  getInitialState () {
    return {
      dataUri     : this.download(this.props.src),
      href        : this.props.href || '#',
      altText     : this.props.alt || '',
      editing     : false,
      width       : '',
      height      : '',
      expandWidth : this.props.expandWidth || 0,
      expandHeight: this.props.expandHeight || 10
    }
  },

  render () {
    return this.state.editing ? this.editor() : this.static();
  },

  static () {
    return (
      <a
        href={this.state.href}
        className="image"
      >
        <img
          ref="image"
          onClick={this.toggleEditor}
          src={this.state.dataUri}
          alt={this.state.altText}
        /></a>
    )
  },

  editor () {
    return (
      <div
        className="image"
        style={{
            width: `${this.state.width + this.state.expandWidth}px`,
            height: `${this.state.height + this.state.expandHeight}px`,
            position: 'relative'
          }}
      >
        <input
          type="text"
          ref="hrefEditor"
          placeholder="Link URL Here..."
          style={{
            border: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            width: `${this.state.width + this.state.expandWidth}px`,
            color: 'rgb(0, 0, 0)',
            position: 'relative',
            zIndex: 1
          }}
          value={this.state.text}
          onChange={this.handleEdit('href')}
        />
        <input
          type="text"
          ref="altEditor"
          placeholder="Alt Text Here..."
          style={{
            border: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            width: `${this.state.width + this.state.expandWidth}px`,
            color: 'rgb(0, 0, 0)',
            position: 'relative',
            zIndex: 1
          }}
          value={this.state.text}
          onChange={this.handleEdit('altText')}
        />
        <input
          type="file"
          ref="fileEditor"
          style={{
            border: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            width: `${this.state.width + this.state.expandWidth}px`,
            position: 'relative',
            zIndex: 1
          }}
          onChange={this.handleUpload}
        />
        <button
          ref="apply"
          style={{
            position: 'relative',
            zIndex: 1
          }}
          onClick={this.toggleEditor}
        >apply</button>
        <img
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0
          }}
          ref="preview"
          src={this.state.dataUri}
          alt={this.state.altText}
          onClick={this.toggleEditor}
        />
      </div>
    )
  },

  toggleEditor (e) {
    if (!this.state.editing) {
      e.preventDefault();

      this.setWidth();
      this.setHeight();
    }

    this.setState({editing: !this.state.editing}, () => {
      if (this.state.editing) {
        this.refs.hrefEditor.focus();
      }
    });
  },

  handleEdit (field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  },

  setWidth () {
    this.setState({width: this.refs.image.offsetWidth});
  },

  setHeight () {
    this.setState({height: this.refs.image.offsetHeight});
  },

  handleUpload (e) {
    let file   = e.target.files[0]
      , reader = new FileReader()
      ;

    reader.onload = (e) => {
      this.setState({'dataUri': e.target.result})
    };

    reader.readAsDataURL(file);

    this.toggleEditor();
  },

  download (url) {
    let xhr  = new XMLHttpRequest
      , that = this
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

      that.setState({dataUri: 'data:;base64,' + window.btoa(data)});
    };

    xhr.send();

    return 'data:;base64,'
  }
});