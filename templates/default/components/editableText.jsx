import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

let EditableText = React.createClass({
  getInitialState () {
    return {
      editing     : false,
      width       : '',
      height      : '',
      expandWidth : Number(this.props.expandWidth) || 0,
      expandHeight: Number(this.props.expandHeight) || 10,
      markdown    : this.props.markdown === 'false' ? false : true,
      className   : this.props.className
    }
  },

  componentDidMount () {
    this.setWidth();
    this.setHeight();
  },

  render () {
    return this.state.editing ? this.editor() : this.static();
  },

  static () {
    if (this.state.markdown || this.state.editing) {
      return (
        <div
          className={this.state.className}
          ref="text"
          onClick={this.toggleEditor}
          dangerouslySetInnerHTML={{__html:
            this.state.editing ? this.editor() : marked(this.props.text)
          }}
        ></div>
      )
    } else {
      return ( <span
          className={this.state.className}
          ref="text"
          onClick={this.toggleEditor}
        >
          {this.props.text}
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
        value={this.props.text}
        onChange={this.handleEdit}
        onBlur={this.toggleEditor}
      />
    )
  },

  toggleEditor (e) {
    if (!this.state.editing) {
      e.preventDefault();
    }

    this.setState({editing: !this.state.editing}, () => {
      if (this.state.editing) {
        this.refs.editor.focus();
      }
    });
  },

  handleEdit (e) {
    this.props.dispatch({
      type: 'UPDATE_TEXT',
      id  : this.props.id,
      text: e.target.value
    })
  },

  setWidth () {
    this.setState({width: this.refs.text.offsetWidth});
  },

  setHeight () {
    this.setState({height: this.refs.text.offsetHeight});
  }
});

EditableText = connect()(EditableText);

export default EditableText;
