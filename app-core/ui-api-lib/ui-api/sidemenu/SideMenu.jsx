import React, { Fragment } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import SideMenuWrapper from "./SideMenuWrapper";

import UIUtils from "../../ui-api-utils";
import SideMenuClosed from "./SideMenuClosed";
import SideMenuOpened from "./SideMenuOpened";

// component settings
const { SideMenuHelper } = UIUtils;
const { rootClass, baseClass, SideMenuStatut } = SideMenuHelper;

// component
const SideMenu = ({ className, open, ...otherProps }) => {
  const status = open ? SideMenuStatut.open : SideMenuStatut.close;
  const sideMenuRootClass = rootClass(cx, className, status);
  return (
    <SideMenuWrapper>
      <Fragment>
        <div className={sideMenuRootClass} {...otherProps}>
          {open ? (
            <SideMenuOpened>open</SideMenuOpened>
          ) : (
              <SideMenuClosed>close</SideMenuClosed>
            )}
        </div>
      </Fragment>
    </SideMenuWrapper>
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
