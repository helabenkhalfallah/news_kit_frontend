import SVGIconProvider from "../svg/SVGIconProvider";

// class
const baseClass = "ui-api-kit-icon";
const rootClass = (
  cx,
  className,
  tint,
  background,
  size,
  disabled
) => cx(baseClass, className, {
  [`${baseClass}--tint--${tint}`]: tint,
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

// icon tint
const tintOptions = {
  default: "default",
  white: "white",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  info: "info",
  danger: "danger"
};
const tints = tintOptions ? Object.values(tintOptions) : [];

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
  tintOptions,
  tints,
  backgroundOptions,
  backgrounds,
  sizeOptions,
  sizes
};

export default IconOptions;
