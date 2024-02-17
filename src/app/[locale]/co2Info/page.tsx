import React from "react";
import MenuHeader from "../../components/menuHeader";
import TranslationsProvider from "../../components/TranslationsProvider";
import initTranslations from "../../i18n";
import Footer from "../../components/footer";

const i18nNamespaces = ["co2InfoPage"];

export default async function co2InfoPage({
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

      <div
        id="WhatIsCo2"
        className=" mt-[5vh] flex flex-col justify-center items-center"
      >
        <h1 className="text-blueExtraLight text-center text-4xl  m-4  ">
          {t("header")}
        </h1>

        <div className="flex flex-col items-center justify-center  sm:w-[80vw] w-[95vw]  p-8 bg-blueExtraDark rounded-lg">
          <h1 className="text-blueExtraLight text-2xl mb-4 font-bold">
            {t("h1")}
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li>
                  <strong className="text-blueExtraLight">
                    {t("t1Strong")}
                  </strong>{" "}
                  {t("t1")}
                </li>
                <li>
                  <strong className="text-blueExtraLight">
                    {t("t1Strong1")}
                  </strong>{" "}
                  {t("t1-1")}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="WhatDoesCo2Do" className="h-[5vh]" />
        <div className="flex m-5 flex-col items-center justify-center  sm:w-[80vw] w-[95vw]  p-8 bg-blueExtraDark rounded-lg">
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
            {t("h2")}
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                  <h1 className="text-blueLight text-2xl font-bold">
                    {t("h2Li1")}
                  </h1>
                  <strong className="text-blueExtraLight">
                    {t("t2Li1Strong1")}
                  </strong>{" "}
                  {t("t2Li1")}
                </li>

                <li>
                  <div className="flex flex-col mb-4 sm:flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <h1 className="text-blueLight text-2xl font-bold">
                        {t("h2Li2")}
                      </h1>
                      <strong className="text-blueExtraLight">
                        {t("t2Li2Strong1")}
                      </strong>{" "}
                    {" "}
                      {t("t2Li2")}
                    </div>

                    <img
                      className="rounded-xl w-full sm:w-[30%] h-auto mt-2 mb-4 sm:m-4 object-contain"
                      src="/photosynthesis.png"
                      alt="photosynthesis"
                    />
                  </div>
                </li>

                <li>
                  <div className="flex flex-col mb-4 sm:flex-row-reverse">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <h1 className="text-blueLight text-2xl font-bold">
                        {t("h2Li3")}
                      </h1>
                      <strong className="text-blueExtraLight">
                         {t("t2Li3Strong1")}
                      </strong>{" "}
                      {t("t2Li3")}
                    </div>

                    <img
                      className="rounded-xl object-contain w-full sm:w-[30%] h-auto mt-2 mb-4 sm:m-4"
                      src="/carbonation.png"
                      alt="carbonation"
                    />
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <h1 className="text-blueLight text-2xl font-bold">
                        {t("h2Li4")}
                      </h1>
                      <strong className="text-blueExtraLight">
                        {t("t2Li4Strong1")}
                      </strong>{" "}
                      {t("t2Li4")}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="HowIsItMonitored" className="h-[5vh]" />

        <div className="flex m-5 flex-col items-center justify-center  sm:w-[80vw] w-[95vw] p-8 bg-blueExtraDark rounded-lg">
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
             {t("h3")}
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                  <strong className="text-blueExtraLight">
                     {t("t3Li1Strong1")}
                  </strong>{" "}
                  {t("t3Li1")}
                </li>

                <li>
                  <div className="flex flex-col mb-4 sm:flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                        {t("t3Li2Strong1")}
                      </strong>{" "}
                      {t("t3Li2")}
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-col mb-4 sm:flex-row-reverse">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                        {t("t3Li3Strong1")}
                      </strong>{" "}
                       {t("t3Li3")}
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                         {t("t3Li4Strong1")}
                      </strong>{" "}
                      {t("t3Li4")}
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                         {t("t3Li5Strong1")}
                      </strong>{" "}
                     {" "}
                      {t("t3Li5")}
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                         {t("t3Li6Strong1")}
                      </strong>{" "}
                     {" "}
                      {t("t3Li6")}
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                         {t("t3Li7Strong1")}
                      </strong>{" "}
                      {" "}
                      {t("t3Li7")}
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                         {t("t3Li8Strong1")}
                      </strong>{" "}
                       {t("t3Li8")}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="CurrentResearch" className="h-[5vh]" />

        <div className="flex m-5 flex-col items-center justify-center  sm:w-[80vw] w-[95vw]  p-8 bg-blueExtraDark rounded-lg">
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
             {t("h4")}
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                  {t("t4")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="OtherInfluences" className="h-[5vh]" />
        <div className="flex m-5 flex-col items-center justify-center sm:w-[80vw] w-[95vw]  p-8 bg-blueExtraDark rounded-lg">
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
             {t("h5")}
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                 {" "}
                  {t("t5")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="CO2Equivalents" className="h-[5vh]" />
        <div className="flex m-5 flex-col items-center justify-center  sm:w-[80vw] w-[95vw] p-8 bg-blueExtraDark rounded-lg">
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
             {t("h6")}
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                  {t("t6")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </TranslationsProvider>
  );
}
