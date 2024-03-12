import { DashboardIcon } from "@sanity/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "indicator",
  title: "Indicadores",
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
      title: "Identificador",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Este campo es obligatorio"),
    },
    {
      name: "type",
      title: "Tipo",
      type: "string",
      options: {
        list: [
          { title: "Simple", value: "simple" },
          /*           { title: "Porcentaje", value: "percentage" },
          { title: "Checklist", value: "checklist" },
          { title: "Múltiple", value: "multiple" }, */
          { title: "Anidado", value: "nested" },
        ],
      },
      validation: (Rule) => Rule.required().error("Este campo es obligatorio"),
    },
    {
      name: "person",
      title: "Persona a cargo",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "person" }],
        },
      ],
      hidden: ({ document }) => !document?.type || document.type == "nested",
    },

    /* Simple y porcentaje */
    {
      name: "frecuency",
      title: "Frecuencia",
      type: "string",
      options: {
        list: ["Mensual", "Bimensual", "Trimestral", "Semestral", "Anual"],
      },
      hidden: ({ document }) =>
        !document?.type ||
        (document.type !== "simple" && document.type !== "percentage"),
    },
    {
      name: "unity",
      title: "Unidad de medida",
      type: "string",
      hidden: ({ document }) =>
        !document?.type ||
        (document.type !== "simple" && document.type !== "percentage"),
    },
    /* Porcentaje */
    {
      name: "reportTitle",
      title: "Título de valor a reportar",
      description: "Ej: Número de errores en nómina",
      type: "string",
      hidden: ({ document }) =>
        !document?.type || document.type !== "percentage",
    },
    {
      name: "totalTitle",
      title: "Título de valor total",
      description: "Ej: Número total de reporte de nómina",
      type: "string",
      hidden: ({ document }) =>
        !document?.type || document.type !== "percentage",
    },
    /* Checklist */
    {
      name: "checklist",
      title: "Items para checkear",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      hidden: ({ document }) =>
        !document?.type || document.type !== "checklist",
    },
    /* Múltiple */
    {
      name: "multipleStructure",
      title: "Campos del formulario",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Nombre del campo",
              type: "string",
            },
            {
              name: "type",
              title: "Tipo",
              type: "string",
              options: {
                list: [
                  { title: "Texto", value: "text" },
                  { title: "Número", value: "number" },
                  { title: "Lista", value: "list" },
                  { title: "Respuesta Si/No", value: "check" },
                ],
              },
            },
            {
              name: "options",
              title: "Opciones",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
              hidden: ({ parent }) => !parent?.type || parent.type !== "list",
            },
            {
              name: "extraOptions",
              title: "Permite respuestas que no esten entre las opciones",
              type: "boolean",
              hidden: ({ parent }) => !parent?.type || parent.type !== "list",
            },
          ],
        },
      ],
      hidden: ({ document }) => !document?.type || document.type !== "multiple",
    },
    /* Anidado */
    {
      name: "nestedItems",
      title: "Lista de indicadores anidados",
      type: "array",
      of: [
        {
          type: "indicator-simple",
        },
      ],
      hidden: ({ document }) => !document?.type || document.type !== "nested",
    },
    /* {
      name: "parent",
      title: "Padre",
      type: "reference",
      to: [{ type: "indicator" }],
    }, */
  ],
};
