import React from "react";

import AppLayout from "../../app/main/AppLayout";
import AppService from "../../app-services";
import AppSettings from "../../app-settings";
import CoreCommons from "../../app-core/core-commons";

const { Redirect } = CoreCommons;

const { Routes, BodyProvider } = AppSettings;

const { RemoteQMManager } = AppService;

const { BodyTypes } = BodyProvider;

/**
 * Create account page
 */
class CreateAccount extends React.Component {
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
    return <AppLayout type={BodyTypes.register} />;
  }
}

export default CreateAccount;
