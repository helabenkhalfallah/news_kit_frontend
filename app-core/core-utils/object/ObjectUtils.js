// Object Utils

/**
 * An object is considered empty if
 * it is null or has not at keys
 * @param {*} object
 */
const isObjectEmpty = object => !object || Object.keys(object).length === 0;

/**
 * An argument is considered an object if
 * isn't null and has at
 * least one key (keys.length != 0)
 * @param {*} object
 */
const isObject = object => {
  if (!isObjectEmpty(object)) {
    return true;
  }
  return false;
};

// Object Utils
export { isObjectEmpty, isObject };
