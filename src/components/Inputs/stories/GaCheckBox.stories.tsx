import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "../GaCheckBox";
import FieldColor from "../field-color";
import FieldSize from "../field-size";
import { useState } from "react";

export default {
  title: "GaCheckbox",
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);
  args.onChange = (e: any) => {
    console.log("Chanfed");
    setChecked(!checked);
  };
  args.checked = checked;
  return <Checkbox {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  color: FieldColor.PRIMARY,
  size: FieldSize.SMALL,
  isDisabled: false,
  value: 2,
  checked: false,
  label: "Label",
};
