import React from 'react';

export default React.createClass({
  getInitialState () {
    return {
      text   : this.props.placeholder,
      editing: false,
      width  : '',
      height : '',
      expandWidth: this.props.expandWidth || 0,
      expandHeight: this.props.expandHeight || 10
    }
  },

  render () {
    return this.state.editing ? this.editor() : this.static();
  },

  static () {
    return (
      <span
        ref="text"
        onClick={this.toggleEditor}
        dangerouslySetInnerHTML={{__html:
          this.state.editing ? this.editor() : this.state.text
        }}
      ></span>
    )
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