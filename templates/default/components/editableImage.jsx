import React from 'react';
import path from 'path';
import { imagesUrl } from '../../../util/aws';
import { md5, arrayBufferToBase64, base64ToArrayBuffer } from '../../../util';
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

    let canvas = document.createElement('canvas');
    canvas.width = 280;
    canvas.height = 200;

    let context = canvas.getContext('2d');

    let defaults = {
          ...copiedProps,
          src        : '',
          dataUri    : this.download(this.props.src),
          editing    : false,
          width      : '',
          height     : '',
          canvas,
          context,
          scale      : 1,
          scaleValue : 20,
          xShift     : 0,
          xShiftValue: 50,
          yShift     : 0,
          yShiftValue: 50,
          currentMd5 : '',
          lastMd5    : ''
        }
      ;

    return defaults;
  },

  render () {
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
          src={this.state.src || this.state.dataUri}
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
        <input ref="scale" type="range" min="0" max="100" value={this.state.scaleValue} onChange={this.scale}/>
        <div style={{position: 'relative', zIndex: 1}}>Scale: {Math.floor(this.state.scale)}</div>
        <input ref="xShift" type="range" min="0" max="100" value={this.state.xShiftValue} onChange={this.xShift}/>
        <div style={{position: 'relative', zIndex: 1}}>X: {Math.floor(this.state.xShift)}</div>
        <input ref="yShift" type="range" min="0" max="100" value={this.state.yShiftValue} onChange={this.yShift}/>
        <div style={{position: 'relative', zIndex: 1}}>Y: {Math.floor(this.state.yShift)}</div>
        {/*<canvas
         ref="canvas"
         onClick={this.toggleEditor}
         width={this.state.width}
         height={this.state.height}
         />*/}
        <img
          ref="preview"
          src={this.state.dataUri}
          alt={this.state.altText}
          onClick={this.toggleEditor}
          width={this.state.width}
          height={this.state.height}
        />
        <img
          style={{display: 'none'}}
          ref="original"
          src={this.state.originalDataUri}
        />
      </div>
    )
  },

  scale (e) {
    console.log('value:', e.target.value);
    const scale = (e.target.value * 0.0375) + 0.25;
    console.log('scale:', scale);
    const max = 2;
    const min = 0.5;

    //if (scale >)
    this.setState({
      scale     : scale,
      scaleValue: e.target.value
    }, () => {
      this.renderImage();
    });
  },

  xShift (e) {
    const xShift = (e.target.value * 8) - 400;
    this.setState({xShift, xShiftValue: e.target.value}, () => {
      this.renderImage();
    });
  },

  yShift (e) {
    const yShift = (e.target.value * 8) - 400;
    this.setState({yShift, yShiftValue: e.target.value}, () => {
      this.renderImage();
    });
  },

  renderImage () {
    const { canvas, context, scale, xShift, yShift, width, height } = this.state;

    context.clearRect(0, 0, width, height);
    context.drawImage(this.refs.original, xShift, yShift, scale * width, scale * height, 0, 0, width, height);
    this.setState({dataUri: canvas.toDataURL()})
  },

  toggleEditor (e) {
    const done = () => {
      this.setState({editing: !this.state.editing}, () => {
        if (this.state.editing) {
          this.refs.hrefEditor.focus();
        }
      });
    };

    if (!this.state.editing) {
      //-- switching from static to editor

      e.preventDefault();

      this.setWidth();
      this.setHeight();
      done();
    } else {
      //-- switching from editor to static

      this.awsImageUpload(done);
    }
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
        filename       : file.name,
        dataUri        : e.target.result,
        originalDataUri: e.target.result
      }, this.toggleEditor)
    };

    reader.readAsDataURL(file);
  },

  download (url) {
    let xhr = new XMLHttpRequest;
    let that = this;

    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function (e) {
      let base64Image = arrayBufferToBase64(this.response);

      that.setState({
        filename       : path.basename(url),
        dataUri        : `data:;base64,${base64Image}`,
        originalDataUri: `data:;base64,${base64Image}`
      });
    };

    xhr.send();

    return 'data:;base64,'
  },

  awsImageUpload(callback) {
    const extension = path.extname(this.state.filename) || '.png';
    const imageUrl = `${imagesUrl}/${this.state.altText}${extension}`;
    const currentMd5 = md5(this.base64Image());

    if (currentMd5 === this.state.lastMd5 && imageUrl === this.state.src) return;
    this.setState({lastMd5: currentMd5});

    const xhr = new XMLHttpRequest;
    const data = base64ToArrayBuffer(this.base64Image());
    let contentType;

    switch (extension) {
      case '.jpg':
      case '.jpeg':
        contentType = 'image/jpg';
        break;
      case '.png':
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

    xhr.open('PUT', imageUrl, true);
    xhr.setRequestHeader('content-type', contentType);
    xhr.onload = () => {
      //-- error handling?
      this.setState({src: imageUrl}, callback)
    };

    xhr.send(data);
  },

  base64Image () {
    return this.state.dataUri.replace(/data:(.*?);base64,/, '');
  }
});