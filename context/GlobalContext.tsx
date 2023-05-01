import { createContext } from "react";

interface IGlobalContext {
  isMobile: boolean;
}

const GlobalContext = createContext<IGlobalContext>({
  isMobile: false,
});

export default GlobalContext;