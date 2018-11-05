// CSS BEM
const baseClass = "news-kit-side-menu";
const rootClass = (cx, className, status) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  cx(baseClass, className, {
    [`${baseClass}--${status}`]: status
  });

// side menu helper
export { baseClass, rootClass };
