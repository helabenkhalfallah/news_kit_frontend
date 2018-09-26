import React from 'react'
import { withApollo } from 'react-apollo'
// import PropTypes from 'prop-types'

const AuthRegister = () => {
  console.log('AuthRegister')
  return (
    <div>
      AuthRegister
    </div>
  )
}

// prop type validation
AuthRegister.propTypes = {

}

// default prop
AuthRegister.defaultProps = {

}


export default withApollo(AuthRegister)
