import AppSettings from "../../../../app-settings";
import CoreUtils from "../../../core-utils";

// object utils
const { ObjectUtils } = CoreUtils;
const { isEmpty } = ObjectUtils;

// load app theme
const { ThemeManager } = AppSettings;
const { Themes } = ThemeManager;

// icon default values
const defaultIconWidth = "24px";
const defaultIconHeight = "24px";
const defaultBackground = "transparent";
const defaultIntent = "black";
const disableOpacity = "0.4";

// icon backgrounds
const backgrounds = theme => ({
  default: !isEmpty(theme) ? theme.iconDefault : Themes.default.iconDefault,
  dark: !isEmpty(theme) ? theme.iconDark : Themes.default.iconDark,
  light: !isEmpty(theme) ? theme.iconLight : Themes.default.iconLight
}); // prettier-ignore

// icon intents
const intents = theme => ({
  default: !isEmpty(theme) ? theme.iconTintBlack : Themes.default.iconTintBlack,
  white: !isEmpty(theme) ? theme.iconTintWhite : Themes.default.iconTintWhite,
  primary: !isEmpty(theme) ? theme.iconTintPrimary : Themes.default.iconTintPrimary,
  secondary: !isEmpty(theme) ? theme.iconTintSecondary : Themes.default.iconTintSecondary,
  success: !isEmpty(theme) ? theme.iconTintSuccess : Themes.default.iconTintSuccess,
  warning: !isEmpty(theme) ? theme.iconTintWarning : Themes.default.iconTintWarning,
  info: !isEmpty(theme) ? theme.iconTintInfo : Themes.default.iconTintInfo,
  danger: !isEmpty(theme) ? theme.iconTintDanger : Themes.default.iconTintDanger
}); // prettier-ignore

// icons width (size option) => CSS size value
const iconWSizes = {
  xxsmall: "18px",
  xsmall: "20px",
  small: "22px",
  normal: "26px",
  large: "28px",
  xlarge: "34px",
  xxlarge: "40px"
};

// icons height (size option) => CSS size value
const iconHSizes = {
  xxsmall: "18px",
  xsmall: "20px",
  small: "22px",
  normal: "26px",
  large: "28px",
  xlarge: "34px",
  xxlarge: "40px"
};

// icon theme
const IconTheme = {
  defaultIconWidth,
  defaultIconHeight,
  defaultBackground,
  defaultIntent,
  disableOpacity,
  backgrounds,
  intents,
  iconWSizes,
  iconHSizes
};

export default IconTheme;
