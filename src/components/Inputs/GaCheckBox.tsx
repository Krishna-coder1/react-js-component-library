import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import FieldColor from "./field-color";
import FieldSize from "./field-size";
import { ChangeEvent } from "react";
import React from "react";

type Props = {
  color?: FieldColor;
  size?: FieldSize;
  isDisabled?: boolean;
  value?: string | number;
  onChange: Function;
  checked?: boolean;
  label?: string;
};
const GaCheckBox: React.FC<Props> = ({
  color = FieldColor.PRIMARY,
  size = FieldSize.MEDIUM,
  isDisabled = false,
  value = "",
  onChange,
  checked = false,
  label = "",
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          value={value}
          checked={checked}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
          color={color}
          size={size}
          disabled={isDisabled}
        />
      }
      label={label}
    />
  );
};

export default GaCheckBox;
