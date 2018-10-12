// CSS BEM
/*eslint-disable*/
const baseClass = "news-kit-header";
const rootClass = (cx, className, section) =>
  cx(baseClass, className, {
    [`${baseClass}--${section}`]: section
  });

// header helper
const HeaderHelper = {
  baseClass,
  rootClass
};

export default HeaderHelper;
