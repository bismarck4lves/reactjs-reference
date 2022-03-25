import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useField } from "@unform/core";
import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ReactDropzoneInputProps {
  name: string;
  imagem?: any;
  subTitle?: React.ReactNode | string;
  onChange?: () => any;
  size?: number;
}

interface InputRefProps extends HTMLInputElement {
  acceptedFiles: File[];
}

export const ReactDropzoneInput: React.FC<ReactDropzoneInputProps> = ({
  name,
  imagem,
  subTitle,
  onChange,
  size = 60,
}) => {
  const inputRef = useRef<InputRefProps>(null);
  const { fieldName, registerField, defaultValue = [], error } = useField(name);

  const [, setAcceptedFiles] = useState<File[]>(defaultValue);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (onDropAcceptedFiles) => {
      if (inputRef.current) {
        inputRef.current.acceptedFiles = onDropAcceptedFiles;
        setAcceptedFiles(onDropAcceptedFiles);
        onChange();
      }
    },
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: InputRefProps) => {
        return ref.acceptedFiles || [];
      },
      clearValue: (ref: InputRefProps) => {
        ref.acceptedFiles = [];
        setAcceptedFiles([]);
      },
      setValue: (ref: InputRefProps, value) => {
        ref.acceptedFiles = value;
        setAcceptedFiles(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <div
      onClick={() => inputRef.current?.click()}
      style={{ cursor: "pointer" }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Avatar
          alt="userProfile"
          src={imagem}
          sx={{ width: size, height: size }}
        />
      </Stack>

      <div {...getRootProps()}>
        <input {...getInputProps()} accept="image/*" ref={inputRef} />
        <Typography paragraph align="center">{subTitle}</Typography>
      </div>
    </div>
  );
};

export default ReactDropzoneInput;
