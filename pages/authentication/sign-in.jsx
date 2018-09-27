import React, { Fragment } from 'react'
import Link from 'next/link'

import redirect from '../../lib/routes/Redirect'
import AuthSignIn from '../../components/authentication/AuthSignIn'
import graphqlManager from '../../graphql'
import Routes from '../../lib/routes/Routes'

import Header from '../../components/app/Header'

export default class Signin extends React.Component {
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
        <Header />
        <AuthSignIn />
        <hr />
        New?
        <Link prefetch href={Routes.REGISTER_PATH}>
          <a>Create account</a>
        </Link>
      </Fragment>
    )
  }
}
