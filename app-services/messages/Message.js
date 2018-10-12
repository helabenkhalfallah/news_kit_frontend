/**
 * Message Class
 * Message to display for sucess and fail
 * status
 */
class Message {
  /**
   * Message from attributes
   * @param {*} key
   * @param {*} value
   * @param {*} language
   * @param {*} status
   */
  constructor(key, value, language, status) {
    this.key = key
    this.value = value
    this.language = language
    this.status = status
  }

  /**
   * get Message key
   */
  get key() {
    return this.key
  }

  /**
   * set Message key
   * @param {*} key
   */
  set key(key) {
    this.key = key
  }

  /**
   * get Message value
   */
  get value() {
    return this.value
  }

  /**
   * set Message value
   * @param {*} value
   */
  set value(value) {
    this.value = value
  }

  /**
   * get Message language
   */
  get language() {
    return this.language
  }

  /**
  * set Message language
  * @param {*} language
  */
  set language(language) {
    this.language = language
  }

  /**
   * get Message status
   */
  get status() {
    return this.status
  }

  /**
  * set Message status
  * @param {*} status
  */
  set status(status) {
    this.status = status
  }

  /**
   * convert Message to string
   * @return {String} Message toString()
   */
  toString() {
    return `(
      key : ${this.key}, 
      value : ${this.value} , 
      language : ${this.language},
      status : ${this.status}
    )`
  }
}

export default Message
