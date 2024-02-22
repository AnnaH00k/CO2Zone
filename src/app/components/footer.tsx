"use client";

import { useTranslation } from "react-i18next";





export default function Footer() {
    const { t, } = useTranslation("");

    return (
    <footer className="flex my-[10vh] mx-2 justify-center">
        <ul className="">
            <a className="m-2 text-blueExtraLight" href="/datasecurity"> {t("Datasecurity")}</a>
            <a className="m-2 text-blueExtraLight"  href="/impressum"> {t("Imprint")} </a>
            <a className="m-2 text-blueExtraLight"  href="/contact"> {t("Contact")} </a>
        </ul>
    </footer>
    );
}
