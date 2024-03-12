import { HomeIcon } from "@sanity/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  groups: [
    {
      title: "Banner",
      name: "banner",
    },
  ],
  fields: [
    {
      name: "banner",
      title: "Banner",
      type: "array",
      group: "banner",
      of: [
        {
          type: "document",
          fields: [
            {
              name: "title",
              title: "Título",
              type: "string",
            },
            {
              name: "background",
              title: "Fondo",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().error("Este campo es obligatorio"),
    },
  ],
};
