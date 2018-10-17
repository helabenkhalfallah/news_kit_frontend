// screen size
const screenSize = {
  desktopWidth: "1025px",
  desktopHeight: "1280px",
  tabletteWidth: "768px",
  tabletteHeight: "1024px",
  mobileWidth: "320px",
  mobileHeight: "480px"
};

// spacing
export const spacing = 16;

// colors
export const colors = {
  Haus: "#F3F4F4",
  Night: "#333",
  Sur: "#96DBE4",
  "Sur a11y": "#24828F",
  Peach: "#EFADA0",
  "Peach a11y": "#E37059",
  Pear: "#93DAAB",
  "Pear a11y": "#2E854B"
};

// fonts families
const fontFamilies = {
  display: "Helvetica",
  body: "Georgia"
};

// fonts weights
const fontWeights = {
  regular: "regular",
  bold: "bold"
};

// fonts
const typeSizes = [80, 48, 36, 24, 20, 16];
export const fonts = {
  Headline: {
    color: colors.Night,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 80
  },
  "Title 1": {
    color: colors.Night,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 48
  },
  "Title 2": {
    color: colors.Night,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 36
  },
  "Title 3": {
    color: colors.Night,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24
  },
  Body: {
    color: colors.Night,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 24
  }
};

// design system
const DesignSystem = {
  colors,
  fonts,
  spacing,
  screenSize
};
export default DesignSystem;
