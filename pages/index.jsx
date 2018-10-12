import React from 'react'
import PropTypes from 'prop-types'

import AppLayout from '../app/main/AppLayout'
import AppService from '../app-services'
import AppSettings from '../app-settings'
import AppCommons from '../app-core/commons'

const {
  Redirect,
} = AppCommons

const {
  Routes,
  ContentHelper,
} = AppSettings

const {
  RemoteQMManager,
} = AppService

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
      Redirect(context, Routes.SIGN_IN_PATH)
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
