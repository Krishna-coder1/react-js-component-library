import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import FieldVariant from "./field-variant";
import FieldSize from "./field-size";
import FieldType from "./field-type";

type Props = {
  title?: string;
  placeholder?: string;
  readOnly?: boolean;
  error?: boolean;
  required?: boolean;
  helperText?: string;
  startAdornment?: any;
  onChange: Function;
  value: string | number;
  variant?: FieldVariant;
  size?: FieldSize;
  isDisabled?: boolean;
  gstInputField?: boolean;
  inputBoxType?: FieldType;
  handleGstError?: Function | undefined;
  handleGstSuccess?: Function | undefined;
};

function gstValidator(
  value: any,
  setIsGstNumber: React.Dispatch<React.SetStateAction<boolean>>,
  handleGstError: Function | undefined,
  handleGstSuccess: Function | undefined
) {
  const gstPattern =
    /^([0][1-9]|[1-2][0-9]|[3][0-7])([A-Z]{5})([0-9]{4})([A-Z]{1}[1-9A-Z]{1})([Z]{1})([0-9A-Z]{1})+$/;
  let isGst = gstPattern.test(value);
  console.log("IS GST", isGst);
  setIsGstNumber(isGst);
  if (!isGst) {
    handleGstError && handleGstError();
  } else {
    handleGstSuccess && handleGstSuccess();
  }
}

const GaTextField: React.FC<Props> = ({
  title = "",
  placeholder = "",
  readOnly = false,
  error = false,
  required = false,
  helperText = "",
  startAdornment,
  onChange,
  value = "",
  variant = FieldVariant.OUTLINED,
  size = FieldSize.MEDIUM,
  isDisabled = false,
  inputBoxType = FieldType.TEXT_BOX,
  gstInputField = false,
  handleGstError,
  handleGstSuccess,
}) => {
  const [isGstNumber, setIsGstNumber] = useState(false);
  useEffect(() => {
    gstInputField &&
      gstValidator(value, setIsGstNumber, handleGstError, handleGstSuccess);
  }, [value, gstValidator, gstInputField, isGstNumber]);
  return (
    <TextField
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: `${inputBoxType == FieldType.SEARCH_BOX && "20px"}`,
        },
      }}
      fullWidth
      error={gstInputField ? !isGstNumber : error}
      required={required}
      disabled={isDisabled}
      size={size}
      label={title}
      InputProps={{
        readOnly: readOnly,
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
      }}
      variant={variant}
      placeholder={placeholder}
      onChange={(event) => onChange(event)}
      helperText={helperText}
      value={value}
    />
  );
};
export default GaTextField;
