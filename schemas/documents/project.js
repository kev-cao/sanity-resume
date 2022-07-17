export default {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "URL",
      name: "url",
      type: "url",
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Show in Resume",
      name: "resume",
      type: "boolean",
      description: "Show this project in the PDF resume.",
      initialValue: false,
      options: {
        layout: "checkbox",
      },
    },
    {
      title: "Highlight Project",
      name: "highlight",
      type: "boolean",
      description:
        "Show this project in the highlights section of the website.",
      initialValue: false,
      options: {
        layout: "checkbox",
      },
    },
    {
      title: "Show in Terminal",
      name: "terminal",
      type: "boolean",
      description: "Show this project in the website terminal.",
      initialValue: false,
      options: {
        layout: "checkbox",
      },
    },
    {
      title: "Bullets",
      name: "bullets",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
