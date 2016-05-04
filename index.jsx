import React from 'react';
import ReactDOM from 'react-dom';
import StickyHeader from './components/stickyHeader.jsx';
import Default from './templates/default/index.jsx';

export class App extends React.Component {
  render() {
    return (
      <div>
        <StickyHeader rootSelector="#content-container"/>
        <Default />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#editor"));
