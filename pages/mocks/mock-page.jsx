import React, { useState, useEffect } from "react";

import AppLayout from "../../app/main/AppLayout";
import {
  ButtonOptions,
  IconOptions,
  Button,
  ButtonIcon,
  Icon,
  Select,
  ThemeManager,
  LanguageManager,
  LocalizedStringUtils
} from "../../app-core";

import { BodyProvider, Dico } from "../../app-settings";
import MockDataSelect from "./mock-data-select";

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
 * Mock Select
 */
const MockSelectComponent = React.memo(({ theme }) => {
  const [value, setValue] = useState(MockDataSelect[0]);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${value.label}`;
  });
  return (
    <Select
      theme={theme}
      options={MockDataSelect}
      value={value}
      onChange={selectedOption => setValue(selectedOption)}
    />
  );
});

/**
 * Mock Component
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
    <MockSelectComponent theme={theme} />
  </div>
));

/**
 * Mock Page
 */
const MockPage = () => (
  <ThemeConsumer>
    {({ theme, toggleTheme }) => (
      <LanguageConsumer>
        {language => (
          <div>
            <AppLayout type={BodyTypes.mock} />
            <MockComponent
              theme={theme}
              language={language}
              toggleTheme={toggleTheme}
            />
          </div>
        )}
      </LanguageConsumer>
    )}
  </ThemeConsumer>
);

export default MockPage;
