import links from './links';

const defaultTemplate = (state, action) => {
  return {
    links: links(state, action)
  };
};

export default defaultTemplate;