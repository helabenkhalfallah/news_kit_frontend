// localized string utils
import {
  find,
  isObject,
  isNull,
  isEmpty,
  isArray
} from "lodash"; // prettier-ignore

import Dico from "./Dico";

// check if key exist
const isKeyExist = key => (Dico.KEYS && key ? key in Dico.KEYS : false);

// get localized string by key and language
const localizedString = (key, language) => {
  if (isKeyExist(key) && !isEmpty(language)) {
    const localizedValues = Dico.DATA[language.key];
    let localizedValue = null;
    if (
      !isNull(localizedValues) &&
      isArray(localizedValues) &&
      !isEmpty(localizedValues)
    ) {
      localizedValue = find(localizedValues, { key });
    }
    if (
      !isNull(localizedValue) &&
      isObject(localizedValue) &&
      !isEmpty(localizedValue)
    ) {
      return localizedValue.value;
    }
  }
  return key;
};

// dico utils
const LocalizedStringUtils = {
  localizedString
};

export default LocalizedStringUtils;
