import React from "react";
import MenuHeader from "../../components/menuHeader";
import Footer from "../../components/footer";
import RootLayout from "../layout";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../components/TranslationsProvider";

const i18nNamespaces = ["contact"];

export default async function contactPage({
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
      <RootLayout params={params}>
        <MenuHeader />
        <div className=" mt-[5vh] flex flex-col justify-center items-center">
          <h1 className="text-blueExtraLight text-4xl  m-4  ">Contact</h1>
        </div>
        <Footer />
      </RootLayout>
    </TranslationsProvider>
  );
}
