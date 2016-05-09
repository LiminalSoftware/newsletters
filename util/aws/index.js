import { stringify as qs } from 'querystring';
import parseList from './parseList';

export { parseList };

export const bucketUrl = 'http://hosted.liminal.software.s3.amazonaws.com';
export const imagesPrefix = 'beeftea/newsletters/img';
export const listUrl = `${bucketUrl}/?${qs({
  ['list-type']: 2,
  prefix: `${imagesPrefix}/`
})}`;
export const imagesUrl = `${bucketUrl}/${imagesPrefix}`;

