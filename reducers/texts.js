import { findInCollection } from '../util'

const defaultTextState = {
  greeting: {
    id  : 'greeting-text',
    text: 'Hallo Grunszky'
  },
  intro   : {
    id  : 'intro-text',
    text: require('../templates/default/tutorial/intro.md')
  },
  tag1    : {
    id  : 'tag-1-text',
    text: 'click to edit'
  },
  tag2    : {
    id  : 'tag-2-text',
    text: 'click to edit'
  },
  tag3    : {
    id  : 'tag-3-text',
    text: 'click to edit'
  },
  entry1: {
    id  : 'entry-1',
    text: require('../templates/default/tutorial/entry1.md')
  },
  entry2: {
    id: 'entry-2',
    text: require('../templates/default/tutorial/entry2.md')
  },
  entry3: {
    id  : 'entry-3',
    text: require('../templates/default/tutorial/entry3.md')
  }
};

const updateText = (texts, { id, text }) => {
  const { item: textObject, key: textKey } = findInCollection(texts, id);

  text = typeof(text) === 'undefined' ? textObject.text : text;

  const updatedText = {...textObject, text};

  return {...texts, [textKey]: updatedText};
};

const texts = (texts = defaultTextState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return updateText(texts, action);
    default:
      return texts;
  }
};

export default texts;