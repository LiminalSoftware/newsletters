import React from 'react';
import EditableText from './editableText.jsx';

export default React.createClass({
  getInitialState() {
    let date = new Date()
      ;

    return {
      date: `${date.getDate()}/${date.getMonth() + 1}`
    }
  },

  render () {
    return (
      <div id="title-container">
        <EditableText
          placeholder="trend"
          expandWidth={10}
        /><span className="highlight-text">
        <EditableText
          placeholder="flash"
          expandWidth={10}
        />
      </span> <EditableText
        placeholder={this.state.date}
        expandWidth={10}
      />
      </div>
    )
  }
})