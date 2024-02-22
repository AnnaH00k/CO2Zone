import React from "react";
import { useTranslation } from "react-i18next";

export default function menu4() {
  const { t, i18n } = useTranslation();
    const isRTL = i18n.dir().toLowerCase() === 'rtl';
    const marginClass = isRTL ? 'mr-[25vw]' : 'ml-[20vw]';

  return (
    <div className={`sm:relative fixed bg-blueDark hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  rounded-3xl border border-blueDark border-solid border-2 m-[1vh] ${marginClass} text-blueExtraLight z-10`}>
    <a
        className="text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/interesting#CooperationOnClimateChange"
      >
        {" "}
        {t("menu4-1")}
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/interesting#EmissionTradingSchemes"
      >
        {t("menu4-2")}
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/interesting#Geoengineering"
      >
        {t("menu4-3")}
      </a>
      <a
        className="text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]"
        href="/interesting#ClimateChangeDenial"
      >
        {t("menu4-4")}
      </a>
    </div>
  );
}
