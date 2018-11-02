import React from "react";
import Localizations from "../localized-strings/Localizations";

// app language
const AppLanguage = Localizations.english;

// language context
const LanguageContext = React.createContext({
  language: Localizations.default // default
});

const LanguageProvider = LanguageContext.Provider;
const LanguageConsumer = LanguageContext.Consumer;

const LanguageManager = {
  AppLanguage,
  LanguageContext,
  LanguageProvider,
  LanguageConsumer
};

export default LanguageManager;
