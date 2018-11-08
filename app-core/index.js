// commons
import withApollo from "./core-commons/apollo/withApollo";
import initApollo from "./core-commons/apollo/initApollo";
import CookiesManager from "./core-commons/cookies/CookiesManager";
import Redirect from "./core-commons/routes/Redirect";
import AppLogger from "./core-commons/logger/AppLogger";
import LanguageManager from "./core-commons/language/LanguageManager";
import ThemeManager from "./core-commons/theme/ThemeManager";

// utils
import LocalizedStringUtils from "./core-commons/localized-strings/LocalizedStringUtils";
import { isObjectEmpty, isObject } from "./core-utils/object/ObjectUtils";
import { isArray, find } from "./core-utils/array/ArrayUtils";
import StringUtils from "./core-utils/string/StringUtils";

// ui kit
import OptionalSelect from "./core-ui-api/ui-api-commons/OptionalSelect";
import ButtonOptions from "./core-ui-api/ui-api-components/button/ButtonOptions";
import ButtonIconOptions from "./core-ui-api/ui-api-components/buttonicon/ButtonIconOptions";
import IconOptions from "./core-ui-api/ui-api-components/icon/IconOptions";
import {
  SIDE_MENU_OPEN,
  SIDE_MENU_CLOSE
} from "./core-ui-api/ui-api-commons/SideMenuStatut";
import Button from "./core-ui-api/ui-api-components/button/Button";
import ButtonIcon from "./core-ui-api/ui-api-components/buttonicon/ButtonIcon";
import Icon from "./core-ui-api/ui-api-components/icon/Icon";
import Select from "./core-ui-api/ui-api-components/select/Select";

// ui kit messages
import Empty from "./core-ui-api/ui-api-messages/Empty";
import Error from "./core-ui-api/ui-api-messages/Error";
import NotFound from "./core-ui-api/ui-api-messages/NotFound";
import Loading from "./core-ui-api/ui-api-messages/Loading";

// core modules
export {
  Empty,
  Error,
  NotFound,
  Loading,
  ButtonOptions,
  ButtonIconOptions,
  IconOptions,
  SIDE_MENU_OPEN,
  SIDE_MENU_CLOSE,
  OptionalSelect,
  Button,
  ButtonIcon,
  Icon,
  Select,
  isArray,
  find,
  isObjectEmpty,
  isObject,
  StringUtils,
  LocalizedStringUtils,
  LanguageManager,
  ThemeManager,
  withApollo,
  initApollo,
  CookiesManager,
  Redirect,
  AppLogger
};
