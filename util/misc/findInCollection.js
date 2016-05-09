const findInCollection = (collection, id) => {
  const key = Object.keys(collection).find(
    k => {
      return id === collection[k].id;
    }
  );
  const item = collection[key];

  return {item, key};
};

export default findInCollection;