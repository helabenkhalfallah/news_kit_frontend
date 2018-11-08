// select options
const baseClass = "ui-api-kit-select";
const rootClass = (
  cx,
  className,
  disabled
) => cx(baseClass, className, {
  [`${baseClass}--disabled`]: disabled
}); // prettier-ignore

const SelectOptions = {
  baseClass,
  rootClass
};

export default SelectOptions;
