import React from "react";
import MenuHeader from "../../components/menuHeader";
import Footer from "../../components/footer";
import TranslationsProvider from "../../components/TranslationsProvider";
import initTranslations from "../../i18n";


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
      <MenuHeader />
      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-4xl  m-4  ">Contact</h1>
      </div>
      <div className="text-blueExtraLight container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">
          If you have any questions, suggestions, or feedback, please feel free
          to contact us using the information below. We'd love to hear from you!
        </p>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Address</h3>
          <p>
            CO2zone GmbH <br /> Street Address <br /> City, Postal Code <br />{" "}
            Country
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p>+123456789</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p>info@co2zone.com</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Social Media</h3>
          <p>Connect with us on social media platforms:</p>
          <ul className="list-disc list-inside">
            <li>
              Twitter: <a href="https://twitter.com/co2zone">@co2zone</a>
            </li>
            <li>
              Facebook: <a href="https://www.facebook.com/co2zone">CO2zone</a>
            </li>
            <li>
              Instagram:{" "}
              <a href="https://www.instagram.com/co2zone">@co2zone</a>
            </li>
          </ul>
        </div>
        <p className="text-lg mb-4">
          We typically respond to inquiries within 24-48 hours. Thank you for
          reaching out!
        </p>
      </div>
      <Footer />
    </TranslationsProvider>
  );
}
