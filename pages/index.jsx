import React from "react";
import PropTypes from "prop-types";

import AppLayout from "../app/main/AppLayout";
import { USER_IS_VALID } from "../app-services";
import { Routes, BodyProvider } from "../app-settings";
import { Redirect, AppLogger } from "../app-core";

const { BodyTypes } = BodyProvider;

/**
 * Index page
 */
export default class Index extends React.Component {
  // default props
  static defaultProps = {
    profile: null
  };

  // propsType (validation)
  static propTypes = {
    profile: PropTypes.any
  };

  /**
   * initial props
   * @param {*} context
   */
  static async getInitialProps(context) {
    const { profile } = await USER_IS_VALID(context.apolloClient);
    if (!profile.UserProfile) {
      Redirect(context, Routes.SIGN_IN_PATH);
    }
    return { profile };
  }

  render() {
    const { profile } = this.props;
    AppLogger.info("Index profile : ", profile);
    return <AppLayout type={BodyTypes.home} />;
  }
}
