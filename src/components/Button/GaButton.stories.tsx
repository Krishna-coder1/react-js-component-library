import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./GaButton";
import GaButtonColor from "./button-color";
import GaButtonSize from "./button-size";
import GaButtonVariant from "./button-variant";
export default {
  title: "GaButton",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: "Hello World!",
  color: GaButtonColor.PRIMARY,
  size: GaButtonSize.SMALL,
  variant: GaButtonVariant.CONTAINED,
  onClick: (e) => console.log(e),
};
