// array utils
import {
  find as findItem,
  isNull,
  isEmpty,
  isArray as checkIfArray
} from "lodash"; // prettier-ignore

/**
 * Check if the given argument
 * is an array.
 * An argument is considered an array
 * if : is not null, it is an array type
 * and it is lenght is > 0.
 * @param {*} array
 */
const isArray = array => {
  if (!isNull(array) && checkIfArray(array) && !isEmpty(array)) return true;
  return false;
};

/**
 * Iterates over elements of collection,
 * returning the first element predicate returns truthy for.
 * Returns the matched element, else undefined.
 * @param {*} array
 * @param {*} predicat
 */
const find = (array, predicat) => findItem(array, predicat);

const ArrayUtils = {
  isArray,
  find
};

export default ArrayUtils;
