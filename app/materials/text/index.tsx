import { View } from './view';
import { CompInfoType } from '../../type';
import { Config } from './config';
import { CompProps } from './type';

export const compInfo: CompInfoType<CompProps> = {
  type: 'text',
  name: 'text',
  group: 'form',
  view: View,
  config: Config,
  desp: `
      這是一個單行文本組件，用於展示文字。
      參數介紹如下：
      content 文本內容
  `,
};
