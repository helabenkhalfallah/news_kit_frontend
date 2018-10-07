// import Link from 'next/link'
import React from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

const Header = ({ type }) => (
  <div>
    {`Header ${type}`}
  </div>
)

// prop type validation
Header.propTypes = {
  type: PropTypes.string,
}

// default prop
Header.defaultProps = {
  type: 'Home',
}

export default withRouter(Header)
