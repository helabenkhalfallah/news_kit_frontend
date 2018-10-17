import * as React from "react";
import {
  View,
  Artboard,
} from "react-sketchapp"; // prettier-ignore

import HomeStyle from "../styles/HomeStyle";

/* eslint-disable  react/jsx-filename-extension */
const HomeMobile = () => (
  <Artboard name="Home Mobile" style={HomeStyle.mobile}>
    <View />
  </Artboard>
);

export default HomeMobile;
