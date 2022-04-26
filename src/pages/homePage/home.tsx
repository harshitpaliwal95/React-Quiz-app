import React from "react";
import { CategoryCard } from "../../components";

export const Home = () => {
  return (
    <main>
      <div className="grid-two">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </main>
  );
};
