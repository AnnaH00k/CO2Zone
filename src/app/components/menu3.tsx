import React from 'react';
import { useTranslation } from "react-i18next";


export default function menu3() {
   
    const { t } = useTranslation("");

    return (
        <div className='sm:relative fixed bg-blueDark hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  rounded-3xl border border-blueDark border-solid border-2 m-[1vh] ml-[12vw] text-blueExtraLight z-10'>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/actions"> {t("menu3-1")}</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/actions#ActionCompanies">{t("menu3-2")}</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/actions#ActionGovernments"> {t("menu3-3")}</a>
        </div>     
    );
}
