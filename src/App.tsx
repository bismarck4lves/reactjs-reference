import { AuthProvider } from "contexts/AuthContext";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Snackbar from "./components/Snackbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastProvider } from "./contexts/ToastContext";
import Theme from "./core/Theme";
import "./main.css";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <ThemeProvider>
            <Theme>
              <Routes />
              <Snackbar />
            </Theme>
          </ThemeProvider>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
