import { createContext, useState } from "react";

const GlobalContext = createContext('');

const GlobalProvider = ({ children }) => {
  const [Mode, setMode] = useState('light');
  return (
    <GlobalContext.Provider value={{ Mode, setMode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
