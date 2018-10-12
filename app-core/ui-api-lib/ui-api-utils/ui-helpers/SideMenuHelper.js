// CSS BEM
/*eslint-disable*/
const baseClass = "news-kit-side-menu";
const rootClass = (cx, className, status) =>
  cx(baseClass, className, {
    [`${baseClass}--${status}`]: status
  });

// menu statut
const SideMenuStatut = {
  open: "opened",
  close: "closed"
};

// side menu helper
const SideMenuHelper = {
  baseClass,
  rootClass,
  SideMenuStatut
};

export default SideMenuHelper;
