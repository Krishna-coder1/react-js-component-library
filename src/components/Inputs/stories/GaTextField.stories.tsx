import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextField from "../GaTextField";
import FieldVariant from "../field-variant";
import FieldSize from "../field-size";
import FieldType from "../field-type";

export default {
  title: "GaTextField",
  component: TextField,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState("");
  args.onChange = (e: any) => setValue(e.target.value);

  args.value = value;
  console.log(value);

  return <TextField {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  title: "Title",
  placeholder: "Placeholder",
  readOnly: false,
  error: false,
  required: false,
  helperText: "Helper text",
  startAdornment: "",
  onChange: (e: any) => {
    console.log(e.target.value);
  },
  value: "",
  variant: FieldVariant.FILLED,
  size: FieldSize.SMALL,
  isDisabled: false,
  inputBoxType: FieldType.SEARCH_BOX,
  gstInputField: false,

  handleGstSuccess: () =>
    console.log("I'll be called only if gst number is success"),
};
