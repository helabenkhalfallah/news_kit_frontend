// message manager
import {
  find,
} from 'lodash'

import Messages from './Messages'

// check if key exist
const isKeyExist = key => ((Messages.KEYS && key) ? (key in Messages.KEYS) : false)

// get message object by key
const messageObjectByKey = (key) => {
  const language = process.env.DEFAULT_LANGUAGE
  if (key) {
    const message = find(Messages.DATA, {
      key,
      language,
    })
    return message
  }
  return null
}

// get message by key
const messageByKey = (key) => {
  if (isKeyExist(key)) {
    const {
      value,
    } = messageObjectByKey(key)
    return value || ''
  }
  return ''
}

// get status by key
const statusByKey = (key) => {
  if (isKeyExist(key)) {
    const {
      status,
    } = messageObjectByKey(key)
    return status || ''
  }
  return 500
}

const MesssageProvider = {
  messageByKey,
  statusByKey,
}

export default MesssageProvider
