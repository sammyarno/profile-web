export const getInitialCharacters = (text = '') => {
  const matches = text.match(/\b(\w)/g);
  return matches.join('');
};

export const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, '');

export const addSeparator = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export const sumAll = (arr = []) => (Array.isArray(arr) ? arr.reduce((a, b) => Number(a) + Number(b), 0) : 0);

export const normalizePercentageInput = (val) => (val.includes('%') ? val.replaceAll(',', '.') : val);

export const trimEmptyArray = (array) => {
  const temp = array;

  return temp.filter((item) => {
    let isValid = true;

    Object.keys(item)
      .filter((x) => x !== 'id')
      .map((key) => {
        if (!item[key]) isValid = false;
        return key;
      });

    return isValid;
  });
};
