// commons
import withApollo from "./core-commons/apollo/withApollo";
import initApollo from "./core-commons/apollo/initApollo";
import CookiesManager from "./core-commons/cookies/CookiesManager";
import Redirect from "./core-commons/routes/Redirect";
import AppLogger from "./core-commons/logger/AppLogger";

// utils
import ObjectUtils from "./core-utils/object/ObjectUtils";
import ArrayUtils from "./core-utils/array/ArrayUtils";
import StringUtils from "./core-utils/string/StringUtils";

// ui kit
import OptionalSelect from "./core-ui-api/ui-api-utils/OptionalSelect";
import ButtonOptions from "./core-ui-api/ui-api-components/button/ButtonOptions";
import ButtonIconOptions from "./core-ui-api/ui-api-components/buttonicon/ButtonIconOptions";
import IconOptions from "./core-ui-api/ui-api-components/icon/IconOptions";
import {
  SIDE_MENU_OPEN,
  SIDE_MENU_CLOSE
} from "./core-ui-api/ui-api-utils/SideMenuStatut";
import Button from "./core-ui-api/ui-api-components/button/Button";
import ButtonIcon from "./core-ui-api/ui-api-components/buttonicon/ButtonIcon";
import Icon from "./core-ui-api/ui-api-components/icon/Icon";
import Select from "./core-ui-api/ui-api-components/select/Select";

// core modules
export {
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
  ArrayUtils,
  ObjectUtils,
  StringUtils,
  withApollo,
  initApollo,
  CookiesManager,
  Redirect,
  AppLogger
};
