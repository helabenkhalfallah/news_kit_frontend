import ObjectUtils from "../../../commons/utils/ObjectUtils";
import AppSettings from "../../../../app-settings";

// load app theme
const { ThemeManager } = AppSettings;
const { Theme } = ThemeManager;

// icon default values
const defaultIconWidth = "24px";
const defaultIconHeight = "24px";
const defaultBackground = "transparent";
const defaultIntent = "black";
const disableOpacity = "0.4";

// icon backgrounds
const backgrounds = theme => ({
  default: !ObjectUtils.isEmpty(theme) ? theme.iconDefault : Theme.default.iconDefault,
  dark: !ObjectUtils.isEmpty(theme) ? theme.iconDark : Theme.default.iconDark,
  light: !ObjectUtils.isEmpty(theme) ? theme.iconLight : Theme.default.iconLight
}); // prettier-ignore

// icon intents
const intents = theme => ({
  default: !ObjectUtils.isEmpty(theme) ? theme.iconTintBlack : Theme.default.iconTintBlack,
  white: !ObjectUtils.isEmpty(theme) ? theme.iconTintWhite : Theme.default.iconTintWhite,
  primary: !ObjectUtils.isEmpty(theme) ? theme.iconTintPrimary : Theme.default.iconTintPrimary,
  secondary: !ObjectUtils.isEmpty(theme) ? theme.iconTintSecondary : Theme.default.iconTintSecondary,
  success: !ObjectUtils.isEmpty(theme) ? theme.iconTintSuccess : Theme.default.iconTintSuccess,
  warning: !ObjectUtils.isEmpty(theme) ? theme.iconTintWarning : Theme.default.iconTintWarning,
  info: !ObjectUtils.isEmpty(theme) ? theme.iconTintInfo : Theme.default.iconTintInfo,
  danger: !ObjectUtils.isEmpty(theme) ? theme.iconTintDanger : Theme.default.iconTintDanger
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
