"use client";

import { Character } from "@/app/characters/models";
import React from "react";
import { CardComponent } from "..";

interface Props {
  characters: Character[];
}
function ListOfCardsComponent({ characters }: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5 w-100">
      {characters.map((character) => (
        <CardComponent key={character.id} data={character} />
      ))}
    </div>
  );
}

export default ListOfCardsComponent;
