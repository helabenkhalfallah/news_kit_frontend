/**
 * LocalizedString Class
 * String to be displayed
 * By key and current language
 */
class LocalizedString {
  /**
   * LocalizedString from attributes
   * @param {*} key
   * @param {*} value
   * @param {*} language
   */
  constructor(key, value, language) {
    this.key = key;
    this.language = language;
    this.value = value;
  }

  /**
   * get LocalizedString key
   */
  get key() {
    return this.key;
  }

  /**
   * set LocalizedString key
   * @param {*} key
   */
  set key(key) {
    this.key = key;
  }

  /**
   * get LocalizedString value
   */
  get value() {
    return this.value;
  }

  /**
   * set LocalizedString value
   * @param {*} value
   */
  set value(value) {
    this.value = value;
  }

  /**
   * get LocalizedString language
   */
  get language() {
    return this.language;
  }

  /**
   * set LocalizedString language
   * @param {*} language
   */
  set language(language) {
    this.language = language;
  }

  /**
   * convert LocalizedString to string
   * @return {String} LocalizedString toString()
   */
  toString() {
    return `(
      key : ${this.key}, 
      language : ${this.language},
      value : ${this.value}
    )`;
  }
}

export default LocalizedString;
