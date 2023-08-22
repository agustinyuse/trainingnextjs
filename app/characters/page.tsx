import { ListOfCardsComponent } from "@/components";
import { getCharacterByName } from "./services/character.service";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

async function fetchCharactersByName(name: string | undefined) {
  const characters = await getCharacterByName(name);

  return characters;
}

async function Characters(props: Props) {
  const { q } = props.searchParams as { [key: string]: string };
  const characters = await fetchCharactersByName(q);

  if (!characters) {
    return (
      <div
        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p className="font-bold">No se han encontrado resultados</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="grid mt-5">
        <ListOfCardsComponent characters={characters}></ListOfCardsComponent>
      </div>
    </div>
  );
}

export default Characters;
