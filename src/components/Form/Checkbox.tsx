import MuiCheckbox, { CheckboxProps } from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from "@mui/material/FormHelperText";
import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";

interface CustomCheckBoxProps extends CheckboxProps{
  label: string
}

const Checkbox: React.FC<CustomCheckBoxProps> = ({ name,checked, label, value, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const defaultChecked = defaultValue === value

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.checked
      },
      clearValue: ref => {
        ref.current.checked = defaultChecked
      },
      setValue: (ref, value) => {
        ref.current.checked = value
      },
    })
  }, [defaultValue, fieldName, registerField, defaultChecked])

  return (
    <FormControl error variant="standard" style={{ width: "100%" }}>
      <FormControlLabel control={
         <MuiCheckbox 
         inputRef={inputRef}
         value={value}
         defaultChecked={defaultValue} 
         checked={checked}
         {...rest} 
        />
      } label={label} />
     
      <FormHelperText id="component-error-text">{error}</FormHelperText>
    </FormControl>
  );
};

export default Checkbox;
