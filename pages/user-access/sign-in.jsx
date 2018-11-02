import React from "react";

import AppLayout from "../../app/main/AppLayout";
import AppService from "../../app-services";
import AppSettings from "../../app-settings";
import AppCommons from "../../app-core/commons";

const {
  Routes,
  BodyProvider
} = AppSettings; // prettier-ignore

const { Redirect } = AppCommons;
const { RemoteQMManager } = AppService;
const { BodyTypes } = BodyProvider;

/**
 * Signin page
 */
class Signin extends React.Component {
  static async getInitialProps(context) {
    const { USER_IS_VALID } = RemoteQMManager;
    const { profile } = await USER_IS_VALID(context.apolloClient);
    if (profile.UserProfile) {
      // Already signed in? No need to continue.
      // Throw them back to the main page
      Redirect(context, Routes.HOME_PATH);
    }
    return {};
  }

  render() {
    return <AppLayout type={BodyTypes.signin} />;
  }
}

export default Signin;
