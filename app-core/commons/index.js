import withApollo from "./apollo/withApollo";
import initApollo from "./apollo/initApollo";
import CookiesManager from "./cookies/CookiesManager";
import Redirect from "./routes/Redirect";
import ObjectUtils from "./utils/ObjectUtils";
import AppLogger from "./logger/AppLogger";

const AppCommons = {
  withApollo,
  initApollo,
  CookiesManager,
  Redirect,
  ObjectUtils,
  AppLogger
};

export default AppCommons;
