const LOCAL_STORAGE_KEY = 'liminal.newsletters.saves';
const defaultSaves = {...JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))};

const saves = (saves = defaultSaves, action = {}) => {
  switch (action.type) {
    case 'SAVE_STATE':
      const updatedSaves = {
        ...saves,
        [action.name]: action.name
      };

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedSaves));
      return updatedSaves;
    default:
      return saves;
  }
};

export default saves;
