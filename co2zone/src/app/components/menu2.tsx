import React from 'react';

export default function menu2() {
   

    return (
        <div className='sm:relative fixed bg-blueDark hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  rounded-3xl border border-blueDark border-solid border-2 m-[1vh] text-blueExtraLight z-10'>
            <a className='text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info#WhatIsCo2">What is CO2?</a>
            <a className='text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info#WhatDoesCo2Do">What does CO2 do?</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info#HowIsItMonitored">How is it monitored?</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info#CurrentResearch">Current research on CO2 Emissions</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info#OtherInfluences">What else influences our Environment ?</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info#CO2Equivalents">CO2 Equivalents</a>
        </div> 
    );
}
