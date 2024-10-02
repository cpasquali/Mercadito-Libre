import { createContext, useState } from "react";

export const SearchProductContext = createContext();

export const SearchProductProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchProductContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchProductContext.Provider>
  );
};
