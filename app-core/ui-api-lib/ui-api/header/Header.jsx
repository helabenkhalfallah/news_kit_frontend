import React, { Fragment } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import HeaderAccount from "./HeaderAccount";
import HeaderFavorite from "./HeaderFavorite";
import HeaderSettings from "./HeaderSettings";
import HeaderLogoIcon from "./HeaderLogoIcon";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderSideBarIcon from "./HeaderSideBarIcon";

import HeaderOptions from "./HeaderOptions";
import HeaderStyle from "./HeaderStyle";

// component settings
const { rootClass, baseClass } = HeaderOptions;

// header layout disposition :
// <HeaderSideBarIcon / HeaderLogoIcon / HeaderSearchBar / HeaderFavorite / HeaderAccount / HeaderSettings>
const Header = ({ className }) => {
  const headerRootClass = rootClass(cx, className, "");
  return (
    <HeaderStyle>
      <Grid fluid>
        <Row center="xs" xs={12}>
          <Col xs>
            <HeaderSideBarIcon className={headerRootClass} />
          </Col>
          <Col xs>
            <HeaderLogoIcon className={headerRootClass} />
          </Col>
          <Col xs>
            <HeaderSearchBar className={headerRootClass} />
          </Col>
        </Row>
      </Grid>
    </HeaderStyle>
  );
};

// prop type validation
Header.propTypes = {
  className: PropTypes.string
};

// default prop
Header.defaultProps = {
  className: baseClass
};

export default Header;
