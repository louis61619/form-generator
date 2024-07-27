// layout is not support with use react beautiful dnd
// import * as layout from '../layout';
import * as baseComps from '../base';
import { CompConfigType } from '../types/schema';

const baseCompsList: CompConfigType[] = Object.keys(baseComps).map((key) => {
  const comps = baseComps as any;
  return comps[key];
});

export const list = [...baseCompsList];
