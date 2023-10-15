const isEmpltyOrNullOrUndefined = (key) => key === '' || key === null || key === undefined;

export const setStorage = (key, value) => {
  if (isEmpltyOrNullOrUndefined(key)) return;
  const array = getFromStorage(key);
  if (array) {
    array.push(value);
    window.localStorage.setItem(key, JSON.stringify(array));
    return;
  }
  window.localStorage.setItem(key, JSON.stringify([value]));
};

export const getFromStorage = (key) => {
  if (isEmpltyOrNullOrUndefined(key)) return null;
  return JSON.parse(window.localStorage.getItem(key));
};
