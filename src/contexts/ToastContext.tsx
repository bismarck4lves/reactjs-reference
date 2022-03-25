import React, { useState } from "react";

type ContextProps = {
  open: boolean;
  message: string;
  error: boolean;
  openToast: (message: string) => void;
  errorToast: (message: string) => void;
  closeToast: () => void;
};

const Context = React.createContext({} as ContextProps);

export function ToastProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const openToast = (message: string) => {
    setOpen(true);
    setError(false);
    setMessage(message);
  };

  const errorToast = (message: string) => {
    setOpen(true);
    setError(true);
    setMessage(message);
  };

  const closeToast = () => {
    setOpen(false);
    setMessage("");
  };

  return (
    <Context.Provider value={{ openToast, closeToast, open, message , error, errorToast}}>
      {children}
    </Context.Provider>
  );
}

export function useToastContext(): ContextProps {
  return React.useContext(Context);
}
