import React from 'react';
import { connect } from 'react-redux';

const EditableLink = React.createClass({
  getInitialState () {
    return {
      text        : this.props.text || 'link text here...',
      href        : this.props.href || '',
      editing     : false,
      width       : '',
      height      : '',
      expandWidth : Number(this.props.expandWidth) || 0,
      expandHeight: Number(this.props.expandHeight) || 10
    }
  },

  render () {
    return this.state.editing ? this.editor() : this.static();
  },

  static () {
    return (
      <a
        id={this.props.id}
        className={`highlight-text ${this.props.className}`}
        href={this.props.href || '#'}
        ref="text"
        onClick={this.toggleEditor}
      >
        {this.state.editing ? this.editor() : this.props.text}
      </a>
    )
  },

  editor () {
    return (
      <div
        style={{
            width: `${this.state.width + this.state.expandWidth}px`,
            height: `${(this.state.height + this.state.expandHeight) * 2}px`,
            color: 'rgb(0, 0, 0)'
          }}
      >
        <input type="text"
               ref="textEditor"
               placeholder="Link text here..."
               style={{
                 color: 'rgb(0, 0, 0)',
                 width: '100%'
               }}
               value={this.props.text}
               onChange={this.handleEdit('text')}
        />
        <input type="text"
               ref="hrefEditor"
               placeholder="Link URL here..."
               style={{color: 'rgb(0, 0, 0)'}}
               style={{
                 color: 'rgb(0, 0, 0)',
                 width: '100%'
               }}
               value={this.props.href}
               onChange={this.handleEdit('href')}
        />
        <button onClick={this.toggleEditor}>apply</button>
        <button onClick={this.test}>test</button>
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
        this.refs.textEditor.focus();
      }
    });
  },

  handleEdit (field) {
    return (e) => {
      this.props.dispatch({
        type   : 'UPDATE_LINK',
        id     : this.props.id,
        [field]: e.target.value
      })
    }
  },

  setWidth () {
    this.setState({width: this.refs.text.offsetWidth});
  },

  setHeight () {
    this.setState({height: this.refs.text.offsetHeight});
  },

  test () {
    window.open(this.props.href, '__blank')
  }
});

export default EditableLink;