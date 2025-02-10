// import * as baseComps from '../materials';
import { CompInfoType } from '../type';

const sort = ['input', 'textarea', 'number', 'radio', 'checkbox', 'select', 'text'];

const list: CompInfoType[] = [];

const context = require.context('./', true, /index\.tsx?$/);
context.keys().forEach((file) => {
  const { compInfo } = context(file);
  if (compInfo) {
    list.push(compInfo);
  }
});

list.sort((a, b) => sort.indexOf(a.type) - sort.indexOf(b.type));

export { list };
