const defaultLinksState = {
  onlineVersion: {
    id  : 'online-version',
    text: 'Online-Version'
  },
  titleLink1   : {
    id  : 'title-link-1',
    text: 'I\'m a title link, click me to edit'
  },
  titleLink2   : {
    id  : 'title-link-2',
    text: 'While editing me, you can click the \'test\' button to test your link',
    href: 'http://www.google.com'
  },
  titleLink3   : {
    id  : 'title-link-3',
    text: 'How to use images!'
  },
  unsubscribe  : {
    id  : 'unsubscribe-link',
    text: 'heir ab'
  },
};

const getLink = (links, id) => {
  const linkKey = Object.keys(links).find(
    key => {
      return id === links[key].id;
    }
  );
  const link = links[linkKey];

  return {link, linkKey};
};

const updateLink = (links, { id, text, href }) => {
  const { link, linkKey } = getLink(links, id);
  
  text = typeof(text) === 'undefined' ? link.text : text;
  href = typeof(href) === 'undefined' ? link.href : href;
  
  const updatedLink = {...link, text, href};

  return {...links, [linkKey]: updatedLink};
};

const links = (links = defaultLinksState, action) => {
  switch (action.type) {
    case 'UPDATE_LINK':
      return updateLink(links, action);
    default:
      return links;
  }
};

export default links;
