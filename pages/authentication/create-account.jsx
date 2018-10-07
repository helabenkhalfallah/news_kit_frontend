import React, { Fragment } from 'react'
import Link from 'next/link'

import redirect from '../../lib/routes/Redirect'
import AuthRegister from '../../components/authentication/AuthRegister'
import graphqlManager from '../../graphql'
import Routes from '../../lib/routes/Routes'


export default class CreateAccount extends React.Component {
  static async getInitialProps(context) {
    const { USER_IS_VALID } = graphqlManager
    const { profile } = await USER_IS_VALID(context.apolloClient)
    if (profile.UserProfile) {
      // Already signed in? No need to continue.
      // Throw them back to the main page
      redirect(context, Routes.HOME_PATH)
    }
    return {}
  }

  render() {
    return (
      <Fragment>
        <AuthRegister />
        <hr />
        Already have an account?
        <Link prefetch href={Routes.SIGN_IN_PATH}>
          <a>Sign in</a>
        </Link>
      </Fragment>
    )
  }
}
