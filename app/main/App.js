import React from 'react'
import PropTypes from 'prop-types'

const App = ({ children }) => (
  <main>
    {children}
  </main>
)

// prop type validation
App.propTypes = {
  children: PropTypes.any,
}

// default prop
App.defaultProps = {
  children: null,
}

export default App
