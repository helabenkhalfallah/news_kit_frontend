// select options
const baseClass = "ui-api-kit-select";
const listAnimationClass = "select-list";
const arrowAnimationClass = "arrow";

const selectorHeaderClass = (cx, className) => cx(`${className}__header`);
const selectorListClass = (cx, className) => cx(`${className}__list`);

const headerTxtClass = (cx, className) => cx(`${className}__header__text`);

const headerIconContainerClass = (cx, className) => cx(`${className}__header__icon__ct`);
const headerIconClass = (cx, className) => cx(`${className}__header__icon`);

const SelectOptions = {
  baseClass,
  listAnimationClass,
  arrowAnimationClass,
  selectorHeaderClass,
  selectorListClass,
  headerTxtClass,
  headerIconContainerClass,
  headerIconClass
};

export default SelectOptions;
