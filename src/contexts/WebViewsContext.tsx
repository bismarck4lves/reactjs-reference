import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";

type ContextProps = {
    isMobile: boolean
}

const Context = React.createContext({} as ContextProps)

export const WebViewProvider: React.FC = ({children}) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

    return <Context.Provider value={{isMobile:!isMobile}}>
        {children}
    </Context.Provider>
}


export function useWebViewContext(): ContextProps {
    return React.useContext(Context);
}
  