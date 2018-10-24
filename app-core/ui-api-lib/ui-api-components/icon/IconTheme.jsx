import Theme from "../Theme";

// icon default values
const defaultIconWidth = "24px";
const defaultIconHeight = "24px";
const defaultBackground = "transparent";
const defaultTint = "black";
const disableOpacity = "0.4";

// icon backgrounds
const backgrounds = {
  default: "transparent",
  black: "black",
  primary: Theme.primary,
  secondary: Theme.secondary,
  success: Theme.success,
  warning: Theme.warning,
  info: Theme.info,
  danger: Theme.danger
};

// icon tints
const tints = {
  default: "black",
  white: "white",
  primary: Theme.primary,
  secondary: Theme.secondary,
  success: Theme.success,
  warning: Theme.warning,
  info: Theme.info,
  danger: Theme.danger
};

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
  defaultTint,
  disableOpacity,
  backgrounds,
  tints,
  iconWSizes,
  iconHSizes
};

export default IconTheme;
