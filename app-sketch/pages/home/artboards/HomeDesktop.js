import * as React from "react";
import {
  View,
  Artboard,
} from "react-sketchapp"; // prettier-ignore

import HomeStyle from "../styles/HomeStyle";

/* eslint-disable  react/jsx-filename-extension */
const HomeDesktop = () => (
  <Artboard name="Home Desktop" style={HomeStyle.desktop}>
    <View />
  </Artboard>
);

export default HomeDesktop;
