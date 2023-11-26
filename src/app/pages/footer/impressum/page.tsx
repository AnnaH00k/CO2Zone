import React from "react";
import MenuHeader from "../../../components/menuHeader";
import Footer from "../../../components/footer";

export default function impressumPage() {
  return (
    <main>
      <MenuHeader />
      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-4xl  m-4  ">
          Impressum
        </h1>
      </div>
      <Footer />
    </main>
  );
}
