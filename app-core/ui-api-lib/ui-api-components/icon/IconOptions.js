import SVGIconProvider from "../svg/SVGIconProvider";

// class
const baseClass = "ui-api-kit-icon";
const rootClass = (
  cx,
  className,
  intent,
  background,
  size,
  disabled
) => cx(baseClass, className, {
  [`${baseClass}--intent--${intent}`]: intent,
  [`${baseClass}--background--${background}`]: background,
  [`${baseClass}--size--${size}`]: size,
  [`${baseClass}--disabled`]: disabled
}); // prettier-ignore

// predefined icons
const iconsOptions = {
  add: "add",
  remove: "remove",
  edit: "edit",
  clear: "clear"
};
const icons = iconsOptions ? Object.values(iconsOptions) : [];

// predefined svg icons
const svgIcons = SVGIconProvider;

// icon sizes
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

// icon intent
const intentOptions = {
  default: "default",
  white: "white",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  info: "info",
  danger: "danger"
};
const intents = intentOptions ? Object.values(intentOptions) : [];

// icon background
const backgroundOptions = {
  default: "default",
  black: "black",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  info: "info",
  danger: "danger"
};
const backgrounds = backgroundOptions ? Object.values(backgroundOptions) : [];

const IconOptions = {
  baseClass,
  rootClass,
  svgIcons,
  iconsOptions,
  icons,
  intentOptions,
  intents,
  backgroundOptions,
  backgrounds,
  sizeOptions,
  sizes
};

export default IconOptions;
