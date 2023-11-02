import React from 'react';

export default function MenuHeader() {
   

    return (
        <header>
            <nav >
                <div className='flex flex-col items-center'>
                <div className='flex flex-row items-center sm:fixed top-0 left-0 w-auto h-auto bg-blueExtraDark pl-[1vw] pr-[1vw] rounded-3xl border border-blueDark border-solid border-1 m-[1vh] text-blueExtraLight z-10'>
                    <a className='text-blueExtraLight no-underline text-sm sm:text-lg w-auto my-[1vh] mx-[1vw]' href="/">Overview</a>
                    <a className='text-blueExtraLight no-underline text-sm sm:text-lg w-auto my-[1vh] mx-[1vw]' href="/pages/co2Info">CO2 Infos</a>
                    <a className='text-blueExtraLight no-underline text-sm sm:text-lg w-auto my-[1vh] mx-[1vw]' href="/pages/actions">Actions</a>
                </div>
                <div id="menuSearch">
                    <form >
                        <input className='flex flex-row items-center sm:fixed top-0 right-0 w-auto h-auto bg-blueExtraDark pl-[1vw] pr-[1vw] pt-[1vh] pb-[1vh] rounded-3xl border border-blueDark border-1 m-[1vh] text-blueExtraLight text-sm sm:text-lg z-10' type="search" name="suche" placeholder="Search" />
                    </form>
                </div>
                </div>
            </nav>
        </header>
    );
}
