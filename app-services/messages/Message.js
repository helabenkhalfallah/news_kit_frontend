/**
 * Message Class
 * Message to be displayed
 * By key and current language
 */
class Message {
  /**
   * Message from attributes
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
   * get Message key
   */
  get key() {
    return this.key;
  }

  /**
   * set Message key
   * @param {*} key
   */
  set key(key) {
    this.key = key;
  }

  /**
   * get Message value
   */
  get value() {
    return this.value;
  }

  /**
   * set Message value
   * @param {*} value
   */
  set value(value) {
    this.value = value;
  }

  /**
   * get Message language
   */
  get language() {
    return this.language;
  }

  /**
   * set Message language
   * @param {*} language
   */
  set language(language) {
    this.language = language;
  }

  /**
   * convert Message to string
   * @return {String} Message toString()
   */
  toString() {
    return `(
      key : ${this.key}, 
      language : ${this.language},
      value : ${this.value}
    )`;
  }
}

export default Message;
