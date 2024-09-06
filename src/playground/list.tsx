import * as baseComps from '../materials';
import { CompInfoType } from '../types/schema';

const baseCompsList: CompInfoType[] = Object.keys(baseComps).map((key) => {
  const comps = baseComps as any;
  return comps[key];
});

export const list = [...baseCompsList];
