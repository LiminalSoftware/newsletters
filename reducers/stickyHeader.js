import defaultTemplate from './defaultTemplate';

const LOCAL_STORAGE_KEY = 'liminal.newsletters';

const stickyHeader = (state = {}, action) => {
  //debugger;
  switch(action.type) {
    case 'SAVE_STATE':
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
      return {...state, defaultTemplate: defaultTemplate(state.defaultTemplate, action)};
    case 'LOAD_STATE':
      const parsedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      return {...state, defaultTemplate: defaultTemplate(parsedState.defaultTemplate, action)};
    default:
      return {...state, defaultTemplate: defaultTemplate(state.defaultTemplate, action)};
  }
};

export default stickyHeader;