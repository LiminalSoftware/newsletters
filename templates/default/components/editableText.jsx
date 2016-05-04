import React from 'react';
import marked from 'marked';

export default React.createClass({
  getInitialState () {
    return {
      text        : this.props.text || '',
      editing     : false,
      width       : '',
      height      : '',
      expandWidth : Number(this.props.expandWidth) || 0,
      expandHeight: Number(this.props.expandHeight) || 10,
      markdown    : this.props.markdown === 'false' ? false : true
    }
  },

  render () {
    return this.state.editing ? this.editor() : this.static();
  },

  static () {
    if (this.state.markdown || this.state.editing) {
      return (
        <div
          ref="text"
          onClick={this.toggleEditor}
          dangerouslySetInnerHTML={{__html:
            this.state.editing ? this.editor() : marked(this.state.text)
          }}
        ></div>
      )
    } else {
      return ( <span
          ref="text"
          onClick={this.toggleEditor}
        >
          {this.state.text}
        </span>
      )
    }
  },

  editor () {
    return (
      <textarea
        ref="editor"
        style={{
            width: `${this.state.width + this.state.expandWidth}px`,
            height: `${this.state.height + this.state.expandHeight}px`,
            color: 'rgb(0, 0, 0)'
          }}
        value={this.state.text}
        onChange={this.handleEdit}
        onBlur={this.toggleEditor}
      />
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
        this.refs.editor.focus();
      }
    });
  },

  handleEdit (e) {
    this.setState({text: e.target.value});
  },

  setWidth () {
    this.setState({width: this.refs.text.offsetWidth});
  },

  setHeight () {
    this.setState({height: this.refs.text.offsetHeight});
  }
});