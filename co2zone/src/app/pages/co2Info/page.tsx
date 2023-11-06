import React from "react";
import MenuHeader from "../../components/menuHeader";

export default function co2InfoPage() {
  return (
    <main>
      <MenuHeader />

      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-4xl  m-4  ">
          CO2 Infos
        </h1>
        <h1 className="text-blueExtraLight text-xl m-4  ">
          What does CO2 do?
        </h1>
        <h1 className="text-blueExtraLight text-xl  m-4  ">
        How is it monitored?
        </h1>
        <h1 className="text-blueExtraLight text-xl  m-4  ">
        Current research on CO2 Emissions
        </h1>
        <h1 className="text-blueExtraLight text-xl  m-4  ">
        What else influences our Environment ?
        </h1>
        <h1 className="text-blueExtraLight text-xl  m-4  ">
        CO2 Equivalents       
        </h1>
        <h1 className="text-blueLight text-xl  m-4  ">
        Global Cooperation on Climate Change
        </h1>
        <h1 className="text-blueLight text-xl  m-4  ">
        Emission Trading Schemes
        </h1>
        <h1 className="text-blueLight text-xl  m-4  ">
        Geoengineering solutions
        </h1>
        <h1 className="text-blueLight text-xl  m-4  ">
        Climate Change Denial
        </h1>
      </div>
    </main>
  );
}
