import { createContext, useState } from "react";

export const SelectTypeProductContext = createContext();

export const SelectTypeProductProvider = ({ children }) => {
  const [type, setType] = useState(null);

  return (
    <SelectTypeProductContext.Provider value={{ type, setType }}>
      {children}
    </SelectTypeProductContext.Provider>
  );
};
