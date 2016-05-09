
import { getJXONTree } from '../';

const parseList = (listXml) => {
  const parser = new DOMParser();
  const xmlDocument = parser.parseFromString(listXml, "application/xml");

  let listJson = getJXONTree(xmlDocument).listbucketresult;
  let contents = listJson.contents instanceof(Array) ?
    listJson.contents : [listJson.contents];

  const prefix = listJson.prefix;
  const result = contents.reduce((previous, current) => {
    let next = previous;
    const key = current.key.replace(prefix, '');

    if (key) {
      next = Object.assign(previous, {
        [key]: current
      });
    }

    return next;
  }, {});

  return result;
};

export default parseList;