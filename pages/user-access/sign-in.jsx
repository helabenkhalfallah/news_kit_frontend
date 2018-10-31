import React from "react";

import AppLayout from "../../app/main/AppLayout";
import AppService from "../../app-services";
import AppSettings from "../../app-settings";
import AppCommons from "../../app-core/commons";
import UIAPI from "../../app-core/ui-api-lib";

const { Routes, BodyProvider, ThemeManager } = AppSettings;
const { ThemeConsumer } = ThemeManager;
const { Redirect } = AppCommons;
const { RemoteQMManager } = AppService;
const { BodyTypes } = BodyProvider;
const { Components } = UIAPI;
const { Button, ButtonIcon, Icon } = Components;

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
    return (
      <ThemeConsumer>
        {theme => (
          <div>
            <Button
              theme={theme}
              buttonIntent="primary"
              title="Look At me here"
            />
            <ButtonIcon
              theme={theme}
              buttonIntent="secondary"
              label="Look At me here"
              icon="edit"
            />
            <Icon
              theme={theme}
              icon="edit"
              intent="secondary"
              background="light"
              size="normal"
            />
            <AppLayout type={BodyTypes.signin} />
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default Signin;
