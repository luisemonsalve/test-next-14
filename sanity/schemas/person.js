import { DashboardIcon } from "@sanity/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "person",
  title: "Personas",
  type: "document",
  icon: DashboardIcon,
  fields: [
    {
      name: "position",
      title: "Cargo",
      type: "string",
      validation: (Rule) => Rule.required().error("Este campo es obligatorio"),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().error("Este campo es obligatorio"),
    },
    {
      title: "Área encargada",
      name: "area",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Innovación y desarrollo", value: "inn" },
          { title: "Educación y transformación escolar", value: "edu" },
          { title: "Mercadeo y servicios", value: "mer" },
          { title: "Comunicaciones y cultura", value: "cyc" },
          { title: "Contenidos y apropiación", value: "coa" },
          { title: "Talento y cultura organizacional", value: "tco" },
          { title: "Financiera y estratégica", value: "fin" },
          { title: "Procesos", value: "pro" },
          { title: "Conservación y bienestrar animal", value: "cba" },
        ],
      },
    },
  ],
};
