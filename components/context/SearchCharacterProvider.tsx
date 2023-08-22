"use client";
import { useState } from "react";
import { SearchCharacterContext } from "./SearchCharacterContext";

interface Props {
  children: React.ReactNode;
}

export const SearchCharacterProvider = ({ children }: Props) => {
  const [search, setSearch] = useState<string>("");
  const changeValueInput = (value: string) => {
    setSearch(value);
  };

  const value = {
    changeValueInput,
    search,
  };

  return (
    <SearchCharacterContext.Provider value={value}>
      {children}
    </SearchCharacterContext.Provider>
  );
};
