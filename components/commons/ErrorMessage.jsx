import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = ({ message }) => (
  <aside>
    {message}
    <style jsx>
      {`
        aside {
          padding: 1.5em;
          font-size: 14px;
          color: white;
          background-color: red;
        }
    `}
    </style>
  </aside>
)

// prop type validation
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMessage
