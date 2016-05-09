import defaultTemplate from './defaultTemplate';
import saves from './saves';

const LOCAL_STORAGE_KEY = 'liminal.newsletters';

const parseStored = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
};

const stickyHeader = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_STATE':
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
        ...parseStored(),
        [action.name]: state.defaultTemplate
      }));
      return {
        ...state,
        saves: saves(state.saves, action)
      };
    case 'LOAD_STATE':
      const parsedState = parseStored()[action.name];
      return {
        ...state,
        defaultTemplate: defaultTemplate(parsedState, action)
      };
    default:
      return {
        ...state,
        saves          : saves(state.saves, action),
        defaultTemplate: defaultTemplate(state.defaultTemplate, action)
      };
  }
};

export default stickyHeader;