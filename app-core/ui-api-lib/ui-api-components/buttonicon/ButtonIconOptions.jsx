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
  textAlign,
  disabled,
  loading
) =>
  cx(baseClass, className, {
    [`${baseClass}--bstyle--${buttonStyle}`]: buttonStyle,
    [`${baseClass}--bshape--${buttonShape}`]: buttonShape,
    [`${baseClass}--bcolor--${buttonColor}`]: buttonColor,
    [`${baseClass}--bsize--${buttonSize}`]: buttonSize,
    [`${baseClass}--fstyle--${fontStyle}`]: fontStyle,
    [`${baseClass}--fweight--${fontWeight}`]: fontWeight,
    [`${baseClass}--ttransform--${textTransform}`]: textTransform,
    [`${baseClass}--talign--${textAlign}`]: textAlign,
    [`${baseClass}--disabled`]: disabled,
    [`${baseClass}--loading`]: loading
  });

// button with prepared icon
const iconsOptions = {
  add: "add",
  remove: "remove",
  edit: "edit",
  clear: "clear"
}
const icons = iconsOptions ? Object.values(iconsOptions) : [];

// button options
const ButtonIconOptions = {
  baseClass,
  rootClass,
  iconsOptions,
  icons
};

export default ButtonIconOptions;
