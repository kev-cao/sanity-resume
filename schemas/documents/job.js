export default {
  title: "Job",
  name: "job",
  type: "document",
  fields: [
    {
      title: "Company",
      name: "company",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Position",
      name: "position",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Location",
      name: "location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "End Date",
      name: "endDate",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
      validation: (Rule) =>
        Rule.custom(
          (endDate, context) =>
            !endDate ||
            endDate >= context.document.startDate ||
            "End date cannot be before start date."
        ),
    },
    {
      title: "Details",
      name: "details",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Highlight Job",
      name: "highlight",
      type: "boolean",
      description: "Show this job in the front page resume.",
      initialValue: false,
      options: {
        layout: "checkbox",
      },
    },
  ],
};
