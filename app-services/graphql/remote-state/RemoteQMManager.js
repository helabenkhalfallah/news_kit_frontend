/**
 * RemoteQMManager : remote Queries & Mutations manager
 */
import USERS_LIST from "./queries/USERS_LIST";
import USER_SIGN_IN from "./mutations/USER_SIGN_IN";
import USER_IS_VALID from "./queries/USER_IS_VALID";

const RemoteQMManager = {
  USERS_LIST,
  USER_SIGN_IN,
  USER_IS_VALID
};

export default RemoteQMManager;
