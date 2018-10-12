// CSS BEM
/*eslint-disable*/
const baseClass = "news-kit-button";
const rootClass = (cx, className, context, size) =>
  cx(baseClass, className, {
    [`${baseClass}--${context}`]: context,
    [`${baseClass}--${size}`]: size
  });

// size options
const sizeOptions = {
  xs: "xs",
  sm: "sm",
  lg: "lg",
  "No Value": ""
};
const sizeTypes = sizeOptions ? Object.values(sizeOptions) : [];

// context options
const contextOptions = {
  default: "default",
  outline: "outline",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  info: "info",
  danger: "danger"
};
const contextTypes = contextOptions ? Object.values(contextOptions) : [];

// button helper
const ButtonHelper = {
  baseClass,
  rootClass,
  sizeOptions,
  contextOptions,
  sizeTypes,
  contextTypes
};

export default ButtonHelper;
