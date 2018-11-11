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
  intents,
  backgrounds,
  sizes,
  svgIcons
} = IconOptions; // prettier-ignore

// component
const Icon = ({
  className,
  theme,
  icon,
  intent,
  background,
  size,
  disabled // prettier-ignore
}) => {
  const btRootClass = rootClass(
    cx,
    className,
    intent,
    background,
    size,
    disabled
  );
  const { path, fillPath } = svgIcons[icon];
  return (
    <IconStyle
      theme={theme}
      intent={intent}
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
Icon.displayName = "Icon";

/**
 * propType validation
 */
Icon.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object.isRequired,
  icon: PropTypes.oneOf(icons).isRequired,
  intent: PropTypes.oneOf(intents).isRequired,
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
