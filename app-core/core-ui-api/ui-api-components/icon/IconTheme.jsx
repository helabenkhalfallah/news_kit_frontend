import { isObjectEmpty, ThemeManager } from "../../..";

// load app theme
const { Themes } = ThemeManager;

// icon default values
const defaultIconWidth = "24px";
const defaultIconHeight = "24px";
const defaultBackground = "transparent";
const defaultIntent = "black";
const disableOpacity = "0.4";

// icon backgrounds
const backgrounds = theme => ({
  default: !isObjectEmpty(theme) ? theme.iconDefault : Themes.default.iconDefault,
  dark: !isObjectEmpty(theme) ? theme.iconDark : Themes.default.iconDark,
  light: !isObjectEmpty(theme) ? theme.iconLight : Themes.default.iconLight
}); // prettier-ignore

// icon intents
const intents = theme => ({
  default: !isObjectEmpty(theme) ? theme.iconTintBlack : Themes.default.iconTintBlack,
  white: !isObjectEmpty(theme) ? theme.iconTintWhite : Themes.default.iconTintWhite,
  primary: !isObjectEmpty(theme) ? theme.iconTintPrimary : Themes.default.iconTintPrimary,
  secondary: !isObjectEmpty(theme) ? theme.iconTintSecondary : Themes.default.iconTintSecondary,
  success: !isObjectEmpty(theme) ? theme.iconTintSuccess : Themes.default.iconTintSuccess,
  warning: !isObjectEmpty(theme) ? theme.iconTintWarning : Themes.default.iconTintWarning,
  info: !isObjectEmpty(theme) ? theme.iconTintInfo : Themes.default.iconTintInfo,
  danger: !isObjectEmpty(theme) ? theme.iconTintDanger : Themes.default.iconTintDanger
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
export {
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
