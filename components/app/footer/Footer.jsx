// import Link from 'next/link'
import React from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

const Footer = ({ type }) => (
  <div>
    {`Footer ${type}`}
  </div>
)

// prop type validation
Footer.propTypes = {
  type: PropTypes.string,
}

// default prop
Footer.defaultProps = {
  type: 'Home',
}

export default withRouter(Footer)
