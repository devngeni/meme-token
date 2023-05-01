import React, { useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ isMobile }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;