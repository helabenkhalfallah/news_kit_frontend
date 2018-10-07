import React from 'react'
import PropTypes from 'prop-types'

import redirect from '../lib/routes/Redirect'
import graphqlManager from '../graphql'
import Routes from '../lib/routes/Routes'

import Header from '../components/app/header/Header'
import Footer from '../components/app/footer/Footer'
import Body from '../components/app/body/Body'

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

  render() {
    const { profile } = this.props
    console.log('Index profile : ', profile)
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
