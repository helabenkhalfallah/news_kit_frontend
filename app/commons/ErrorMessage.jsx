import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = ({ message }) => (
  <aside>
    {message}
  </aside>
)

// prop type validation
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMessage
