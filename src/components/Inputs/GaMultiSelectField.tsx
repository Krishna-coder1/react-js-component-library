import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FieldSize from "./field-size";
import OutputValue from "./output-value";
import FormHelperText from "@mui/material/FormHelperText";

type Option = {
  value: string;
  key: any;
};

type Props = {
  label?: string;
  value: string[];
  onChange: Function;
  options: Option[];
  outputValue?: OutputValue;
  isDisabled?: boolean;
  error?: boolean;
  helperText?: string;
  size?: FieldSize;
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const GaMultiSelectField: React.FC<Props> = ({
  label = "",
  value,
  onChange,
  options,
  outputValue = OutputValue.VALUE,
  isDisabled = false,
  error = false,
  helperText = "",
  size = FieldSize.MEDIUM,
}) => {
  return (
    <div>
      <FormControl sx={{ width: "100%" }} error={error}>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple
          size={size}
          value={value}
          disabled={isDisabled}
          error={error}
          onChange={(event: SelectChangeEvent<string[]>) => onChange(event)}
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
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
    </div>
  );
};

export default GaMultiSelectField;
