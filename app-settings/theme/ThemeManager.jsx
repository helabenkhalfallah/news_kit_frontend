import React from "react";

// themes
const Theme = {
  default: {
    default: "#a569bd",
    primary: "#00a7cf",
    secondary: "#ff0080",
    success: "#1cce0c",
    warning: "#ff9900",
    info: "#2196f3",
    danger: "#ff5a34",
    borderDefault: "#a569bd",
    borderPrimary: "#00a7cf",
    borderSecondary: "#ff0080",
    borderSuccess: "#1cce0c",
    borderWarning: "#ff9900",
    borderInfo: "#2196f3",
    boarderDanger: "#ff5a34",
    txtColorDefault: "#FFFFFF",
    txtColorPrimary: "#FFFFFF",
    txtColorSecondary: "#FFFFFF",
    txtColorSuccess: "#FFFFFF",
    txtColorWarning: "#FFFFFF",
    txtColorInfo: "#FFFFFF",
    txtColorDanger: "#FFFFFF",
    iconDefault: "transparent",
    iconDark: "#000000",
    iconLight: "#FAFAFA",
    iconTintBlack: "#000000",
    iconTintWhite: "#FFFFFF",
    iconTintPrimary: "#00a7cf",
    iconTintSecondary: "#ff0080",
    iconTintSuccess: "#1cce0c",
    iconTintWarning: "#ff9900",
    iconTintInfo: "#2196f3",
    iconTintDanger: "#ff5a34"
  },
  light: {
    default: "#80a569bd",
    primary: "#8000a7cf",
    secondary: "#80ff0080",
    success: "#801cce0c",
    warning: "#80ff9900",
    info: "#802196f3",
    danger: "#80ff5a34",
    borderDefault: "#a569bd",
    borderPrimary: "#00a7cf",
    borderSecondary: "#ff0080",
    borderSuccess: "#1cce0c",
    borderWarning: "#ff9900",
    borderInfo: "#2196f3",
    boarderDanger: "#ff5a34",
    txtColorDefault: "#FFFFFF",
    txtColorPrimary: "#FFFFFF",
    txtColorSecondary: "#FFFFFF",
    txtColorSuccess: "#FFFFFF",
    txtColorWarning: "#FFFFFF",
    txtColorInfo: "#FFFFFF",
    txtColorDanger: "#FFFFFF",
    iconDefault: "transparent",
    iconDark: "#000000",
    iconLight: "#FAFAFA",
    iconTintBlack: "#000000",
    iconTintWhite: "#FFFFFF",
    iconTintPrimary: "#00a7cf",
    iconTintSecondary: "#ff0080",
    iconTintSuccess: "#1cce0c",
    iconTintWarning: "#ff9900",
    iconTintInfo: "#2196f3",
    iconTintDanger: "#ff5a34"
  },
  dark: {
    default: "#000000",
    primary: "#696969",
    secondary: "#7e7e7e",
    success: "#939393",
    warning: "#a8a8a8",
    info: "#bdbdbd",
    danger: "#d3d3d3",
    borderDefault: "#a569bd",
    borderPrimary: "#00a7cf",
    borderSecondary: "#ff0080",
    borderSuccess: "#1cce0c",
    borderWarning: "#ff9900",
    borderInfo: "#2196f3",
    boarderDanger: "#ff5a34",
    txtColorDefault: "#FFFFFF",
    txtColorPrimary: "#FFFFFF",
    txtColorSecondary: "#FFFFFF",
    txtColorSuccess: "#FFFFFF",
    txtColorWarning: "#FFFFFF",
    txtColorInfo: "#FFFFFF",
    txtColorDanger: "#FFFFFF",
    iconDefault: "transparent",
    iconDark: "#000000",
    iconLight: "#FAFAFA",
    iconTintBlack: "#000000",
    iconTintWhite: "#FFFFFF",
    iconTintPrimary: "#00a7cf",
    iconTintSecondary: "#ff0080",
    iconTintSuccess: "#1cce0c",
    iconTintWarning: "#ff9900",
    iconTintInfo: "#2196f3",
    iconTintDanger: "#ff5a34"
  }
};

// app theme
const AppTheme = Theme.dark;

// theme context
const ThemeContext = React.createContext({
  theme: Theme.default // default
});

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

const ThemeManager = {
  AppTheme,
  Theme,
  ThemeContext,
  ThemeProvider,
  ThemeConsumer
};

export default ThemeManager;
