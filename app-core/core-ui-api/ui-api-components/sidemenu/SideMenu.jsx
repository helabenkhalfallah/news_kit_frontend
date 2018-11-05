import React, { Fragment } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import SideMenuStyle from "./SideMenuStyle";

import { rootClass, baseClass } from "./SideMenuOptions";
import { SIDE_MENU_OPEN, SIDE_MENU_CLOSE } from "../../..";
import SideMenuClosed from "./SideMenuClosed";
import SideMenuOpened from "./SideMenuOpened";

// component
/* eslint-disable */
const SideMenu = ({ className, open, ...otherProps }) => {
  const status = open ? SIDE_MENU_OPEN : SIDE_MENU_CLOSE;
  const sideMenuRootClass = rootClass(cx, className, status);
  return (
    <SideMenuStyle>
      <Fragment>
        <div className={sideMenuRootClass} {...otherProps}>
          {open ? (
            <SideMenuOpened>open</SideMenuOpened>
          ) : (
              <SideMenuClosed>close</SideMenuClosed>
            )}
        </div>
      </Fragment>
    </SideMenuStyle>
  );
};

/**
 * display name
 */
SideMenu.displayName = "SideMenu";

/**
 * propType validation
 */
SideMenu.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool
};

/**
 * propType default values
 */
SideMenu.defaultProps = {
  className: baseClass,
  open: false
};

export default SideMenu;
