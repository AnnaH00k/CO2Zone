import React from "react";
import MenuHeader from "../../components/menuHeader";

export default function interestingPage() {
  return (
    <main>
      <MenuHeader />
      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-4xl  m-4  ">
          Interesting
        </h1>

          <div id="CooperationOnClimateChange" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
            Global Cooperation on Climate Change
            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>

          <div id="EmissionTradingSchemes" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
                Emission Trading Schemes
            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>

        <div id="Geoengineering" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
                Geoengineering solutions?            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>

          <div id="ClimateChangeDenial" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
                Climate Change Denial
            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>  
      </div>
    </main>
  );
}
