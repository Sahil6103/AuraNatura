import React from "react";
import { Hero } from "./Hero";
import { Fragrance } from "./Fragrance";
import { Fragrance2 } from "./Fragrance2";
import { Collection } from "./Collection";
import { MenCollection } from "./MenCollection";
import { WomanCollection } from "./WomanCollection";
import { Features } from "./Features";
import { History } from "./History";

export const Home = () => {
  return (
    <>
      <Hero />
      <Fragrance />
      <Fragrance2 />
      <Collection />
      <MenCollection />
      <WomanCollection />
      <History />
      <Features />
    </>
  );
};
