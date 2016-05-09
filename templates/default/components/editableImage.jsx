import React from 'react';
import path from 'path';
import { imagesUrl } from '../../../util/aws';
import { arrayBufferToBase64, base64ToArrayBuffer } from '../../../util';
import '../css/editableImage.css';

export default React.createClass({
  getInitialState () {
    let copiedProps = {
      href        : this.props.href || '',
      altText     : this.props.altText || '',
      vspace      : this.props.vspace || 0,
      hspace      : this.props.hspace || 0,
      expandWidth : this.props.expandWidth || 0,
      expandHeight: this.props.expandHeight || 0

    };

    let defaults = {
          ...copiedProps,
          dataUri: this.download(this.props.src),
          editing: false,
          width  : '',
          height : ''
        }
      ;

    return defaults;
    //return draft.isAvailable ? draft.store : defaults;
  },

  render () {
    //draft.update(this.state);
    return this.state.editing ? this.editor() : this.static();
  },

  static () {
    return (
      <a
        href={this.state.href || '#'}
        className="image"
      >
        <img
          ref="image"
          onClick={this.toggleEditor}
          src={this.state.dataUri}
          alt={this.state.altText || ''}
        /></a>
    )
  },

  editor () {
    return (
      <div
        className="image editor"
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
            width: `${this.state.width + this.state.expandWidth}px`,
          }}
          value={this.state.href}
          onChange={this.handleEdit('href')}
        />
        <input
          type="text"
          ref="altEditor"
          placeholder="Image name..."
          style={{
            width: `${this.state.width + this.state.expandWidth}px`,
          }}
          value={this.state.altText}
          onChange={this.handleEdit('altText')}
        />
        <input
          type="file"
          ref="fileEditor"
          style={{
            width: `${this.state.width + this.state.expandWidth}px`,
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
        >apply
        </button>
        <img
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
    } else {
      this.awsImageUpload();
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
      this.setState({
        filename: file.name,
        dataUri : e.target.result
      })
    };

    reader.readAsDataURL(file);

    this.toggleEditor();
  },

  download (url) {
    let xhr = new XMLHttpRequest;
    let that = this;

    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function (e) {
      let base64Image = arrayBufferToBase64(this.response);

      that.setState({
        filename: path.basename(url),
        base64  : base64Image,
        dataUri : `data:;base64,${base64Image}`
      });
    };

    xhr.send();

    return 'data:;base64,'
  },

  awsImageUpload() {
    const xhr = new XMLHttpRequest;
    const data = base64ToArrayBuffer(this.state.base64);
    const extension = path.extname(this.state.filename) || '.png';
    console.log(extension);
    let contentType;

    switch (extension) {
      case '.jpg':
      case '.jpeg':
        contentType = 'image/jpg';
        break;
      case '.png':
        console.log('png detected!');
        contentType = 'image/png';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        break;
      case '.tiff':
        contentType = 'image/tiff';
        break;
      default:
        console.error('unsupported image type!');
    }

    xhr.open('PUT', `${imagesUrl}/${this.state.altText}${extension}`, true);
    xhr.setRequestHeader('content-type', contentType);
    xhr.onload = () => {
      //-- error handling?
    };

    xhr.send(data);
  }
});