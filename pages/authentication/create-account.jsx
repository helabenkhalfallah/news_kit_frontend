import React, { Fragment } from 'react'

import redirect from '../../lib/routes/Redirect'
import graphqlManager from '../../graphql'
import Routes from '../../lib/routes/Routes'

import Header from '../../components/app/header/Header'
import Footer from '../../components/app/footer/Footer'
import Body from '../../components/app/body/Body'
import ContentHelper from '../../components/app/ContentHelper'

const { contentTypes } = ContentHelper

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
        <Header type={contentTypes.register} />
        <Body type={contentTypes.register} />
        <Footer type={contentTypes.register} />
      </Fragment>
    )
  }
}
