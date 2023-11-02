import React from "react";
import MenuHeader from "../../components/menuHeader";

export default function co2InfoPage() {
  return (
    <main>
      <MenuHeader />

      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-4xl animate-pulse m-4  ">
          CO2 Infos
        </h1>
      </div>
    </main>
  );
}
