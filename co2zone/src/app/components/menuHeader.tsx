import React from 'react';

export default function MenuHeader() {
   

    return (
        <header>
            <nav>
                <div id="menu">
                    <a href="/">Overview</a>
                    <a href="/pages/co2Info">CO2 Infos</a>
                    <a href="/pages/actions">Actions</a>
                </div>
                <div id="menuSearch">
                    <form >
                        <input type="search" name="suche" placeholder="Search" />
                    </form>
                </div>
            </nav>
        </header>
    );
}
