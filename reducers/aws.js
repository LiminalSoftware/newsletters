import { parseList, bucketUrl, listUrl } from '../util/aws'

let defaultState = {};

let xhr = new XMLHttpRequest;
xhr.open('GET', listUrl);
xhr.onload = () => {
  const images = parseList(xhr.response);

  Object.assign(defaultState, {
    images
  });
};
xhr.send();

const aws = (state = defaultState, action = {}) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default aws;
