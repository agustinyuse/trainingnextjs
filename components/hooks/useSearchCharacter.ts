import { useContext } from "react";
import { SearchCharacterContext } from "../context/SearchCharacterContext";

export const useSearchCharacter = () => {
  const { search } = useContext(SearchCharacterContext);

  return {
    search,
  };
};
