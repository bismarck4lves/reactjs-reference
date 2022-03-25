import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextareaAutosize, {
  TextareaAutosizeProps
} from "@mui/material/TextareaAutosize";
import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";
import Label from "./Label";

const textAreaStyles = {
  fontSize: 16,
  padding: "8px 10px",
  width: "100%",
  borderRadius: 4,
  border: "1px solid #ced4da",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};

interface CustomTextArea extends TextareaAutosizeProps {
  label?: string;
}
const TextArea: React.FC<CustomTextArea> = ({
  name,
  minRows = 5,
  label,
  onChange,
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
      <Label>{label}</Label>
      <TextareaAutosize
        ref={inputRef}
        defaultValue={defaultValue}
        id={fieldName}
        minRows={minRows}
        placeholder=""
        style={textAreaStyles}
        onChange={onChange}
      />
      <FormHelperText id="component-error-text">{error}</FormHelperText>
    </FormControl>
  );
};

export default TextArea;
