import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// error page
const ErrorPage = ({ message }) => (
  <Fragment>
    <div>
      {`Error : ${message}`}
    </div>
  </Fragment>
)


// prop type validation
ErrorPage.propTypes = {
  message: PropTypes.string,
}

// default prop
ErrorPage.defaultProps = {
  message: 'Generale error',
}

export default ErrorPage
