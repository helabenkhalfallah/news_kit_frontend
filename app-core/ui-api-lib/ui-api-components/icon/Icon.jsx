import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import SVGIcon from "../svg/SVGIcon";
import IconOptions from "./IconOptions";
import IconStyle from "./IconStyle";

// compoent settings
const {
  rootClass,
  baseClass,
  icons,
  tints,
  backgrounds,
  sizes,
  svgIcons
} = IconOptions; // prettier-ignore

// component
const Icon = ({
  className,
  icon,
  tint,
  background,
  size,
  disabled // prettier-ignore
}) => {
  const btRootClass = rootClass(
    cx,
    className,
    tint,
    background,
    size,
    disabled
  );
  const { path, fillPath } = svgIcons[icon];
  return (
    <IconStyle
      tint={tint}
      background={background}
      size={size}
      disabled={disabled}
    >
      <div className={btRootClass}>
        <SVGIcon path={path} fillPath={fillPath} />
      </div>
    </IconStyle>
  );
};

/**
 * display name
 */
Icon.displayName = "ButtonIcon";

/**
 * propType validation
 */
Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(icons).isRequired,
  tint: PropTypes.oneOf(tints).isRequired,
  background: PropTypes.oneOf(backgrounds).isRequired,
  size: PropTypes.oneOf(sizes).isRequired,
  disabled: PropTypes.bool
};

/**
 * propType default values
 */
Icon.defaultProps = {
  className: baseClass,
  disabled: false
};

export default Icon;
