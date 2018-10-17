import * as React from "react";
import { Artboard } from "react-sketchapp";

import SignInDesktop from "./artboards/SignInDesktop";
import SignInTablette from "./artboards/SignInTablette";
import SignInMobile from "./artboards/SignInMobile";
import SignInStyle from "./styles/SignInStyle";

const Signin = () => (
  <Artboard name="Signin" style={SignInStyle.container}>
    <SignInDesktop />
    <SignInTablette />
    <SignInMobile />
  </Artboard>
);

export default Signin;
