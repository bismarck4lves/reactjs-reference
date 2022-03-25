import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import MUITextField, { TextFieldProps } from "@mui/material/TextField";
import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";
import ReactInputMask from "react-input-mask";
import Label from "./Label";

export type CustomTextField = TextFieldProps & {
  mask?: string;
  max?: any;
  min?: any;
};
const TextField: React.FC<CustomTextField> = ({
  name,
  label,
  mask,
  max,
  min,
  value,
  variant="outlined",
  size="small",
  ...rest
}) => {
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
      {label ? <Label>{label}</Label> : <></>}
      {mask ? (
        <ReactInputMask mask={mask} onChange={() => {}} {...rest}>
          {(inputProps) => (
            <MUITextField
              {...inputProps}
              inputRef={inputRef}
              value={value}
              id={fieldName}
              variant={variant}
              size={size}
              defaultValue={defaultValue}
            />
          )}
        </ReactInputMask>
      ) : (
        <MUITextField
          inputRef={inputRef}
          id={fieldName}
          value={value}
          variant={variant}
          size={size}
          defaultValue={defaultValue}
          InputProps={{ inputProps: { min, max } }}
          {...rest}
        />
      )}
      <FormHelperText id="component-error-text">{error}</FormHelperText>
    </FormControl>
  );
};

export default TextField;
