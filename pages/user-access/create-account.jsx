import React from "react";

import AppLayout from "../../app/app-main/AppLayout";
import { USER_IS_VALID } from "../../app-services";
import { Routes, BodyProvider } from "../../app-settings";
import { Redirect } from "../../app-core";

const { BodyTypes } = BodyProvider;

/**
 * Create account page
 */
class CreateAccount extends React.Component {
  static async getInitialProps(context) {
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
