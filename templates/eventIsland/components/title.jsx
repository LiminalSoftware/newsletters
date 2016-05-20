import React from 'react';
import { connect } from 'react-redux';
import EditableText from './editableText.jsx';

let Title = React.createClass({
  render () {
    return (
      <div id="title-container">
        <EditableText
          {...this.props.titlePart1}
          markdown="false"
          expandWidth={10}
        /><span className="highlight-text">
        <EditableText
          {...this.props.titlePart2}
          markdown="false"
          expandWidth={10}
        />
      </span> <EditableText
        {...this.props.titleDate}
        markdown="false"
        expandWidth={10}
      />
      </div>
    )
  }
});

Title = connect(
  ({ stickyHeader: { defaultTemplate: { texts } } }) => {
    return texts;
  }
)(Title);

export default Title;