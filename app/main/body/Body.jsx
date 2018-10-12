// import Link from 'next/link'
import React from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

const Body = ({ type }) => (
  <div>
    {`Body ${type}`}
  </div>
)

// prop type validation
Body.propTypes = {
  type: PropTypes.string,
}

// default prop
Body.defaultProps = {
  type: 'Home',
}

export default withRouter(Body)
