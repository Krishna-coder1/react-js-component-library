import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GaRadioButton from "./GaRadioButton";
import GaRadioButtonColor from "./button-color";
import ButtonSize from "./button-size";
import RadioButtonColor from "./button-color";

export default {
  title: "GaRadioButton",
  component: GaRadioButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GaRadioButton>;

const Template: ComponentStory<typeof GaRadioButton> = (args) => (
  <GaRadioButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  color: RadioButtonColor.PRIMARY,
  size: ButtonSize.SMALL,
  value: "value",
  onChange: (e) => console.log(e),
};
