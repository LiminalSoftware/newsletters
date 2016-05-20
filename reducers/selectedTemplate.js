import templateOptions from './templateOptions';

const defaultTemplate = templateOptions[ 0 ];

const selectedTemplate = (state = defaultTemplate, action = {}) => {
  switch (action.type) {
    case 'CHANGE_TEMPLATE':
      const nextTemplate = templateOptions.filter(option => {
        return option.name === action.templateName
      })[ 0 ];

      return nextTemplate || defaultTemplate;
    default:
      return state;
  }
};

export default selectedTemplate;