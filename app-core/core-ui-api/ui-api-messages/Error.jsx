import React, { Fragment } from "react";
import PropTypes from "prop-types";

// error page
const Error = React.memo(({ message }) => (
  <Fragment>
    <div>{`Error : ${message}`}</div>
  </Fragment>
));

// prop type validation
Error.propTypes = { message: PropTypes.string };

// default prop
Error.defaultProps = { message: "Generale error" };

export default Error;
