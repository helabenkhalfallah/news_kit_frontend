import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs } from "@storybook/addon-knobs";

// ui lib
import Components from "./stories";

// stories
const stories = storiesOf("UI Kit", module);
const { Button, ButtonIcon, SideMenu } = Components;

// prepare story board
stories
  .addDecorator((story, context) => story(context))
  .addDecorator(withKnobs)
  .add("Button", withReadme(...Button))
  .add("Button Icon", withReadme(...ButtonIcon))
  .add("SideMenu", withReadme(...SideMenu));
