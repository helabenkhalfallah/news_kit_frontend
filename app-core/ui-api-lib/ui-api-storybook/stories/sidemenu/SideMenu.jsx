import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
// import { action } from '@storybook/addon-actions'

import UIUtils from "../../..";
import Readme from "./README.md";

// side menu settings
const { OptionalSelect, Components } = UIUtils;
const { SideMenu } = Components;

const Component = () => (
  <SideMenu className={text("ClassName", "")} open={boolean("Open", false)}>
    I am a SideMenu, test me !
  </SideMenu>
);

export default [Readme, Component];
