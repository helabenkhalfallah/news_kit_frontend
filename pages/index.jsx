import React from 'react'
import PropTypes from 'prop-types'

import redirect from '../lib/routes/Redirect'
import RemoteQMManager from '../graphql/remote-state/RemoteQMManager'
import Routes from '../lib/routes/Routes'

import AppLayout from '../components/app/AppLayout'

import ContentHelper from '../components/app/ContentHelper'

const { ContentTypes } = ContentHelper


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
    const { USER_IS_VALID } = RemoteQMManager
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
      <AppLayout type={ContentTypes.home} />
    )
  }
}
