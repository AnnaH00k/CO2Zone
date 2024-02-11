import React from "react";
import MenuHeader from "../../components/menuHeader";
import TranslationsProvider from "../../components/TranslationsProvider";
import initTranslations from "../../i18n";

const i18nNamespaces = ["interestingPage"];

export default async function interestingPage({
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
      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-center text-4xl  m-4  ">
          {t("header")}
        </h1>

        <div id="CooperationOnClimateChange" className="h-[5vh]" />

        <div className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg">
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
            {t("h1")}
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4"> {t("t1Li1")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="EmissionTradingSchemes" className="h-[5vh]" />

        <div className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg">
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
             {t("h2")}
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                 {t("t2Li1")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="Geoengineering" className="h-[5vh]" />

        <div className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg">
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
            {t("h3")}
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                   {t("t3Li1")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="ClimateChangeDenial" className="h-[5vh]" />
        <div className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg">
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
             {t("h4")}
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                   {t("t4Li1")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </TranslationsProvider>
  );
}
