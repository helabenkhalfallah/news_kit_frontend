import React from "react";

// langugage options
const Languages = {
  default: {
    key: "en",
    label: "English",
    flag: "en.svg"
  },
  english: {
    key: "en",
    label: "English",
    flag: "en.svg"
  },
  french: {
    key: "fr",
    label: "Français",
    flag: "fr.svg"
  },
  spanish: {
    key: "es",
    label: "Espagnol",
    flag: "es.svg"
  }
};

// app language
const AppLanguage = Languages.spanish;

// language context
const LanguageContext = React.createContext({
  language: Languages.default // default
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
