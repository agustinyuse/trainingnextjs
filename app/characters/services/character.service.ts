import { Character } from "../models";

const sleep = async (milliseconds: number) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, milliseconds);
  });
};

export const getCharacters = (): Promise<Character[]> => {
  const url = "https://rickandmortyapi.com/api/character";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);
};

export const getCharacterById = (id: string): Promise<Character> => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

export const getCharacterByName = async (
  name: string | undefined
): Promise<Character[]> => {
  let url = `https://rickandmortyapi.com/api/character/`;
  if (name) {
    url = `${url}?name=${name}`;
  }

  //await sleep(5000);

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);
};
