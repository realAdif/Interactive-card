import { createContext, useContext, useState, useEffect } from 'react';

const appContext = createContext({});
import { ReactNode } from 'react';

function AppContextProvider({ children }: { children: ReactNode }) {
  //  default theme
  const [theme, setTheme] = useState<'winter' | 'dark'>('dark');

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <appContext.Provider value={{ theme, setTheme, counter, setCounter }}>
      {children}
    </appContext.Provider>
  );
}

const useAppContext = () => useContext(appContext);
export { AppContextProvider, useAppContext };
