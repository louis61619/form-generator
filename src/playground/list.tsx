// import * as baseComps from '../materials';
import { CompInfoType } from '../types/schema';

const sort = ['input', 'textarea', 'number', 'radio', 'checkbox', 'select', 'text'];

const list: CompInfoType[] = [];

const context = require.context('../materials', true, /index\.tsx?$/);
context.keys().forEach((file) => {
  const { compInfo } = context(file);
  list.push(compInfo);
});

list.sort((a, b) => sort.indexOf(a.type) - sort.indexOf(b.type));

export { list };
