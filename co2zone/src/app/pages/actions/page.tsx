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
      </div>
    </main>
  );
}
