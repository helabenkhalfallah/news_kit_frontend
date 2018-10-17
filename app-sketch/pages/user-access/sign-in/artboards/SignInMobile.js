import * as React from "react";
import {
  View,
  Artboard,
} from "react-sketchapp"; // prettier-ignore

import SignInStyle from "../styles/SignInStyle";

/* eslint-disable  react/jsx-filename-extension */
const SignInDesktop = () => (
  <Artboard name="Signin Mobile" style={SignInStyle.mobile}>
    <View />
  </Artboard>
);

export default SignInDesktop;
