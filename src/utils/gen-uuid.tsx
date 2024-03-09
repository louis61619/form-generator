export const genUUID = (type: string) => {
  return type + '_' + new Date().valueOf();
};
