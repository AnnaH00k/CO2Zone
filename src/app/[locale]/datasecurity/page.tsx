import React from "react";
import MenuHeader from "../../components/menuHeader";
import Footer from "../../components/footer";
import TranslationsProvider from "../../components/TranslationsProvider";
import initTranslations from "../../i18n";

const i18nNamespaces = ["datasecurity"];

export default async function datasecurityPage({
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
    >      <MenuHeader />
      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-4xl  m-4  ">Datasecurity</h1>
      </div>
      <div className="container text-blueExtraLight mx-auto px-4">
        <p className="text-lg mb-4">
          At CO2zone, we take the security of your data seriously. We are
          committed to protecting your personal information and ensuring that it
          remains confidential. Here's an overview of our data security
          measures:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            Encryption: We use industry-standard encryption protocols to protect
            data transmission over the internet.
          </li>
          <li className="mb-2">
            Secure Storage: Your data is stored securely on our servers, which
            are protected by advanced security measures.
          </li>
          <li className="mb-2">
            Access Control: Access to your personal information is restricted to
            authorized personnel only.
          </li>
          <li className="mb-2">
            Regular Audits: We conduct regular security audits and assessments
            to identify and address any vulnerabilities.
          </li>
          <li className="mb-2">
            Compliance: We comply with relevant data protection regulations,
            such as GDPR, to ensure the privacy and security of your data.
          </li>
        </ul>
        <p className="text-lg mb-4">
          Additionally, we are transparent about how we collect, use, and share
          your data. Our Privacy Policy outlines these practices in detail,
          including information about cookies, analytics, and third-party
          services.
        </p>
        <p className="text-lg mb-4">
          If you have any questions or concerns about data security or privacy,
          please don't hesitate to contact us.
        </p>
      </div>
      <Footer />
    </TranslationsProvider>
  );
}
