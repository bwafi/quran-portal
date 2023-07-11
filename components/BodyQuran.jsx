import React from "react";
import CardList from "./CardList";

const BodyQuran = () => {
  return (
    <section className="w-full my-16 mx-auto">
      <div className="justify-center w-full mx-auto pt-5 flex gap-5 flex-wrap border-t">
        <CardList />
      </div>
    </section>
  );
};

export default BodyQuran;
