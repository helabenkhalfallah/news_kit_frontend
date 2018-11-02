import React from "react";

import AppLayout from "../../app/main/AppLayout";
import AppSettings from "../../app-settings";
import UIAPI from "../../app-core/ui-api-lib";

const {
  BodyProvider,
  ThemeManager,
  LanguageManager,
  LocalizedStringUtils,
  Dico
} = AppSettings; // prettier-ignore

const { ThemeConsumer } = ThemeManager;
const { LanguageConsumer } = LanguageManager;
const { BodyTypes } = BodyProvider;
const { Components } = UIAPI;
const { Button, ButtonIcon, Icon } = Components;

/**
 * Mock Page
 */
const MockPage = () => (
  <ThemeConsumer>
    {theme => (
      <LanguageConsumer>
        {language => (
          <div>
            <Button
              theme={theme}
              buttonIntent="primary"
              title={LocalizedStringUtils.localizedString(
                Dico.KEYS.USER_SIGN_BT,
                language
              )}
            />
            <ButtonIcon
              theme={theme}
              buttonIntent="secondary"
              label={LocalizedStringUtils.localizedString(
                Dico.KEYS.USER_REGISTER_BT,
                language
              )}
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

export default MockPage;
