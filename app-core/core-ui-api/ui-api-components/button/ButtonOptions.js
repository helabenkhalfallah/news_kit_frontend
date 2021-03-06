const baseClass = "ui-api-kit-button";
const rootClass = (
  cx,
  className,
  buttonStyle,
  buttonShape,
  buttonIntent,
  buttonSize,
  fontStyle,
  fontWeight,
  textTransform,
  textAlign,
  disabled
) => cx(baseClass, className, {
  [`${baseClass}--bstyle--${buttonStyle}`]: buttonStyle,
  [`${baseClass}--bshape--${buttonShape}`]: buttonShape,
  [`${baseClass}--bcolor--${buttonIntent}`]: buttonIntent,
  [`${baseClass}--bsize--${buttonSize}`]: buttonSize,
  [`${baseClass}--fstyle--${fontStyle}`]: fontStyle,
  [`${baseClass}--fweight--${fontWeight}`]: fontWeight,
  [`${baseClass}--ttransform--${textTransform}`]: textTransform,
  [`${baseClass}--talign--${textAlign}`]: textAlign,
  [`${baseClass}--disabled`]: disabled
}); // prettier-ignore

// button size options
const sizeOptions = {
  "extra-extra-small": "xxsmall",
  "extra-small": "xsmall",
  small: "small",
  normal: "normal",
  large: "large",
  "extra-large": "xlarge",
  "extra-extra-large": "xxlarge"
};
const sizes = sizeOptions ? Object.values(sizeOptions) : [];

// button colors options
const intentsOptions = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  info: "info",
  danger: "danger"
};
const intents = intentsOptions ? Object.values(intentsOptions) : [];

// button styles options
const stylesOptions = {
  fill: "fill",
  outline: "outline",
  text: "text"
};
const styles = stylesOptions ? Object.values(stylesOptions) : [];

// button shapes options
const shapesOptions = {
  rectangle: "rectangle",
  rounded: "rounded",
  oval: "oval"
};
const shapes = shapesOptions ? Object.values(shapesOptions) : [];

// button font styles options
const fontStylesOptions = {
  normal: "normal",
  italic: "italic",
  oblique: "oblique"
};
const fontStyles = fontStylesOptions ? Object.values(fontStylesOptions) : [];

// button font weight options
const fontWeightsOptions = {
  normal: "normal",
  bold: "bold",
  light: "lighter"
};
const fontWeights = fontWeightsOptions ? Object.values(fontWeightsOptions) : [];

// button text transforms options
const textTransformsOptions = {
  none: "none",
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase"
};
// prettier-ignore
const textTransforms = textTransformsOptions ? Object.values(textTransformsOptions) : [];

// button text aligns options
const textAlignsOptions = {
  left: "left",
  right: "right",
  center: "center",
  justify: "justify"
};
const textAligns = textAlignsOptions ? Object.values(textAlignsOptions) : [];

// button options
const ButtonOptions = {
  baseClass,
  rootClass,
  intentsOptions,
  intents,
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

export default ButtonOptions;
