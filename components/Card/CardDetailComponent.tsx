"use client";

import React from "react";
import { Character } from "@/app/characters/models";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface Props {
  data: Character;
}
function CardDetailComponent({ data }: Props) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{data?.species}</p>
        <small className="text-default-500">{data?.status}</small>
        <h4 className="font-bold text-large">{data?.name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={data?.image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}

export default CardDetailComponent;
