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
          Thank you for your interest in our website. We take data security seriously, even though we do not save any personal data. Below are details about the security measures we have implemented:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <strong>Encryption Methods: </strong> While we do not collect personal data, any communication between your browser and our website is encrypted using HTTPS to ensure data integrity and security.
          </li>
          <li className="mb-2">
            <strong>Access Controls:</strong> Our website does not require user authentication or access controls as we do not store any personal data.
          </li>
          <li className="mb-2">
          <strong>Secure Data Storage:</strong> We do not save any personal data on our servers. Therefore, there are no data storage concerns.
          </li>
          <li className="mb-2">
          <strong>Regular Security Audits:</strong> Although we do not store personal data, we conduct regular security checks and updates to ensure the overall safety and integrity of our website.
          </li>
          <li className="mb-2">
          <strong>Compliance with Regulations:</strong> While we are not subject to specific data protection regulations due to our non-collection of personal data, we are committed to adhering to best practices for online security.
          </li>
          <li className="mb-2">
          <strong>Incident Response Plan:</strong> In the unlikely event of a security breach, we have procedures in place to investigate and rectify the issue promptly. However, since we do not store personal data, the impact of such incidents is minimal.
          </li>
          <li className="mb-2">
          <strong>User Consent and Rights:</strong> As we do not collect personal data, there are no mechanisms for user consent or rights regarding data privacy.
          </li>
          <li className="mb-2">
          <strong>Additional Information:</strong> We want to reassure our users that their privacy and security are of utmost importance to us. Even though we do not collect personal data, we remain vigilant in maintaining a secure online environment.
          </li>
        </ul>
        <p className="text-lg mb-4">
          If you have any questions or concerns about data security or privacy,
          please don't hesitate to contact us.
        </p>
      </div>
      <Footer />
    </TranslationsProvider>
  );
}
