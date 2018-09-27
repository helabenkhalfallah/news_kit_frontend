import Link from 'next/link'
import React from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

const Header = ({ router: { pathname } }) => (
  <header>
    <Link prefetch href="/">
      <a>Home</a>
    </Link>
    <Link prefetch href="/about">
      <a>About</a>
    </Link>
  </header>
)

// prop type validation
Header.propTypes = {
  router: PropTypes.any,
}

// default prop
Header.defaultProps = {
  router: null,
}

export default withRouter(Header)
