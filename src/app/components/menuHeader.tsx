"use client";
import React, { useEffect, useRef, useState } from 'react';
import Menu2 from "./menu2";
import Menu3 from "./menu3";
import Menu4 from "./menu4";
import { ArrowArcRight, MagnifyingGlass } from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

export default function MenuHeader() {
    const menuRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResultCount, setSearchResultCount] = useState(0); // State variable for search result count


    const [menu2open, setMenu2Open] = useState(false);
    const [menu3open, setMenu3Open] = useState(false);
    const [menu4open, setMenu4Open] = useState(false);
    const { t } = useTranslation("");

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
                setMenu2Open(false);
                setMenu3Open(false);
                setMenu4Open(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMenu2Open(false);
            setMenu3Open(false);
            setMenu4Open(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, [menu2open, menu3open, menu4open]);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit =(event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log('Search Query:', searchQuery);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>)  => {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkInput();
        }
    };

    


    function checkInput() {
        var query = document.getElementById('search') as HTMLInputElement;
        if (query !== null) {
            var value = query.value;
            (window as any).find(value);
        }
        return true;
    }


    return (
        <header>
            <nav >
                <div ref={menuRef} className='flex flex-col items-center'>
                    <div className='flex flex-row items-start sm:fixed top-0 left-0 w-auto h-auto bg-blueExtraDark pl-[1vw] pr-[1vw] rounded-3xl border border-blueDark border-solid border-1 m-[1vh] text-blueExtraLight z-10'>
                        <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' onMouseEnter={() => { setMenu2Open(false); setMenu3Open(false); setMenu4Open(false) }} href='/'> {t("menuOverview")}</a>
                        <div className='flex flex-col items-start top-0 left-0 w-auto h-auto bg-blueExtraDark pl-[1vw] pr-[1vw] rounded-3xl text-blueExtraLight z-10' onMouseEnter={() => { setMenu2Open(true); setMenu3Open(false); setMenu4Open(false) }} onMouseLeave={() => setMenu2Open(true)}>
                            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' onClick={() => setMenu2Open(true)} > {t("menuCO2Infos")}</a>
                        </div>
                        <div className='flex flex-col items-start top-0 left-0 w-auto h-auto bg-blueExtraDark pl-[1vw] pr-[1vw] rounded-3xl text-blueExtraLight z-10' onMouseEnter={() => { setMenu2Open(false); setMenu3Open(true); setMenu4Open(false) }} onMouseLeave={() => setMenu3Open(true)}>
                            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' onClick={() => setMenu3Open(true)}> {t("menuActions")}</a>
                        </div>
                        <div className='flex flex-col items-start top-0 left-0 w-auto h-auto bg-blueExtraDark pl-[1vw] pr-[1vw] rounded-3xl text-blueExtraLight z-10' onMouseEnter={() => { setMenu2Open(false); setMenu3Open(false); setMenu4Open(true) }} onMouseLeave={() => setMenu4Open(true)}>
                            <a className='text-blueExtraLight no-underline text-sm md:text-lg sm:text-md w-auto my-[1vh] mx-[1vw]' onClick={() => setMenu4Open(true)}>{t("menuInteresting")}</a>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:items-start items-center sm:fixed top-0 left-0 sm:mt-[6vh]'>
                        {menu2open && <Menu2 />}
                        {menu3open && <Menu3 />}
                        {menu4open && <Menu4 />}
                    </div>
                    <div className="search_box">
                        <form action="" id="form2" className='flex flex-row items-center sm:fixed top-0 right-0 w-auto h-auto bg-blueExtraDark pl-[1vw] pr-[1vw] pt-[1vh] pb-[1vh] rounded-3xl border border-blueDark border-1 m-[1vh] text-blueExtraLight text-sm md:text-lg sm:text-md z-10' >
                            <input className='bg-blueExtraDark ' type="text" id="search" name="suche" placeholder="Search" onKeyDown={handleKeyDown} />
                            <button type="button" id="submit_form" onClick={checkInput} title="Search"><MagnifyingGlass size={25} /></button>

                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}
