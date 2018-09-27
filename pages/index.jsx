import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import PropTypes from 'prop-types'

import CookiesManager from '../lib/cookies/CookiesManager'
import redirect from '../lib/routes/Redirect'
import graphqlManager from '../graphql'
import Routes from '../lib/routes/Routes'


export default class Index extends React.Component {
  // default props
  static defaultProps = {
    profile: null,
  }

  // propsType (validation)
  static propTypes = {
    profile: PropTypes.any,
  }

  /**
   * initial props
   * @param {*} context
   */
  static async getInitialProps(context) {
    const { USER_IS_VALID } = graphqlManager
    const { profile } = await USER_IS_VALID(context.apolloClient)
    if (!profile.UserProfile) {
      redirect(context, Routes.SIGN_IN_PATH)
    }
    return { profile }
  }

  /**
   * user logout
   */
  signout = apolloClient => () => {
    // remove cookies
    CookiesManager.remove()

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    apolloClient.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, Routes.SIGN_IN_PATH)
    })
  }

  render() {
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
    )
  }
}
