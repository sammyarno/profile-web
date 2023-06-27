/* eslint-disable */

export const getInitialCharacters = (text = '') => {
  const matches = text.match(/\b(\w)/g);
  return matches.join('');
};

export const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, '');

export const addSeparator = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
