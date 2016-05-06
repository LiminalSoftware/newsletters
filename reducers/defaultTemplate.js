import links from './links';
import texts from './texts';

const defaults = {
  links: links(),
  texts: texts()
};

const defaultTemplate = (state = defaults, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      console.log('UDATE_TEXT');
      return {
        ...state,
        texts: texts(state.texts, action)
      };
      break;
    case 'UPDATE_LINK':
      console.log('UDATE_LINK');
      return {
        ...state,
        links: links(state.links, action)
      };
      break;
    default:
      return {...state};
  }
};

export default defaultTemplate;