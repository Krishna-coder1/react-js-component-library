import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FieldVariant from "./field-variant";
import FieldSize from "./field-size";
import OutputValue from "./output-value";

type Option = {
  value: string;
  key: any;
};

type Props = {
  title?: string;
  onChange: Function;
  value: string | number;
  variant?: FieldVariant;
  size?: FieldSize;
  options: Option[];
  outputValue?: OutputValue;
  isDisabled?: boolean;
  helperText?: string;
  error?: boolean;
};

const GaSelectField: React.FC<Props> = ({
  title,
  onChange,
  value = "",
  variant = FieldVariant.STANDARD,
  size = FieldSize.MEDIUM,
  options,
  outputValue = OutputValue.VALUE,
  isDisabled = false,
  helperText = "",
  error = false,
}) => {
  return (
    <FormControl sx={{ width: "100%" }} error={error}>
      <InputLabel>{title}</InputLabel>
      <Select
        disabled={isDisabled}
        size={size}
        label={title}
        variant={variant}
        onChange={(event: SelectChangeEvent<string | number>) =>
          onChange(event)
        }
        value={value}
      >
        {options.map((option) => (
          <MenuItem
            key={option.key}
            value={outputValue == OutputValue.KEY ? option.key : option.value}
          >
            {option.value}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
export default GaSelectField;
