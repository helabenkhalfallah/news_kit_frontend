import React from "react";

import AppLayout from "../../app/main/AppLayout";
import {
  ButtonOptions,
  IconOptions,
  Button,
  ButtonIcon,
  Icon,
  Select
} from "../../app-core";

import {
  BodyProvider,
  ThemeManager,
  LanguageManager,
  LocalizedStringUtils,
  Dico
} from "../../app-settings";

const { Themes, ThemeConsumer } = ThemeManager;
const { LanguageConsumer } = LanguageManager;
const { BodyTypes } = BodyProvider;
const { intentsOptions } = ButtonOptions;
const { localizedString } = LocalizedStringUtils;

// eslint-disable-next-line prettier/prettier
const {
  primary,
  secondary,
  success,
  warning
} = intentsOptions;

// icon options
const { backgroundOptions, iconsOptions } = IconOptions;
const { light } = backgroundOptions;
const { clear, add } = iconsOptions;

/**
 * Mock Page
 */
const MockComponent = React.memo(({ theme, toggleTheme, language }) => (
  <div>
    <Button
      theme={theme}
      buttonIntent={primary}
      title={localizedString(Dico.KEYS.RESET_THEME_BT, language)}
      onClick={() => toggleTheme(Themes.default)}
    />
    <Button
      theme={theme}
      buttonIntent={secondary}
      title={localizedString(Dico.KEYS.TOGGLE_THEME_BT, language)}
      onClick={() => toggleTheme(Themes.dark)}
    />
    <Button
      theme={theme}
      buttonIntent={success}
      title={localizedString(Dico.KEYS.USER_SIGN_BT, language)}
    />
    <ButtonIcon
      theme={theme}
      buttonIntent={warning}
      icon={add}
      label={localizedString(Dico.KEYS.USER_REGISTER_BT, language)}
    />
    <Icon
      theme={theme}
      icon={clear}
      intent={primary}
      background={light}
      size="normal"
    />
    <Select />
  </div>
));

const MockPage = () => (
  <ThemeConsumer>
    {({ theme, toggleTheme }) => (
      <LanguageConsumer>
        {language => (
          <div>
            <MockComponent
              theme={theme}
              language={language}
              toggleTheme={toggleTheme}
            />
            <AppLayout type={BodyTypes.signin} />
          </div>
        )}
      </LanguageConsumer>
    )}
  </ThemeConsumer>
);

export default MockPage;
