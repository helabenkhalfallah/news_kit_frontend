import ObjectUtils from "../../../commons/utils/ObjectUtils";
import AppSettings from "../../../../app-settings";

// load app theme
const { ThemeManager } = AppSettings;
const { Theme } = ThemeManager;

// button design system

// colors
const defaultBgColor = "white";
const defaulTxtColor = "white";
const defaulBorderColor = "transparent";
const btStyleTextBg = "transparent";
const btStyleTextBorder = "transparent";
const btStyleTextBgHover = "transparent";
const btStyleTextBorderHover = "transparent";

// font styles
const defaultFStyle = "normal";
const defaultFWeight = "normal";
const defaultFontSize = "normal";

// text styles
const defaulTxtTransform = "none";
const defaulTxtAlign = "left";
const defaulTxtLigneHeight = "1.2em";
const defaulTxtMaxHeight = "3.58em";

// border styles
const defaultRadius = "2px";
const defaultBorderWidth = "2px";

// sizes
const defaultBSize = "large";
const btMaxWidth = "250px";
const btMaxHeight = "150px";

// margins & paddings
const defaultTxtMarginLeft = "5px";
const defaultTxtMarginRight = "5px";
const defaultTxtMarginTop = "5px";
const defaultTxtMarginBottom = "5px";
const defaultTxtPaddingTop = "2px";
const defaultTxtPaddingBottom = "2px";

// shadow
const shadow = "none";
const shadowHover = "none";

// transition animation
const transitionDuration = "0.3s";

// opacity
const btStyleTextOpacityHover = "0.4";
const disabledOpacity = "0.4";

// intent option => CSS color value
const backgrounds = theme => ({
  default: !ObjectUtils.isEmpty(theme) ? theme.default : Theme.default.default,
  primary: !ObjectUtils.isEmpty(theme) ? theme.primary : Theme.default.primary,
  secondary: !ObjectUtils.isEmpty(theme) ? theme.secondary : Theme.default.secondary,
  success: !ObjectUtils.isEmpty(theme) ? theme.success : Theme.default.success,
  warning: !ObjectUtils.isEmpty(theme) ? theme.warning : Theme.default.warning,
  info: !ObjectUtils.isEmpty(theme) ? theme.info : Theme.default.info,
  danger: !ObjectUtils.isEmpty(theme) ? theme.danger : Theme.default.danger
}); // prettier-ignore

const borders = theme => ({
  default: !ObjectUtils.isEmpty(theme) ? theme.borderDefault : Theme.default.borderDefault,
  primary: !ObjectUtils.isEmpty(theme) ? theme.borderPrimary : Theme.default.borderPrimary,
  secondary: !ObjectUtils.isEmpty(theme) ? theme.borderSecondary : Theme.default.borderSecondary,
  success: !ObjectUtils.isEmpty(theme) ? theme.borderSuccess : Theme.default.borderSuccess,
  warning: !ObjectUtils.isEmpty(theme) ? theme.borderWarning : Theme.default.borderWarning,
  info: !ObjectUtils.isEmpty(theme) ? theme.borderInfo : Theme.default.borderInfo,
  danger: !ObjectUtils.isEmpty(theme) ? theme.boarderDanger : Theme.default.boarderDanger
}); // prettier-ignore

const textColors = theme => ({
  default: !ObjectUtils.isEmpty(theme) ? theme.txtColorDefault : Theme.default.txtColorDefault,
  primary: !ObjectUtils.isEmpty(theme) ? theme.txtColorPrimary : Theme.default.txtColorPrimary,
  secondary: !ObjectUtils.isEmpty(theme) ? theme.txtColorSecondary : Theme.default.txtColorSecondary,
  success: !ObjectUtils.isEmpty(theme) ? theme.txtColorSuccess : Theme.default.txtColorSuccess,
  warning: !ObjectUtils.isEmpty(theme) ? theme.txtColorWarning : Theme.default.txtColorWarning,
  info: !ObjectUtils.isEmpty(theme) ? theme.txtColorInfo : Theme.default.txtColorInfo,
  danger: !ObjectUtils.isEmpty(theme) ? theme.txtColorDanger : Theme.default.txtColorDanger
}); // prettier-ignore

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

// button (size option) => CSS size value
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

// text line height (size option) => CSS size value
const textLineHeightSizes = {
  xxsmall: "1.3em",
  xsmall: "1.3em",
  small: "1.3em",
  normal: "1.24em",
  large: "1.23em",
  xlarge: "1.22em",
  xxlarge: "1.21em"
};

// text max height (size option) => CSS size value
const textMaxHeightSizes = {
  xxsmall: "3.58em",
  xsmall: "3.58em",
  small: "3.58em",
  normal: "3.58em",
  large: "3.58em",
  xlarge: "3.58em",
  xxlarge: "3.58em"
};

// text margin left (size option) => CSS size value
const textMLSizes = {
  xxsmall: "5px",
  xsmall: "5px",
  small: "5px",
  normal: "10px",
  large: "10px",
  xlarge: "10px",
  xxlarge: "10px"
};

// text margin right (size option) => CSS size value
const textMRSizes = {
  xxsmall: "5px",
  xsmall: "5px",
  small: "5px",
  normal: "10px",
  large: "10px",
  xlarge: "10px",
  xxlarge: "10px"
};

// text margin top (size option) => CSS size value
const textMTSizes = {
  xxsmall: "5px",
  xsmall: "5px",
  small: "5px",
  normal: "5px",
  large: "5px",
  xlarge: "5px",
  xxlarge: "5px"
};

// text margin bottom (size option) => CSS size value
const textMBSizes = {
  xxsmall: "5px",
  xsmall: "5px",
  small: "5px",
  normal: "5px",
  large: "5px",
  xlarge: "5px",
  xxlarge: "5px"
};

// button theme
const ButtonTheme = {
  shadow,
  shadowHover,
  defaultRadius,
  defaultBorderWidth,
  defaultFontSize,
  defaultBgColor,
  defaulBorderColor,
  defaulTxtColor,
  defaultFStyle,
  defaultFWeight,
  defaultBSize,
  defaulTxtTransform,
  defaulTxtAlign,
  defaultTxtMarginLeft,
  defaultTxtMarginRight,
  defaultTxtMarginTop,
  defaultTxtMarginBottom,
  defaultTxtPaddingTop,
  defaultTxtPaddingBottom,
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
  textLineHeightSizes,
  textMaxHeightSizes,
  textMLSizes,
  textMRSizes,
  textMTSizes,
  textMBSizes,
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
