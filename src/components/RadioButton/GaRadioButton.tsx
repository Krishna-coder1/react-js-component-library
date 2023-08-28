import Radio from "@mui/material/Radio";
import React from "react";
import ButtonSize from "./button-size";
import RadioButtonColor from "./button-color";

type Props = {
  value?: string;
  size?: ButtonSize;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: RadioButtonColor;
  label?: React.ReactNode;
};
const GaRadioButton: React.FC<Props> = ({
  value,
  size = ButtonSize.SMALL,
  checked,
  onChange,
  color,
  label = "",
}) => {
  return (
    <div style={{ display: "flex" }}>
      <Radio
        value={value}
        size={size}
        checked={checked}
        onChange={onChange}
        color={color}
      />
      <div style={{ paddingTop: "8px" }}>{label}</div>
    </div>
  );
};

export default GaRadioButton;
