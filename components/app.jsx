import React from 'react';
import { connect } from 'react-redux';
import StickyHeader from './stickyHeader';
import DefaultTemplate from '../templates/default';
import EventIslandTemplate from '../templates/EventIsland';

let App = ({ selectedTemplate }) => {
  let SelectedTemplateComponent;

  switch (selectedTemplate.name) {
    case ('EventIslandTemplate'):
      SelectedTemplateComponent = (
        <div>
          <StickyHeader rootSelector="#content-container"/>
          <EventIslandTemplate />
        </div>
      );
      break;
    case ('DefaultTemplate'):
    default:
      SelectedTemplateComponent = (
        <div>
          <StickyHeader rootSelector="#content-container"/>
          <DefaultTemplate />
        </div>
      )
  }

  return SelectedTemplateComponent
};

App = connect(({ stickyHeader: { selectedTemplate } }) => {
  return { selectedTemplate };
})(App);

export default App;
