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
        <h1 className="text-blueExtraLight text-4xl  m-4  ">Imprint</h1>
        <div className="container text-blueExtraLight mx-auto px-4">
          <h2 className="text-xl font-bold mb-2">
            Information according to § 5 TMG
          </h2>
          <p>
            CO2zone GmbH <br />
            Street Address <br />
            City, Postal Code <br />
            Country
          </p>
          <h2 className="text-xl font-bold mt-4">Represented by</h2>
          <p>John Doe (Managing Director)</p>
          <h2 className="text-xl font-bold mt-4">Contact Information</h2>
          <p>
            Phone: +123456789 <br />
            Email: info@co2zone.com
          </p>
          <h2 className="text-xl font-bold mt-4">Register entry</h2>
          <p>
            Registered in the Commercial Register. <br />
            Register court: [Court Name] <br />
            Registration number: [Registration Number]
          </p>
          <h2 className="text-xl font-bold mt-4">VAT ID</h2>
          <p>
            VAT identification number according to §27a of the German Value
            Added Tax Act: <br />
            [VAT ID Number]
          </p>
          <h2 className="text-xl font-bold mt-4">Disclaimer</h2>
          <p>
            The information contained in this website is for general information
            purposes only. The information is provided by CO2zone GmbH and while
            we endeavor to keep the information up to date and correct, we make
            no representations or warranties of any kind, express or implied,
            about the completeness, accuracy, reliability, suitability, or
            availability with respect to the website or the information,
            products, services, or related graphics contained on the website for
            any purpose. Any reliance you place on such information is therefore
            strictly at your own risk.
          </p>
        </div>
      </div>
      <Footer />
    </TranslationsProvider>
  );
}
