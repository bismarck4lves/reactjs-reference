import React from "react";
import Snackbar from "./components/Snackbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastProvider } from "./contexts/ToastContext";
import Theme from "./core/Theme";
import Docs from "./pages/Docs";
const App: React.FC = () => {
  return (
    <ToastProvider>
      <ThemeProvider>
        <Theme>
        <Docs/>
        {/* Final */}
        <Snackbar />
        </Theme>
      </ThemeProvider>
    </ToastProvider>
  );
};

export default App;
