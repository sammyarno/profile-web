/* eslint-disable */

export const getInitialCharacters = (text = '') => {
  const matches = text.match(/\b(\w)/g);
  return matches.join('');
};
