// CSS BEM
/*eslint-disable*/
const baseClass = "ui-api-kit-button";
const rootClass = (
  cx,
  className,
  buttonStyle,
  buttonShape,
  buttonColor,
  buttonSize,
  fontStyle,
  fontWeight,
  textTransform,
  textAlign
) =>
  cx(baseClass, className, {
    [`${baseClass}--bstyle--${buttonStyle}`]: buttonStyle,
    [`${baseClass}--bshape--${buttonShape}`]: buttonShape,
    [`${baseClass}--bcolor--${buttonColor}`]: buttonColor,
    [`${baseClass}--bsize--${buttonSize}`]: buttonSize,
    [`${baseClass}--fstyle--${fontStyle}`]: fontStyle,
    [`${baseClass}--fweight--${fontWeight}`]: fontWeight,
    [`${baseClass}--ttransform--${textTransform}`]: textTransform,
    [`${baseClass}--talign--${textAlign}`]: textAlign
  });

// button size options
const sizeOptions = {
  normal: "normal",
  medium: "medium",
  "extra-extra-small": "xxsmall",
  "extra-small": "xsmall",
  small: "small",
  large: "large",
  "extra-extra-large": "xxlarge",
  "extra-large": "xlarge"
};
const sizes = sizeOptions ? Object.values(sizeOptions) : [];

// button colors options
const colorsOptions = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  info: "info",
  danger: "danger"
};
const colors = colorsOptions ? Object.values(colorsOptions) : [];

// button styles options
const stylesOptions = {
  container: "container",
  text: "text",
  outline: "outline"
}
const styles = stylesOptions ? Object.values(stylesOptions) : [];

// button shapes options
const shapesOptions = {
  rectangle: "rectangle",
  rounded: "rounded",
  oval: "oval"
}
const shapes = shapesOptions ? Object.values(shapesOptions) : [];

// button font styles options
const fontStylesOptions = {
  normal: "normal",
  italic: "italic",
  oblique: "oblique"
}
const fontStyles = fontStylesOptions ? Object.values(fontStylesOptions) : [];

// button font weight options
const fontWeightsOptions = {
  normal: "normal",
  bold: "bold",
  light: "lighter",
}
const fontWeights = fontWeightsOptions ? Object.values(fontWeightsOptions) : [];

// button text transforms options
const textTransformsOptions = {
  none: "none",
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase"
}
const textTransforms = textTransformsOptions ? Object.values(textTransformsOptions) : [];

// button text aligns options
const textAlignsOptions = {
  left: "left",
  right: "right",
  center: "center",
  justify: "justify"
}
const textAligns = textAlignsOptions ? Object.values(textAlignsOptions) : [];

// button helper
const ButtonHelper = {
  baseClass,
  rootClass,
  colorsOptions,
  colors,
  sizeOptions,
  sizes,
  stylesOptions,
  styles,
  shapesOptions,
  shapes,
  fontStylesOptions,
  fontStyles,
  fontWeightsOptions,
  fontWeights,
  textTransformsOptions,
  textTransforms,
  textAlignsOptions,
  textAligns
};

export default ButtonHelper;
