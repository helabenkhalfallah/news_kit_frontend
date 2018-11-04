import React from "react";
import Themes from "./Themes";

// app theme
const AppTheme = Themes.default;

// theme context
const ThemeContext = React.createContext({
  theme: Themes.default, // default
  toggleTheme: () => { } // prettier-ignore
});

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

const ThemeManager = {
  AppTheme,
  Themes,
  ThemeContext,
  ThemeProvider,
  ThemeConsumer
};

export default ThemeManager;
