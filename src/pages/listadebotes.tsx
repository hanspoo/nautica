import React, { useEffect } from "react";
import find from "./data/BoteDatabase";
import { BoatDetails } from "./pages/Boatdetails";
import { useScrollRestoration } from "gatsby";

export default function Component(props: any) {
  const match = /bote=(\w+)/.exec(props.location.search);

  if (!match) return <p>Bote {props.location.search} url inválida</p>;

  const bote = find(match[1]);
  if (!bote) return <p>Bote {match[1]} no encontrado en base de datos</p>;

  return <BoatDetails bote={bote} />;
}
