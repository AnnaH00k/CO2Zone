import React from "react";
import MenuHeader from "../../components/menuHeader";
import Footer from "../../components/footer";
import TranslationsProvider from "../../components/TranslationsProvider";
import initTranslations from "../../i18n";

const i18nNamespaces = ["impressum"];

export default async function impressumPage({
  params,
}: {
  params: { locale: string };
}) {

  const { locale } = params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);


  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
     <MenuHeader />
      <div className=" text-blueExtraLight mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-4xl  m-4  "> {t("header")}</h1>
        <div className="container text-blueExtraLight mx-auto px-4">
          <h2 className="text-xl font-bold mb-2">
            {t("subheader")}
          </h2>
          <p>
             {t("company")}<br />
            {t("street")} <br />
            {t("city")} <br />
            {t("country")}
          </p>
          <h2 className="text-xl font-bold mt-4">{t("represented")}</h2>
          <p>{t("director")}</p>
          <h2 className="text-xl font-bold mt-4">{t("contactheader")}</h2>
          <p>
             {t("phone")}<br />
              {t("email")}
          </p>
          <h2 className="text-xl font-bold mt-4">{t("registerheader")}</h2>
          <p>
             {t("register1")}<br />
           {t("register2")}<br />
            {t("register3")}
          </p>
          <h2 className="text-xl font-bold mt-4">{t("vatid")}</h2>
          <p>
             {t("vat1")}<br />
            {t("vat2")}
          </p>
          <h2 className="text-xl font-bold mt-4">{t("disclaimerheader")}</h2>
          <p>
           {t("disclaimertext")}
          </p>
        </div>
      </div>
      <Footer />
    </TranslationsProvider>
  );
}
