import React from "react";
import MenuHeader from "../../components/menuHeader";

export default function actionsPage() {
  return (
    <main>
      <MenuHeader />

      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-4xl m-4  ">
          Actions
        </h1>

        <div id="ActionIndividuals" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
              What can Individuals do?
            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>

          <div id="ActionCompanies" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
              What can Companies do?
            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>


        <div id="ActionGovernments" className="sm:mt-[10vh] flex  flex-col items-center justify-center h-[100vh] w-[80vw]">
            <h1 className="text-blueExtraLight text-xl m-4  ">
              What can governments do?       
            </h1>
            <h2 className="text-blueLight text-md m-4" > It is responsible for part of the climate change</h2>
          </div>


      </div>
    </main>
  );
}
