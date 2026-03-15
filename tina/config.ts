import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "home",
        label: "Homepage",
        path: "content/home",
        format: "json",
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero titel",
            required: true,
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero ondertitel",
            required: true,
          },
          {
            type: "string",
            name: "heroDescription",
            label: "Hero beschrijving",
          },
          {
            type: "string",
            name: "edition",
            label: "Editie tekst",
          },
          {
            type: "string",
            name: "eventDate",
            label: "Evenement datum (ISO)",
            description: "Datum voor de aftelklok, bijv. 2026-06-02T18:30:00",
          },
          {
            type: "object",
            name: "infoCards",
            label: "Info kaarten",
            list: true,
            fields: [
              { type: "string", name: "icon", label: "Icoon (emoji)" },
              { type: "string", name: "title", label: "Titel" },
              { type: "string", name: "description", label: "Beschrijving" },
            ],
          },
        ],
      },
      {
        name: "route",
        label: "Routes",
        path: "content/routes",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Naam",
            required: true,
          },
          {
            type: "string",
            name: "distance",
            label: "Afstand",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Beschrijving",
          },
          {
            type: "string",
            name: "startLocation",
            label: "Startlocatie",
          },
          {
            type: "string",
            name: "mapEmbedUrl",
            label: "Google Maps embed URL",
          },
          {
            type: "object",
            name: "highlights",
            label: "Hoogtepunten",
            list: true,
            fields: [
              { type: "string", name: "text", label: "Tekst" },
            ],
          },
        ],
      },
      {
        name: "faqItem",
        label: "FAQ",
        path: "content/faq",
        format: "json",
        fields: [
          {
            type: "string",
            name: "question",
            label: "Vraag",
            required: true,
          },
          {
            type: "string",
            name: "answer",
            label: "Antwoord",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "number",
            name: "order",
            label: "Volgorde",
          },
        ],
      },
      {
        name: "sponsor",
        label: "Sponsors",
        path: "content/sponsors",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Naam",
            required: true,
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
          {
            type: "string",
            name: "website",
            label: "Website URL",
          },
          {
            type: "string",
            name: "tier",
            label: "Niveau",
            options: ["hoofdsponsor", "sponsor", "partner"],
          },
          {
            type: "number",
            name: "order",
            label: "Volgorde",
          },
        ],
      },
      {
        name: "boardMember",
        label: "Bestuursleden",
        path: "content/organisatie",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Naam",
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Functie",
            required: true,
          },
          {
            type: "image",
            name: "photo",
            label: "Foto",
          },
          {
            type: "number",
            name: "order",
            label: "Volgorde",
          },
        ],
      },
      {
        name: "volunteerGroup",
        label: "Vrijwilligersgroepen",
        path: "content/vrijwilligers",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Groepsnaam",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Beschrijving",
          },
          {
            type: "string",
            name: "icon",
            label: "Icoon (emoji)",
          },
          {
            type: "number",
            name: "order",
            label: "Volgorde",
          },
        ],
      },
      {
        name: "siteSettings",
        label: "Site-instellingen",
        path: "content/settings",
        format: "json",
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Sitenaam",
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site beschrijving",
          },
          {
            type: "string",
            name: "email",
            label: "E-mailadres",
          },
          {
            type: "string",
            name: "phone",
            label: "Telefoonnummer",
          },
          {
            type: "string",
            name: "address",
            label: "Adres",
          },
          {
            type: "string",
            name: "postalCode",
            label: "Postcode + Plaats",
          },
          {
            type: "string",
            name: "kvk",
            label: "KvK-nummer",
          },
        ],
      },
    ],
  },
});
