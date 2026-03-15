import { getContactPageContent, getSiteSettings } from "@/lib/content";
import ContactClient from "./ContactClient";

export default function ContactPage() {
  const contactContent = getContactPageContent();
  const settings = getSiteSettings();

  return (
    <ContactClient
      title={contactContent?.title ?? "Contact"}
      subtitle={contactContent?.subtitle ?? "Neem contact met ons op"}
      bureaus={
        contactContent?.bureaus ?? [
          {
            title: "Startbureau",
            description: "Alle vragen over inschrijven",
            buttonText: "Mail Startbureau",
            email: "startbureau@avond4daagsedrunen.nl",
          },
          {
            title: "Inschrijfbureau",
            description: "Geen bevestigingsmail ontvangen?",
            buttonText: "Mail Inschrijfbureau",
            email: "inschrijfbureau@avond4daagsedrunen.nl",
          },
          {
            title: "Stichting",
            description: "Overige vragen of opmerkingen",
            buttonText: "Contactformulier hieronder",
            email: "",
          },
        ]
      }
      address={settings.address}
      postalCode={settings.postalCode}
      phone={settings.phone}
      email={settings.email}
      footerSettings={settings}
    />
  );
}
