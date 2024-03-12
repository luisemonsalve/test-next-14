import { DashboardIcon } from "@sanity/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "generic",
  title: "Entradas generales",
  type: "document",
  icon: DashboardIcon,
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().error("Este campo es obligatorio"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Este campo es obligatorio"),
    },
    {
      name: "background_img",
      title: "Imagen de banner",
      type: "image",
    },
    {
      name: "intro",
      title: "Frase de introducción",
      type: "text",
      rows: 2,
    },
    {
      name: "content",
      title: "Contenido",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "content",
              title: "Bloque",
              type: "array",
              of: [
                { type: "block" },
                {
                  type: "image",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
