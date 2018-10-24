// CSS BEM
/*eslint-disable*/
const baseClass = "ui-api-kit-button";
const rootClass = (
  cx,
  className,
  iconAlign,
  buttonStyle,
  buttonShape,
  buttonIntent,
  buttonSize,
  fontStyle,
  fontWeight,
  textTransform,
  disabled,
  loading
) =>
  cx(baseClass, className, {
    [`${baseClass}--iconalign--${iconAlign}`]: iconAlign,
    [`${baseClass}--bstyle--${buttonStyle}`]: buttonStyle,
    [`${baseClass}--bshape--${buttonShape}`]: buttonShape,
    [`${baseClass}--bcolor--${buttonIntent}`]: buttonIntent,
    [`${baseClass}--bsize--${buttonSize}`]: buttonSize,
    [`${baseClass}--fstyle--${fontStyle}`]: fontStyle,
    [`${baseClass}--fweight--${fontWeight}`]: fontWeight,
    [`${baseClass}--ttransform--${textTransform}`]: textTransform,
    [`${baseClass}--disabled`]: disabled,
    [`${baseClass}--loading`]: loading
  });

// button with predefined icons
const iconsOptions = {
  add: "add",
  remove: "remove",
  edit: "edit",
  clear: "clear"
}
const icons = iconsOptions ? Object.values(iconsOptions) : [];

// button text aligns options
const iconAlignsOptions = {
  left: "left",
  right: "right"
}
const iconAligns = iconAlignsOptions ? Object.values(iconAlignsOptions) : [];


// button icon options
const ButtonIconOptions = {
  baseClass,
  rootClass,
  iconsOptions,
  icons,
  iconAlignsOptions,
  iconAligns
};

export default ButtonIconOptions;
