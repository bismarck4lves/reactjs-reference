import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MuiSwitch, { SwitchProps } from "@mui/material/Switch";
import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";

interface CustomSwitchProps extends SwitchProps {
  label?: string;
}
const Switch: React.FC<CustomSwitchProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <FormControl error variant="standard" style={{ width: "100%" }}>
      <FormControlLabel
        control={
          <MuiSwitch
            defaultChecked={defaultValue}
            inputRef={inputRef}
            id={fieldName}
            {...rest}
          />
        }
        label={label}
      />
      <FormHelperText id="component-error-text">{error}</FormHelperText>
    </FormControl>
  );
};

export default Switch;
