import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import NativeSelect from "@mui/material/NativeSelect";
import { SelectProps } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";
import Label from "./Label";


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "8px 10px",
    width: "100%",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
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
    "&:focus": {
      borderRadius: 4,
      borderColor: theme.palette.primary.main,
    },
  },
}));

interface SelectFieldProps extends SelectProps {
  options: any[];
  itemText: string;
  itemValue: string;
  startWith?: string;
}
export default function SelectField({
  name,
  itemValue,
  itemText,
  options,
  startWith,
  label,
  size="small",
  onChange,
}: SelectFieldProps) {
  const { fieldName, defaultValue, registerField } = useField(name);
  const optionRefs = useRef<HTMLOptionElement[]>([]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: optionRefs.current,
      getValue: (refs: HTMLOptionElement[]) => {
        return refs.find((ref) => ref?.selected)?.value || "";
      },
      setValue: (refs: HTMLOptionElement[], value: string) => {
        const option = refs.find((ref) => ref.value === value);

        if (option) option.selected = true;
      },
      clearValue: (refs: HTMLOptionElement[]) => {
   
        refs.forEach((ref) => (ref.selected = false));
      },
    });
  }, [fieldName, registerField]);

  const startsWith = () => {
    if (startWith) return startWith;
    return "selecione";
  };


  return (
    <FormControl error variant="standard" style={{ width: "100%" }}>
      <Label>{label}</Label>
      <NativeSelect
        id="demo-customized-select-native"
        name={name}
        input={<BootstrapInput />}
        defaultValue={defaultValue}
        size={size}
        // @ts-ignore
        onChange={onChange}
      >
        <option aria-label="None" value="">
          {startsWith()}
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option[itemValue]}
            ref={(reference) => optionRefs.current.push(reference)}
          >
            {option[itemText]}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
