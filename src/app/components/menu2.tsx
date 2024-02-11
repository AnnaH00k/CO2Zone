import React from "react";
import { useTranslation } from "react-i18next";

export default function menu2() {
  const { t } = useTranslation("");

  return (
    <div className="sm:relative fixed bg-blueDark hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  rounded-3xl border border-blueDark border-solid border-2 m-[1vh] text-blueExtraLight z-10">
      <a
        className="text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/co2Info#WhatIsCo2"
      >
        {" "}
        {t("menu2-1")}
      </a>
      <a
        className="text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/co2Info#WhatDoesCo2Do"
      >
        {" "}
        {t("menu2-2")}
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/co2Info#HowIsItMonitored"
      >
        {" "}
        {t("menu2-3")}
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/co2Info#CurrentResearch"
      >
       {t("menu2-4")}
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/co2Info#OtherInfluences"
      >
        {t("menu2-5")}
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/co2Info#CO2Equivalents"
      >
         {t("menu2-6")}
      </a>
    </div>
  );
}
