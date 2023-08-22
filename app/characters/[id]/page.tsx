import React from "react";
import { getCharacterById } from "../services";
import { CardDetailComponent } from "@/components";

const fetchCharacterById = async (id: string) => {
  const character = await getCharacterById(id);

  return character;
};
async function Character({ params }: { params: { id: string } }) {
  const character = await fetchCharacterById(params.id);

  return (
    <div className="grid  mt-5">
      <CardDetailComponent data={character} />
    </div>
  );
}

export default Character;
