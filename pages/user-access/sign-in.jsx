import React from "react";

import AppLayout from "../../app/main/AppLayout";
import AppService from "../../app-services";
import AppSettings from "../../app-settings";
import AppCommons from "../../app-core/commons";
import UIAPI from "../../app-core/ui-api-lib";

const {
  Routes,
  BodyProvider,
  ThemeManager,
  LanguageManager
} = AppSettings; // prettier-ignore

const { ThemeConsumer } = ThemeManager;
const { LanguageConsumer } = LanguageManager;
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
          <LanguageConsumer>
            {language => (
              <div>
                <Button
                  theme={theme}
                  language={language}
                  buttonIntent="primary"
                  title="Look At me here"
                />
                <ButtonIcon
                  theme={theme}
                  language={language}
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
          </LanguageConsumer>
        )}
      </ThemeConsumer>
    );
  }
}

export default Signin;
