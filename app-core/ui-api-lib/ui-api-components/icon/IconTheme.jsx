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
  default: theme ? theme.iconDefault : Theme.default.iconDefault,
  dark: theme ? theme.iconDark : Theme.default.iconDark,
  light: theme ? theme.iconLight : Theme.default.iconLight
});

// icon intents
const intents = theme => ({
  default: theme ? theme.iconTintBlack : Theme.default.iconTintBlack,
  white: theme ? theme.iconTintWhite : Theme.default.iconTintWhite,
  primary: theme ? theme.iconTintPrimary : Theme.default.iconTintPrimary,
  secondary: theme ? theme.iconTintSecondary : Theme.default.iconTintSecondary,
  success: theme ? theme.iconTintSuccess : Theme.default.iconTintSuccess,
  warning: theme ? theme.iconTintWarning : Theme.default.iconTintWarning,
  info: theme ? theme.iconTintInfo : Theme.default.iconTintInfo,
  danger: theme ? theme.iconTintDanger : Theme.default.iconTintDanger
});

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
