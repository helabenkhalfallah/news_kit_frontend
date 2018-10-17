import { StyleSheet } from "react-sketchapp";
import designSystem from "../../../design-system/designSystem";

// import design system
const { screenSize } = designSystem;

// define home style
const HomeStyle = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  desktop: {
    backgroundColor: "yellow",
    width: screenSize.desktopWidth,
    height: screenSize.desktopHeight,
    margin: "50px"
  },
  tablette: {
    backgroundColor: "blue",
    width: screenSize.tabletteWidth,
    height: screenSize.tabletteHeight,
    margin: "50px"
  },
  mobile: {
    backgroundColor: "magenta",
    width: screenSize.mobileWidth,
    height: screenSize.mobileHeight,
    margin: "50px"
  }
});

export default HomeStyle;
