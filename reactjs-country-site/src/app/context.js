import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <AppContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
