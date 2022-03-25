import MuiAutocomplete from "@mui/material/Autocomplete";
import { TextFieldProps } from "@mui/material/TextField";
import React from "react";
import TextField from "./TextField";

type CustomAutoCompleteProps = TextFieldProps & {
  options: any[];
  onChange?: any;
  getOptionLabel?: (fn) => any;
};
const AutoComplete: React.FC<CustomAutoCompleteProps> = ({
  options,
  onChange,
  getOptionLabel,
  ...rest
}) => {
  return (
    <MuiAutocomplete
      disablePortal
      options={options}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => <TextField {...params} {...rest} />}
      renderOption={(props, option) => {
        return (
          <li {...props} key={props["data-option-index"]}>
            {props["key"]}
          </li>
        );
      }}
    />
  );
};

export default AutoComplete;
