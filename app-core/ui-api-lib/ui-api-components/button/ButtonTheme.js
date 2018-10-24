// button design system
const shadow = "none";
const shadowHover = "none";
const paddingTop = "2px";
const paddingBottom = "2px";
const paddingLeft = "5px";
const paddingRight = "5px";
const defaultPadding = `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`;
const defaultRadius = "2px";
const defaultBorderWidth = "2px";
const defaultFontSize = "normal";
const defaultBgColor = "white";
const defaulBorderColor = "transparent";
const defaulTxtColor = "white";
const defaulTxtTransform = "none";
const defaulTxtAlign = "left";
const defaulTxtLigneHeight = "1.2em";
const defaulTxtMaxHeight = "3.58em";
const defaultShape = "rectangle";
const defaultFStyle = "normal";
const defaultFWeight = "normal";
const defaultBSize = "normal";
const defaulColorType = "default";
const transitionDuration = "0.3s";
const btStyleTextBg = "transparent";
const btStyleTextBorder = "transparent";
const btStyleTextBgHover = "transparent";
const btStyleTextBorderHover = "transparent";
const btStyleTextOpacityHover = "0.4";
const btMaxWidth = "250px";
const btMaxHeight = "150px";
const disabledOpacity = "0.4";

// intent option => CSS color value
const backgrounds = {
  default: "#a569bd",
  primary: "#00a7cf",
  secondary: "#ff0080",
  success: "#1cce0c",
  warning: "#ff9900",
  info: "#2196f3",
  danger: "#ff5a34"
};

const borders = {
  default: "#a569bd",
  primary: "#00a7cf",
  secondary: "#ff0080",
  success: "#1cce0c",
  warning: "#ff9900",
  info: "#2196f3",
  danger: "#ff5a34"
};

const textColors = {
  default: "white",
  primary: "white",
  secondary: "white",
  success: "white",
  warning: "white",
  info: "white",
  danger: "white"
};

// shape option => CSS shape value
const shapes = {
  rectangle: "2px",
  rounded: "6px",
  oval: "50%"
};

// font style option => CSS font-style value
const fStyles = {
  normal: "normal",
  italic: "italic",
  oblique: "oblique"
};

// font weight option => CSS font-weight value
const fWeights = {
  normal: "normal",
  bold: "bold",
  lighter: "lighter"
};

// button size option => CSS size value
const bSizes = {
  normal: "medium",
  xxsmall: "xx-small",
  xsmall: "x-small",
  small: "small",
  xxlarge: "xx-large",
  xlarge: "x-large",
  large: "large"
};

// text transform option => CSS text-transform value
const textTransforms = {
  none: "none",
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase"
};

// text align option => CSS text-align value
const textAligns = {
  left: "left",
  right: "right",
  center: "center",
  justify: "justify"
};

const ButtonTheme = {
  shadow,
  shadowHover,
  defaultPadding,
  defaultRadius,
  defaultBorderWidth,
  defaultFontSize,
  defaultBgColor,
  defaulBorderColor,
  defaulTxtColor,
  defaultShape,
  defaultFStyle,
  defaultFWeight,
  defaultBSize,
  defaulTxtTransform,
  defaulTxtAlign,
  defaulColorType,
  transitionDuration,
  backgrounds,
  borders,
  textColors,
  shapes,
  fStyles,
  fWeights,
  bSizes,
  textTransforms,
  textAligns,
  btStyleTextBg,
  btStyleTextBorder,
  btStyleTextBgHover,
  btStyleTextBorderHover,
  btStyleTextOpacityHover,
  btMaxWidth,
  btMaxHeight,
  defaulTxtLigneHeight,
  defaulTxtMaxHeight,
  disabledOpacity
};

export default ButtonTheme;
