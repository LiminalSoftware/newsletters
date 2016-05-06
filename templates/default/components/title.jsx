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
          text="trend"
          markdown="false"
          expandWidth={10}
        /><span className="highlight-text">
        <EditableText
          text="flash"
          markdown="false"
          expandWidth={10}
        />
      </span> <EditableText
        text={this.state.date}
        markdown="false"
        expandWidth={10}
      />
      </div>
    )
  }
})