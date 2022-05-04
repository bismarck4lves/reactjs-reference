import React from 'react';

type ContextProps = {
    isConnected: boolean;
};

const Context = React.createContext({} as ContextProps);

export function ConnectionProvider({ children }) {
    
    const [isConnected, setIsConnected] = React.useState(false);

    const testConnection = React.useCallback(() => setIsConnected(navigator.onLine),[])

    React.useEffect(()=> {
        setInterval(testConnection, 4000)
    }, [])

    return <Context.Provider value={{ isConnected }}>
        {children}
    </Context.Provider>
}

export function useConnectionContext(): ContextProps {
    return React.useContext(Context);
}
