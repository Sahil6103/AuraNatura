import React from "react";
import { Hero } from "./Hero";
import { Fragrance } from "./Fragrance";
import { Fragrance2 } from "./Fragrance2";
import { Collection } from "./Collection";
import { MenCollection } from "./MenCollection";
import { WomenCollection } from "./WomenCollection";
import { Features } from "./Features";
import { History } from "./History";
import { UseScrollTop } from "../../Common/UseScrollTop";

export const Home = () => {
  UseScrollTop();
  return (
    <>
      <Hero />
      <Fragrance />
      <Fragrance2 />
      <Collection />
      <MenCollection />
      <WomenCollection />
      <History />
      <Features />
    </>
  );
};
