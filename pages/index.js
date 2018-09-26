import React from 'react'
import { ApolloConsumer } from 'react-apollo'

import CookiesManager from '../lib/cookies/CookiesManager'
import redirect from '../lib/routes/Redirect'
import graphqlManager from '../graphql/index'


export default class Index extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const USER_IS_VALID = graphqlManager.USER_IS_VALID
    const { profile } = await USER_IS_VALID(context.apolloClient)
    if (!profile.UserProfile) {
      redirect(context, '/signin')
    }
    return { profile }
  }

  signout = apolloClient => () => {

    // remove cookies
    CookiesManager.remove()

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    apolloClient.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, '/signin')
    })
  }

  render() {
    const user = this.props.profile ? this.props.profile.UserProfile : {}
    return (
      <ApolloConsumer>
        {client => (
          <div>
            {(user && user.firstName) ?
              (
                <div>
                  Hello {user.firstName} !
                  <button onClick={this.signout(client)}>Sign out</button>
                </div>
              )
              :
              (
                <div>
                  Error getting user !
                </div>
              )
            }
            <br />

          </div>
        )}
      </ApolloConsumer>
    )
  }
}