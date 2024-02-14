import MenuHeader from "../components/menuHeader";
import Footer from "../components/footer";

import ClientComponent from "../components/ClientComponent";
import LanguageChanger from "../components/LanguageChanger";
import TranslationsProvider from "../components/TranslationsProvider";
import initTranslations from "../i18n";
import SearchBar from "../components/searchbar";

const i18nNamespaces = ["home"];

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <MenuHeader />

      <main>
        <div className=" mt-[5vh] flex flex-col justify-center items-center">
          <div className="w-[40vw]">
            <img src="/CO2zoneLogo.png" alt="logo" width="100%" />
          </div>
          <h1 className="flex hyphens-auto text-center text-blueExtraLight text-lg sm:text-4xl m-4 ">
             {t("header")}
          </h1>
          <LanguageChanger />
        </div>

        <ClientComponent />


        <h1 className="text-blueExtraLight text-3xl text-center mt-5">
         {t("measuringUnitHeader")}
        </h1>
        <ul className="text-blueLight text-xl text-left m-6 ">
          <li>
           {t("measuringUnitText")}
          </li>
          <li></li>
        </ul>
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
