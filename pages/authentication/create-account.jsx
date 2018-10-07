import React from 'react'

import redirect from '../../lib/routes/Redirect'
import RemoteQMManager from '../../graphql/remote-state/RemoteQMManager'
import Routes from '../../lib/routes/Routes'

import AppLayout from '../../components/app/AppLayout'
import ContentHelper from '../../components/app/ContentHelper'

const { ContentTypes } = ContentHelper

export default class CreateAccount extends React.Component {
  static async getInitialProps(context) {
    const { USER_IS_VALID } = RemoteQMManager
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
      <AppLayout type={ContentTypes.register} />
    )
  }
}
