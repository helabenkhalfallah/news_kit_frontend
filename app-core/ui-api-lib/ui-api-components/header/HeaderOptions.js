// CSS BEM
/*eslint-disable*/
const baseClass = "news-kit-header";
const rootClass = (cx, className, section) =>
  cx(baseClass, className, {
    [`${baseClass}--${section}`]: section
  });

// header helper
const HeaderOptions = {
  baseClass,
  rootClass
};

export default HeaderOptions;
