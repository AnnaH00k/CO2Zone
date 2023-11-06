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

          <div id="WhatDoesCo2Do" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
              What does CO2 do? 
            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>

          <div id="HowIsItMonitored" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
              How is it monitored?
            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>

        <div id="CurrentResearch" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
              Current research on CO2 Emissions
            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>

          <div id="OtherInfluences" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
            What else influences our Environment ?
            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>


        <div id="CO2Equivalents" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
              CO2 Equivalents       
            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>


        
      
      </div>
    </main>
  );
}
