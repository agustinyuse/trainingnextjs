"use client";

import React, { Suspense } from "react";
import { Card, Image, CardFooter, Button, Link } from "@nextui-org/react";
import { Character } from "@/app/characters/models";
import { useRouter } from "next/navigation";

interface Props {
  data: Character;
}

async function CardComponent({ data }: Props) {
  const router = useRouter();
  return (
    <Card isFooterBlurred radius="md" className="border-none">
      <Image
        alt="Woman listing to music"
        className="object-fill"
        src={data.image}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{data.name}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          onClick={() =>
            router.push(`/characters/${data.id}`, { scroll: false })
          }
        >
          Ver
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardComponent;
