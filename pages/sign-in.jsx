import React from 'react'
import Link from 'next/link'

import redirect from '../lib/routes/Redirect'
import AuthSignIn from '../components/authentication/AuthSignIn'
import graphqlManager from '../graphql'

export default class Signin extends React.Component {
  static async getInitialProps(context) {
    const { USER_IS_VALID } = graphqlManager
    const { profile } = await USER_IS_VALID(context.apolloClient)
    if (profile.UserProfile) {
      // Already signed in? No need to continue.
      // Throw them back to the main page
      redirect(context, '/')
    }
    return {}
  }

  render() {
    return (
      <React.Fragment>
        <AuthSignIn />
        <hr />
        New?
        <Link prefetch href="/create-account">
          <a>Create account</a>
        </Link>
      </React.Fragment>
    )
  }
}
