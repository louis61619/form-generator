import { View } from './view';
import { CompInfoType } from '../../type';
import { Config } from './config';
import { CompProps } from './type';

export const compInfo: CompInfoType<CompProps> = {
  type: 'textarea',
  name: 'textarea',
  group: 'form',
  view: View,
  config: Config,
  desp: `
      這是一個多行文本輸入框組件，用於輸入多行文本。
      參數介紹如下：
      placeholder 提示文字
      rows 行數
  `,
};
