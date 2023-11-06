import React from 'react';

export default function menu2() {
   

    return (
        <div className='sm:relative fixed bg-blueDark hover:bg-blueExtraDark flex flex-col flex flex-col items-start w-auto h-auto  rounded-3xl border border-blueDark border-solid border-2 m-[1vh] text-blueExtraLight z-10'>
            <a className='text-blueExtraLight hyphens-auto no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info">What does CO2 do?</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info">How is it monitored?</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info">Current research on CO2 Emissions</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info">What else influences our Environment ?</a>
            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info">CO2 Equivalents</a>
        </div> 
    );
}
