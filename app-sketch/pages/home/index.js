import * as React from "react";
import { Artboard } from "react-sketchapp";

import HomeDesktop from "./artboards/HomeDesktop";
import HomeTablette from "./artboards/HomeTablette";
import HomeMobile from "./artboards/HomeMobile";
import HomeStyle from "./styles/HomeStyle";

const Home = () => (
  <Artboard name="Home" style={HomeStyle.container}>
    <HomeDesktop />
    <HomeTablette />
    <HomeMobile />
  </Artboard>
);

export default Home;
