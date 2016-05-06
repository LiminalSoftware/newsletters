import links from './links';

const defaultTemplate = (state, action) => {
  switch (action.type) {
    case 'UPDATE_LINK':
      return {
        links: links(state.links, action)
      };
      break;
    default:
      return {
        links: links(state, action)
      };
  }
};

export default defaultTemplate;