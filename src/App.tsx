import React from "react";
import { BrowserRouter } from "react-router-dom";
import Snackbar from "./components/Snackbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastProvider } from "./contexts/ToastContext";
import Theme from "./core/Theme";
import Routes from "./routes";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ThemeProvider>
          <Theme>
            <Routes />
            <Snackbar />
          </Theme>
        </ThemeProvider>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
