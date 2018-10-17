// import { ApolloConsumer } from 'react-apollo'
// import CookiesManager from '../lib/cookies/CookiesManager'

/**
 * user logout
 */
/* signout = apolloClient => () => {
  // remove cookies
  CookiesManager.remove()

  // Force a reload of all the current queries now that the user is
  // logged in, so we don't accidentally leave any state around.
  apolloClient.cache.reset().then(() => {
    // Redirect to a more useful page when signed out
    redirect({}, Routes.SIGN_IN_PATH)
  })
}

const { profile } = this.props
const user = profile ? profile.UserProfile : {}
return (
  <ApolloConsumer>
    {client => (
      <div>
        {(user && user.firstName)
          ? (
            <div>
              Hello
              {user.firstName}
              !
              <button
                type="button"
                onClick={this.signout(client)}
              >
                Sign out
              </button>
            </div>
          ) : (
            <div>
              Error getting user !
            </div>
          )
        }
        <br />

      </div>
    )}
  </ApolloConsumer>
  */
