"use client";
import React, { useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/utils";

function SearchComponent() {
  //const { search, changeValueInput } = useContext(SearchCharacterContext);
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    setSearchValue(searchParams?.get("q") || "");
  }, [searchParams, setSearchValue]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/characters", newParams));
  }

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <form
        onSubmit={onSubmit}
        className="relative w-full lg:w-full xl:w-full flex items-center"
      >
        <Input
          type="text"
          name="search"
          label="Personaje"
          placeholder="Ingrese personaje"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button className="ml-5" type="submit">
          Buscar
        </Button>
      </form>
    </div>
  );
}

export default SearchComponent;
