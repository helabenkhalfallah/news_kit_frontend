// message manager
import { find } from "lodash";
import Messages from "./Messages";

// check if key exist
const isKeyExist = key => (Messages.KEYS && key ? key in Messages.KEYS : false);

// get message object by key
const messageObjectByKey = (key, language) => {
  if (key && language) {
    const messages = Messages.DATA[language];
    return find(messages, key);
  }
  return null;
};

// get message by key and language
const localizedMessage = (key, language) => {
  if (isKeyExist(key)) {
    const { value } = messageObjectByKey(key, language);
    return value || "";
  }
  return "";
};

// messages provider
const MesssagesProvider = {
  localizedMessage
};

export default MesssagesProvider;
